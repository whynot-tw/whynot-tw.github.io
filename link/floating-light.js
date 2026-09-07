/* Why Not /link｜浮光掠影 V1
   Auto: controlled-random direction, first 2.8–4.0s, then 5.0–8.0s, 2.3s sweep.
   Interaction: left 40% => left, center 20% => split, right 40% => right.
*/

(function () {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const SWEEP_CLASSES = [
    'sweep-auto-right', 'sweep-auto-left',
    'sweep-hit-left', 'sweep-hit-right', 'sweep-hit-burst'
  ];
  const AUTO_DURATION = 2400;
  const HIT_DURATION = 1950;
  const state = {
    lastDirection: null,
    sameDirectionCount: 0,
    lastButtonIndex: -1,
  };

  function getButtons() {
    return Array.from(document.querySelectorAll('.link-button'));
  }

  function ensureSweepLayers() {
    getButtons().forEach((button) => {
      if (button.querySelector('.sweep-layer')) return;

      const layer = document.createElement('span');
      layer.className = 'sweep-layer';
      layer.setAttribute('aria-hidden', 'true');

      const beamA = document.createElement('span');
      beamA.className = 'sweep-beam sweep-beam--a';
      const beamB = document.createElement('span');
      beamB.className = 'sweep-beam sweep-beam--b';

      layer.append(beamA, beamB);
      button.prepend(layer);
    });
  }

  function clearSweepClasses(button) {
    button.classList.remove(...SWEEP_CLASSES);
  }

  function restartSweep(button, className, duration) {
    clearSweepClasses(button);
    void button.offsetWidth;
    button.classList.add(className);
    window.setTimeout(() => button.classList.remove(className), duration);
  }

  function setOrigin(button, ratio) {
    const clamped = Math.min(0.82, Math.max(0.18, ratio));
    button.style.setProperty('--origin-x', `${(clamped * 100).toFixed(2)}%`);
  }

  function getModeFromRatio(ratio) {
    if (ratio < 0.4) return 'left';
    if (ratio > 0.6) return 'right';
    return 'burst';
  }

  function triggerInteractive(button, ratio) {
    if (!button || prefersReducedMotion) return;
    setOrigin(button, ratio);
    const mode = getModeFromRatio(ratio);
    const className = mode === 'left'
      ? 'sweep-hit-left'
      : mode === 'right'
        ? 'sweep-hit-right'
        : 'sweep-hit-burst';
    restartSweep(button, className, HIT_DURATION);
  }

  function chooseAutoDirection() {
    let direction;

    if (!state.lastDirection) {
      direction = Math.random() < 0.5 ? 'left' : 'right';
    } else if (state.sameDirectionCount >= 2) {
      direction = state.lastDirection === 'left' ? 'right' : 'left';
    } else {
      direction = Math.random() < 0.5 ? 'left' : 'right';
    }

    if (direction === state.lastDirection) {
      state.sameDirectionCount += 1;
    } else {
      state.lastDirection = direction;
      state.sameDirectionCount = 1;
    }

    return direction;
  }

  function chooseAutoButton(buttons) {
    const available = buttons.filter((button) =>
      !button.matches(':hover') &&
      !button.matches(':focus-visible') &&
      !button.matches(':focus')
    );
    const pool = available.length ? available : buttons;
    let candidates = pool;

    if (pool.length > 1 && state.lastButtonIndex >= 0) {
      candidates = pool.filter((button) => buttons.indexOf(button) !== state.lastButtonIndex);
      if (!candidates.length) candidates = pool;
    }

    const chosen = candidates[Math.floor(Math.random() * candidates.length)];
    state.lastButtonIndex = buttons.indexOf(chosen);
    return chosen;
  }

  function scheduleNextRandomSweep(firstRun = false) {
    if (prefersReducedMotion) return;

    const delay = firstRun
      ? 2800 + Math.random() * 1200
      : 5000 + Math.random() * 3000;

    window.setTimeout(runRandomSweep, delay);
  }

  function runRandomSweep() {
    const buttons = getButtons();

    if (!buttons.length) {
      scheduleNextRandomSweep();
      return;
    }

    const button = chooseAutoButton(buttons);
    const direction = chooseAutoDirection();
    setOrigin(button, 0.5);
    restartSweep(
      button,
      direction === 'left' ? 'sweep-auto-left' : 'sweep-auto-right',
      AUTO_DURATION
    );
    scheduleNextRandomSweep();
  }

  function getRatioFromEvent(button, event) {
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    return rect.width ? x / rect.width : 0.5;
  }

  function initInteractions() {
    getButtons().forEach((button) => {
      button.addEventListener('pointerenter', (event) => {
        if (event.pointerType && event.pointerType !== 'mouse') return;
        triggerInteractive(button, getRatioFromEvent(button, event));
      });

      button.addEventListener('pointerdown', (event) => {
        button.classList.add('is-pressed');
        triggerInteractive(button, getRatioFromEvent(button, event));
        window.setTimeout(() => button.classList.remove('is-pressed'), 240);
      }, { passive: true });

      button.addEventListener('pointerup', () => {
        button.classList.remove('is-pressed');
      });

      button.addEventListener('pointercancel', () => {
        button.classList.remove('is-pressed');
      });

      button.addEventListener('pointerleave', () => {
        button.classList.remove('is-pressed');
      });

      button.addEventListener('focusin', () => {
        triggerInteractive(button, 0.5);
      });
    });
  }

  function bootstrap() {
    ensureSweepLayers();
    initInteractions();
    scheduleNextRandomSweep(true);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap, { once: true });
  } else {
    bootstrap();
  }
})();

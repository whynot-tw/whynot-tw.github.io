/**
 * 編輯校樣藍圖：全站導覽以安靜、可回溯的檔案路徑為原則，品牌字標待正式手寫稿取代。
 */

import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { navigation } from "@/data/siteContent";

// 暫用品牌符號；正式手寫字標交付後請替換此檔案。
const markUrl = `${import.meta.env.BASE_URL}images/whynot-symbol-mark.svg`;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="brand-lockup" onClick={() => setMenuOpen(false)}>
          <img src={markUrl} alt="WHYNOT STUDIO 暫用品牌符號" className="brand-lockup__mark" />
          <span className="brand-lockup__text">
            <small className="brand-lockup__index">TYPE / 01</small>
            <strong>有何不可設計</strong>
            <small>WHYNOT STUDIO</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="主要導覽">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
          <Link href="/works" className="nav-cta">
            查看作品 <span aria-hidden="true">↗</span>
          </Link>
        </nav>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={menuOpen ? "關閉選單" : "開啟選單"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`mobile-nav ${menuOpen ? "mobile-nav--open" : ""}`}>
        <nav aria-label="行動版主要導覽">
          {navigation.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="mobile-nav__link"
              onClick={() => setMenuOpen(false)}
            >
              <span>0{index + 1}</span>
              {item.label}
              <i aria-hidden="true">↗</i>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__line" aria-hidden="true" />
      <div className="site-footer__grid">
        <div className="site-footer__identity">
          <img src={markUrl} alt="" aria-hidden="true" />
          <p>有何不可設計<br />WHYNOT STUDIO</p>
        </div>
        <p className="site-footer__statement">先求有，再求好。<br />先把問題整理清楚，再做出真正能使用的設計。</p>
        <div className="site-footer__actions">
          <Link href="/contact">合作聯絡 ↗</Link>
          <span>© {new Date().getFullYear()} WHYNOT STUDIO</span>
        </div>
      </div>
    </footer>
  );
}

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

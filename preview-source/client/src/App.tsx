/**
 * 編輯校樣藍圖：全站由同一組公開路由與固定導覽框架組成，確保每一頁都有清楚的回到作品與聯絡路徑。
 */

import { Route, Router, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import WorkDetail from "./pages/WorkDetail";
import Works from "./pages/Works";

// import.meta.env.BASE_URL 會依 vite.config.ts 的 base 設定自動帶入
// （目前部署目標是 GitHub User Pages 根目錄，base 為 "/"）。
// 這裡去掉結尾斜線是因為 wouter 的 base 不接受結尾斜線；
// 若之後改成 Project Pages 子路徑部署，這段邏輯不用改。
const routerBase = import.meta.env.BASE_URL.replace(/\/$/, "");

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/works/:id" component={WorkDetail} />
      <Route path="/works" component={Works} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <Router base={routerBase}>
          <AppRouter />
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;


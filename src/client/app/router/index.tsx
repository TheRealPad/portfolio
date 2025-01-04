import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../../pages/home";

function Router() {
  return (
    <BrowserRouter>
      <div>
        {/* Common Components (like a Header) */}
        {/*<header>*/}
        {/*  <nav>*/}
        {/*    <ul>*/}
        {/*      <li>*/}
        {/*        <a href="/">Home</a>*/}
        {/*      </li>*/}
        {/*      <li>*/}
        {/*        <a href="/about">About</a>*/}
        {/*      </li>*/}
        {/*      <li>*/}
        {/*        <a href="/contact">Contact</a>*/}
        {/*      </li>*/}
        {/*    </ul>*/}
        {/*  </nav>*/}
        {/*</header>*/}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Home />} />
        </Routes>

        {/*<footer>*/}
        {/*  <p>© 2025 My App</p>*/}
        {/*</footer>*/}
      </div>
    </BrowserRouter>
  );
}

export { Router };

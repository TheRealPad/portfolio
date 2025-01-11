import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "@components/header";
import { Home } from "@pages/home";
import { Work } from "@pages/work";
import { Contact } from "@pages/contact";
import { Experience } from "@pages/experience";
import { Expertise } from "@pages/expertise";

function Router() {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Home />} />
          <Route path="/portfolio/contact" element={<Contact />} />
          <Route path="/portfolio/work" element={<Work />} />
          <Route path="/portfolio/experience" element={<Experience />} />
          <Route path="/portfolio/expertise" element={<Expertise />} />
        </Routes>

        {/*<footer>*/}
        {/*  <p>© 2025 My App</p>*/}
        {/*</footer>*/}
      </div>
    </BrowserRouter>
  );
}

export { Router };

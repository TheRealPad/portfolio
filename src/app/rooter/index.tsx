import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../../pages/home";
import { NotFound } from "../../pages/notFound";
import { Me } from "../../pages/me";
import { Projects } from "../../pages/projects";

function Rooter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFound />,
    },
    {
      path: "/me",
      element: <Me />,
      errorElement: <NotFound />,
    },
    {
      path: "/projects",
      element: <Projects />,
      errorElement: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export { Rooter };

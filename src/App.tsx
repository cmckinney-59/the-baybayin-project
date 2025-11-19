import type { JSX } from "react";

import { createHashRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Root";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
// import ShopPage from "./pages/ShopPage";
import BaybayinPage from "./pages/TransliteratorPages/BaybayinPage";
import DeseretPage from "./pages/TransliteratorPages/DeseretPage";
import AurebeshPage from "./pages/TransliteratorPages/AurebeshPage";
import TengwarPage from "./pages/TransliteratorPages/TengwarPage";
import BaybayinPageLite from "./pages/TransliteratorPages/BaybayinPageLite";
import TransliteratorPage from "./pages/TransliteratorPages/TransliteratorPage";
import SocialPage from "./pages/SocialPage/SocialPage";

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <div>Something went wrong!</div>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/social",
        element: <SocialPage />,
      },
      // {
      //   path: "/shop",
      //   element: <ShopPage />,
      // },
      {
        path: "/transliterator",
        element: <TransliteratorPage />,
        children: [
          {
            path: "baybayin",
            element: <BaybayinPage />,
          },
          {
            path: "baybayin-lite",
            element: <BaybayinPageLite />,
          },
          {
            path: "deseret",
            element: <DeseretPage />,
          },
          {
            path: "aurebesh",
            element: <AurebeshPage />,
          },
          {
            path: "tengwar",
            element: <TengwarPage />,
          },
        ],
      },
    ],
  },
]);

function App(): JSX.Element {
  return <RouterProvider router={router} />;
}

export default App;

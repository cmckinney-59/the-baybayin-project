import type { JSX } from "react";

import { createHashRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Root";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import TransliteratorPage from "./pages/TransliteratorPages/TransliteratorPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";

import AtlanteanPage from "./pages/TransliteratorPages/Atlantean/AtlanteanPage";
import AurebeshPage from "./pages/TransliteratorPages/Aurebesh/AurebeshPage";
import BaybayinPage from "./pages/TransliteratorPages/Baybayin/BaybayinPage";
import DeseretPage from "./pages/TransliteratorPages/Deseret/DeseretPage";
import GallifreyanPage from "./pages/TransliteratorPages/Gallifreyan/GallifreyanPage";
import MarasEyePage from "./pages/TransliteratorPages/MarasEye/MarasEyePage";
import MatoranPage from "./pages/TransliteratorPages/Matoran/MatoranPage";
import PlqadPage from "./pages/TransliteratorPages/Plqad/PlqadPage";
import SteelPage from "./pages/TransliteratorPages/Steel/SteelPage";
import TengwarPage from "./pages/TransliteratorPages/Tengwar/TengwarPage";
import UnownPage from "./pages/TransliteratorPages/Unown/UnownPage";

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
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
        path: "/settings",
        element: <SettingsPage />,
      },
      {
        path: "/transliterator",
        element: <TransliteratorPage />,
        children: [
          {
            path: "atlantean",
            element: <AtlanteanPage />,
          },
          {
            path: "aurebesh",
            element: <AurebeshPage />,
          },
          {
            path: "baybayin",
            element: <BaybayinPage />,
          },
          {
            path: "deseret",
            element: <DeseretPage />,
          },
          {
            path: "gallifreyan",
            element: <GallifreyanPage />,
          },
          {
            path: "maras-eye",
            element: <MarasEyePage />,
          },
          {
            path: "matoran",
            element: <MatoranPage />,
          },
          {
            path: "plqad",
            element: <PlqadPage />,
          },
          {
            path: "steel",
            element: <SteelPage />,
          },
          {
            path: "tengwar",
            element: <TengwarPage />,
          },
          {
            path: "unown",
            element: <UnownPage />,
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

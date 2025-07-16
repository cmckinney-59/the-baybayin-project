import type { JSX } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BaybayinPage from "./pages/BaybayinPage";
import RootLayout from "./Root";
import DeseretPage from "./pages/DeseretPage";
import AurebeshPage from "./pages/AurebeshPage";
import BaybayinPageLite from "./pages/BaybayinPageLite";
import TransliteratorPage from "./pages/TransliteratorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/transliterator",
        element: <TransliteratorPage />,
      },
      {
        path: "/baybayin-lite",
        element: <BaybayinPageLite />,
      },
      {
        path: "/baybayin",
        element: <BaybayinPage />,
      },
      {
        path: "/deseret",
        element: <DeseretPage />,
      },
      {
        path: "/aurebesh",
        element: <AurebeshPage />,
      },
    ],
  },
]);

function App(): JSX.Element {
  return <RouterProvider router={router} />;
}

export default App;

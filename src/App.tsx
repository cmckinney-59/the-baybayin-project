import type { JSX } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BaybayinPage from "./pages/BaybayinPage";
import RootLayout from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/baybayin",
        element: <BaybayinPage />,
      },
    ],
  },
]);

function App(): JSX.Element {
  return <RouterProvider router={router} />;
}

export default App;

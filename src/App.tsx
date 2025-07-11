import type { JSX } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BaybayinPage from "./pages/BaybayinPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <BaybayinPage />,
      },
    ],
  },
]);

function App(): JSX.Element {
  return <RouterProvider router={router} />;
}

export default App;

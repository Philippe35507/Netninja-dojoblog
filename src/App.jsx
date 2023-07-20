import RootLayout from "./layouts/RootLayout";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Create from "./Create";
import Home from "./Home";
import BlogDetails from "./BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "create",
        element: <Create />,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

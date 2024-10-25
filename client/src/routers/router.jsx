import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <h1>Login</h1> },
      { path: "/dashboard", element: <h1>Dashboard</h1> },
      { path: "/order", element: <h1>Orders</h1> },
      { path: "/cart", element: <h1>Cart Page</h1> },
      { path: "/checkout", element: <h1>Check Out</h1> },
    ],
  },
]);

export default router;

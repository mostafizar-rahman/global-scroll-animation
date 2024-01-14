import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/about";
import Services from "../pages/services";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/services",
        element:<Services/>
    },

])
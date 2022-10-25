import { createBrowserRouter } from "react-router-dom";
import Main from "../../Outlet/Main";
import Home from "../../pages/Home/Home";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('http://localhost:5000/homeData')
            }
        ]
    }

])
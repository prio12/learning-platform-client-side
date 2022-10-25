import { createBrowserRouter } from "react-router-dom";
import Main from "../../Outlet/Main";
import Blog from "../../pages/Blog/Blog/Blog";
import Courses from "../../pages/Courses/Courses/Courses";
import Faq from "../../pages/Faq/Faq/Faq";
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
            },
            {
                path:'/courses',
                element:<Courses></Courses>
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }

        ]
    }

])
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Outlet/Main";
import Blog from "../../pages/Blog/Blog/Blog";
import CourseDetails from "../../pages/CourseDetails/CourseDetails/CourseDetails";
import Courses from "../../pages/Courses/Courses/Courses";
import Faq from "../../pages/Faq/Faq/Faq";
import HandleError from "../../pages/HandleError/HandleError";
import Home from "../../pages/Home/Home";
import PremiumSection from "../../pages/PremiumSection/PremiumSection/PremiumSection";
import SignIn from "../../pages/SignIn/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp/SignUp";
import CheckOutRoute from "../Checkout/ChekoutRoute/CheckOutRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('https://assignment10-server-ecru.vercel.app/homeData')
            },
            {
                path:'/courses',
                element:<Courses></Courses>,
                loader: () => fetch('https://assignment10-server-ecru.vercel.app/courses')
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params}) => fetch(`https://assignment10-server-ecru.vercel.app/courses/${params.id}`)
            },
            {
                path:'/premium',
                element:<CheckOutRoute><PremiumSection></PremiumSection></CheckOutRoute>,
                loader: () => fetch('https://assignment10-server-ecru.vercel.app/courses')
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/signIn',
                element:<SignIn></SignIn>
            }

        ]
    },
    {
        path: "*",
        element:<HandleError></HandleError> ,
      },

])
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import TopRated from "../Pages/TopRated";
import About from "../Pages/About";
import Main from "../Layout/Main";
import WishList from "../Pages/WishList";
import UseReducerPractice from "../Pages/UseReducerPractice";

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<About></About>,
        children:[
            {
                path:'/home',
                element:<About></About>
            },
            {
                path:'/about',
                element:<Home></Home>
            },
            {
                path:'/topRated',
                element:<TopRated></TopRated>
            },
            {
                path:'/cart',
                element:<Cart></Cart>
            },
            {
                path:'/wishlist',
                element:<WishList></WishList>
            },
            {
                path:'/useReducerPractice',
                element:<UseReducerPractice></UseReducerPractice>
            },
        ]
    }
])
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import MainLaout from "../layout/MainLaout";
import Details from "../pages/Details";


export const router=createBrowserRouter([
    {
        path:"/",
        element:<MainLaout/>,
        children: [
            {
                index:true,
                element:<Home/>
            },
            {
                path: "products",
                element:<Products/>
            },{
                path:"cart",
                element:<Cart/>
            },{
                path:"product-detail/:id",
                element:<Details/>
            }
        ]
    }
])
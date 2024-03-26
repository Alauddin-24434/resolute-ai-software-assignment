import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Signup from "../pages/signup/Signup";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";


import FormBuilder from "../pages/form/Form";





const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout />,
        children: [
            {
                path: '/',
                element:<Home/>,
            },
            {
                path: '/form',
                element:<FormBuilder/>,
            },
         

            {
                path: '/signUp',
                element:<Signup/>,
            },
            {
                path: '/login',
                element:<Login/>,
            },
       
        ]
    },
    
])

export default Routes;
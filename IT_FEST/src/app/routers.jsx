import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/mainPage/mainPage.jsx";
import RegisterPage from "../pages/auth/registerPage/registerPage.jsx";


export const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainPage /> 
    },
    {
        path: '/section',
        element: <RegisterPage /> 
    }
]);

import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/mainPage/mainPage.jsx";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainPage /> 
    }
]);

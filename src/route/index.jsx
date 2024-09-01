import Layout from "../component/layout/Layout"
import RegisterPage from "../pages/homePage/registerPage";
export const ROUTE = [
    {
        path: "/",
        element:<Layout/>
    },
    {
        path: "/registerPage",
        element:<RegisterPage/>
    }
]
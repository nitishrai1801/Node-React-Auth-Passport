import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Auth from "./pages/Auth";
import Payment from "./pages/Payment";
import { FC } from "react";
import RestaurantFinder from "./pages/RestaurantFinder";

interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

const routes: Array<Route> = [
    {
        key: "route-home",
        title: "Home",
        path: "/",
        enabled: true,
        component: Home
    },
    {
        key: "route-about",
        title: "About",
        path: "/about",
        enabled: true,
        component: About
    },
    {
        key: "route-contactUs",
        title: "Contact Us",
        path: "/contactUs",
        enabled: true,
        component: ContactUs
    },
    {
        key: "route-auth",
        title: "Login",
        path: "/auth",
        enabled: true,
        component: Auth
    },
    {
        key: "route-payment",
        title: "Payment",
        path: "/payment",
        enabled: true,
        component: Payment
    },
    {
        key: "route-RestaurantFind",
        title: "Restaurant List",
        path: "/findRestaurant",
        enabled: true,
        component: RestaurantFinder
    }
]

export default routes;
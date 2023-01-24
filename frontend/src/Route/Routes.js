import Add from "../Pages/Add/Add";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import MainRoot from "../Pages/MainRoot";
import Page from "../Pages/Page/Page";
import Shop from "../Pages/Shop/Shop";

export const ROUTES = [
    {
        path: '/',
        element: <MainRoot />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: "pages",
                element: <Page />
            },

            {
                path: "shop",
                element: <Shop />
            },
            {
                path: "blog",
                element: <Blog />
            },
            {
                path: "add",
                element: <Add />
            }
        ]
    }
]
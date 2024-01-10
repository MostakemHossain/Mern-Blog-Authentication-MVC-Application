import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import AuthorPost from "../pages/AuthorPost";
import CategoryPosts from "../pages/CategoryPosts";
import DashBoard from "../pages/DashBoard";
import EditPost from "../pages/EditPost";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import LogOut from "../pages/LogOut";
import Login from "../pages/Login";
import PostDetails from "../pages/PostDetails";
import Register from "../pages/Register";
import UserProfile from "../pages/UserProfile";
import CreatePost from "../pages/createPost";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/', element: <Home />
            },
            {
                path: '/posts/:id', element: <PostDetails />
            },
            {
                path: '/register', element: <Register />
            },
            {
                path: '/login', element: <Login />
            },
            {
                path:'/profile/:id',element:<UserProfile/>
            },
            {
                path:'/create',element:<CreatePost/>
            },
            {
                path:'/posts/:id/edit',element:<EditPost/>
            },
            {
                path:'/logout',element:<LogOut/>
            },
            {
                path:'/myposts/:id',element:<DashBoard/>
            },
            {
                path:'/posts/users/:id',element:<AuthorPost/>
            },
            {
                path:'/posts/categories/category',element:<CategoryPosts/>
            }
        ]
    }
])
export default router;
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout';
import { Add, Gig, Gigs, Home, Login, Message, Messages, MyGigs, Orders, Register } from '../pages'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/gigs",
                element: <Gigs />,
            },
            {
                path: "/myGigs",
                element: <MyGigs />,
            },
            {
                path: "/orders",
                element: <Orders />,
            },
            {
                path: "/messages",
                element: <Messages />,
            },
            {
                path: "/message/:id",
                element: <Message />,
            },
            {
                path: "/add",
                element: <Add />,
            },
            {
                path: "/gig/:id",
                element: <Gig />,
            },
        ],
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);
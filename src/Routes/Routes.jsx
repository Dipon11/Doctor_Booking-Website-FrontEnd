import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import Root from '../Pages/Root/Root';
import Home from '../Components/Home/Home';
import Details from '../Pages/Details/Details';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import Blogs from '../Pages/Blogs/Blogs';
import Booklist from '../Components/Booklist/Booklist';


export const router = createBrowserRouter([
  {
    path: "/",
    Component :Root,
     errorElement: <ErrorPage></ErrorPage>,
    children :[
     {
      index:true,
      loader :()=>fetch('data.json'),
      path:"/",
      Component:Home
     },
     {
      path: '/details/:id',
      loader :()=>fetch('/data.json'),
      Component:Details
     },
     {
      path: '/blogs',
      Component:Blogs
     },
     {
      path: 'bookedList',
      loader :()=>fetch('/data.json'),
      Component:Booklist
     }
    ]

  },
]);
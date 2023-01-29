import React from 'react';
import Parent from './components/main';
import About from './components/main/about/About';
import LayOut from './LayOut';
import { useRoutes } from "react-router-dom";
import Projectindex from './components/main/project';
import Contactindex from './components/main/contact';
import Blog from './components/main/blog/Blog';
import Creative from './components/main/blog/creative/Creative';
import Agency from './components/main/project/agency/Agency';




export default function Routes() {
    let element = useRoutes([
        {
            element: <LayOut/>,
        children: [
            {path: "/", element: <Parent/>},
            { path: "blog", element: <Blog/>},
            { path: "about", element: <About/> },
            { path: "project", element: <Projectindex/> },
            { path: "contact", element: <Contactindex/> },
            { path: "creative", element: <Creative/> },
            { path: "agency", element: <Agency/> },

        ]
    },
    ]);
    return element;
 
}

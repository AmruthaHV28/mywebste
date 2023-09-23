import { Outlet } from "react-router-dom";

import { EntryPoint } from "../pages/lessons/EntryPoint.page";

export let MyEntryPoint={
    path:'/',
    element:<> <Outlet/></>,
    children:[
        {
            path:'entry',
            element:<EntryPoint/>
        }
    ]
}
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layot/Layout";
import Login from "../Login";
import Document from "../page/Document";
import PassportWithPhoto from "../page/PassportWithPhoto";

export   const   router =createBrowserRouter([{
    path:"/",
    element:<Layout></Layout>,
    children:[
        {
            path:"/",
            element:<Login></Login>
        },
    {
        path:"/document",
        element:<Document></Document>
    },
    {
         path:"/info-with-passposrt",
         element:<PassportWithPhoto></PassportWithPhoto>
    }
    ]
}])
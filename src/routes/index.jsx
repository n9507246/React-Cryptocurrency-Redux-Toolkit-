import { Navigate, createBrowserRouter} from "react-router-dom"
import { lazy } from "react"

const DefaultLayout = lazy(()=>import('@views/layouts/DefaultLayout'))
const Home = lazy(()=>import('@views/pages/Home'))
const NotFound = lazy(()=>import('@views/pages/NotFound/NotFound'))

export default createBrowserRouter([    
    {
        element: <DefaultLayout/>,
        children:[
            {
                path: '/',
                element: <Navigate to="/home"/>
            },
            {
                path: '/home',
                element: <Home/>
            },
        ]
    },
    
    {

        element: <DefaultLayout/>,
        children:[
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    }
        
         
])
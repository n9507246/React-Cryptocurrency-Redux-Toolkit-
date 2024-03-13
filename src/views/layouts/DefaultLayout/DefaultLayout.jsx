import { Outlet } from "react-router-dom";
import { Header, Footer } from "@components";

export default function (){
    return (
        <div className="app">
            <Header/>          
            <div className="main">
                <Outlet />
            </div>    
            <Footer/>
        </div>

    )
}
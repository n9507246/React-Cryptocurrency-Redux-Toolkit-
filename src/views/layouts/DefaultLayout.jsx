import { Outlet } from "react-router-dom";

export default function (){
    return (

            <div>
                <div style={{backgroundColor: 'red'}}><h1>Header</h1></div>
                <div>
                    <h4>Content</h4> 
                    <Outlet />
                </div>    
                <div><h1>Footer</h1></div>
            </div>

    )
}
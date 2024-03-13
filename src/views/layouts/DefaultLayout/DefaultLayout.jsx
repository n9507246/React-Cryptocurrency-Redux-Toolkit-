import { Outlet } from 'react-router-dom';
import { App, Main, Aside } from '@components/UI';

import classes from './style.module.scss'


export default function (){

    return (
        <App>
            <Aside className={classes.aside} flex={1}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat officia numquam, fugit veritatis veniam provident sunt sit nostrum maxime alias necessitatibus deleniti odit aliquid fugiat unde! Distinctio corrupti saepe fuga?
            </Aside>
            
            <Main.Layout flex={6}>

                <Main.Header>
                    <h1>Dasboard</h1>
                </Main.Header>
                
                <Main.Content>      
                    <Outlet/>
                </Main.Content>

                <Main.Footer>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea possimus deleniti obcaecati temporibus fugiat autem iusto rerum corrupti dignissimos dolore quis praesentium quod sunt maiores accusantium repudiandae distinctio, vel eligendi.</p>
                </Main.Footer>

            </Main.Layout>

        </App>
    )
}
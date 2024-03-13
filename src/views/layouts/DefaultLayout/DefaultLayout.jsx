import { Layout } from 'antd';
const { Content, Footer, Sider } = Layout;
import { AsideBar} from "@components";
import classes from './style.module.scss'
import { Outlet } from 'react-router-dom';

export default function (){

    return (
        <Layout hasSider>
            <Sider className={classes.aside} >
                <AsideBar/>
            </Sider>
            <Layout className={classes.main} >
                
                <Content className={classes.content}>
                    <Outlet/>
                </Content>    
 
                <Footer className={classes.footer}>
                    Footer © Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, odit!
                </Footer>

            </Layout>
        </Layout>
    )
}
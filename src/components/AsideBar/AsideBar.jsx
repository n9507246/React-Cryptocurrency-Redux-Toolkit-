import {HomeOutlined} from '@ant-design/icons'
import {Typography, Avatar, Menu} from 'antd'
import {Link} from 'react-router-dom'
import icon from '@assets/cryptocurrency.png'

import classes from './style.module.scss'

export default function AsideBar(){
    return(
        <Menu theme='dark'>
            
            <div className={classes.asiseTitle}>
                <Avatar src={icon} size='large'/>
                <Typography.Title level={3} className={classes.logo}>
                    <Link to='/'>Cryptoverse</Link>
                </Typography.Title>
            </div>

            <Menu.Item icon={<HomeOutlined/>}>
                <Link to='/'>Home</Link>
            </Menu.Item>
            
        </Menu>
    )
} 
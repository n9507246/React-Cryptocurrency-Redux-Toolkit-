import {HomeOutlined} from '@ant-design/icons'
import {Typography, Avatar, Menu} from 'antd'
import {Link} from 'react-router-dom'
import icon from '@assets/cryptocurrency.png'

export default function AsideBar(){
    return(
        <Menu theme='dark' style={{minHeight:'100vh'}} >
            
            <div>
                <Avatar src={icon} size='large'/>
                <Typography.Title level={2} className='logo'>
                    <Link to='/'>Cryptoverse</Link>
                </Typography.Title>
            </div>

            <Menu.Item icon={<HomeOutlined/>}>
                <Link to='/'>Home</Link>
            </Menu.Item>
            
        </Menu>
    )
} 
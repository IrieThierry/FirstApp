import React , {useState} from 'react'
import '../styles/Container.css'
import { Layout, Menu, Breadcrumb ,Switch} from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined, AppstoreOutlined } from '@ant-design/icons';
import { BoxProduitTableView, BoxProduitCardView } from '.';
import '../styles/boostrap.css'
import Menus from './Menus'


const Container = () => {

    const { SubMenu } = Menu;
    const { Header, Content, Sider } = Layout;
    const [hTheme, setHTheme] = useState('gray')

    const changeTheme = value => {
      setHTheme(value ? '#030b0e' : 'gray');
  
      };

    return (
        <Layout className='col-md-12 d-flex flex-wrap pl-0 pr-0'>
          <nav className='col-md-12 pr-0 pl-0 mb-2 '>
              <Menu style={{ fontSize: '30px', backgroundColor: hTheme,color:"white"}}  mode="horizontal" defaultSelectedKeys={['2']}>
                <div className='col-md-2'> <Switch onChange={changeTheme} /> </div>
                <div className='col-md-9'>
                  
                </div>
                <div className='col-md-1'>
                  <div>irie</div>
                </div>

              </Menu>

          </nav>
          <div className='d-flex flex-wrap' style={{width:'100%'}}>
            <div style={{width:'20%'}}>
              <Menus Themes = {hTheme}/>
            </div>

            <div style={{width:'80%'}}>
              <div className='row col-md-12 d-flex justify-content-center align-item-center' style={{height:"50px"}}>
                <div className='col-md-11'>
                  <h3 style={{ color: '#7f7f80' }}>Liste des Produits</h3>
                </div>
                <div className='col-md-1'>
                  <AppstoreOutlined style={{ fontSize: '30px', color: '#7f7f80' }} />

                </div>
              </div>
                    <BoxProduitTableView />

            </div>
          </div>

      </Layout>

    )}

export default Container;


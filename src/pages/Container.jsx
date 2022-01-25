import React from 'react'
import '../styles/Container.css'
import { Layout, Menu, Breadcrumb } from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined, AppstoreOutlined } from '@ant-design/icons';
import { BoxProduitTableView } from '.';
import '../styles/boostrap.css'


const Container = () => {

    const { SubMenu } = Menu;
    const { Header, Content, Sider } = Layout;

    return (
        <Layout className='col-md-12 d-flex flex-wrap pl-0 pr-0'>
          <nav className='col-md-12 pr-0 pl-0 mb-2'>
            <Header className="header">
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Header>

          </nav>

          <div className='col-md-2'>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item> 
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          </div>

          <div className='col-md-10 pr-0 pl-0'>
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
      </Layout>

    )}

export default Container;


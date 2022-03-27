import React from 'react';
import { Menu, Switch} from 'antd';
import {Link} from 'react-router-dom'
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LinkOutlined,
} from '@ant-design/icons';


const Menus = (props) => {
    
    const { SubMenu } = Menu;

    const [mode, setMode] = React.useState('inline');
    const [theme, setTheme] = React.useState('light');


    return (
        <div>
            
            <Menu
            style={{ width: '100%', backgroundColor: props.Themes }}
            mode={mode}
            >
               <Link to='/Accueil'> <Menu.Item icon={<MailOutlined />}>
                    Accueil
                </Menu.Item></Link>
               
                <SubMenu style={{color:"white"}} key="sub1" icon={<AppstoreOutlined />} title="Mon Profile">
                    <Menu.Item key="3">Mes Infos</Menu.Item>
                    <Menu.Item key="4">Modifier Mot de Passe</Menu.Item>
                   
                </SubMenu>
                <SubMenu style={{color:"white"}} key="sub2" icon={<SettingOutlined />} title="Parametre">
                    <SubMenu key="sub1-2" title="Theme">
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    
                </SubMenu>
               
            </Menu>
        </div>
    );
};

export default Menus;
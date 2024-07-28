import React from 'react';
import { Menu, Input, Button } from 'semantic-ui-react';
import './Header.css'; // 添加这一行以引入样式

const Header = () => (
  <Menu className='header-menu'>
    <Menu.Item name="logo" content="DEV@Deakin" className='header-item' />
    <Menu.Item className='header-item'>
      <Input icon="search" placeholder="Search..." />
    </Menu.Item>
    <Menu.Menu position="right" className='header-menu-right'>
      <Menu.Item className='header-item'>
        <Button>Post</Button>
      </Menu.Item>
      <Menu.Item className='header-item'>
        <Button primary>Login</Button>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Header;

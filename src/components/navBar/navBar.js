import React from 'react'
import './navBar.scss'
import { Menu } from 'antd'

export default class NavBar extends React.Component {

    constructor(props) {
        super(props)
    }

    handleClickMenu(e) {
        switch (e.key) {
            case 'edit':
                location.href = '#/edit';
                break;
            case 'index':
                location.href = '#';
                break;
        }
    }

    render() {
        return <div>
            <header className="blog-header z-clear">
                <div className="blog-header__brand">
                    <a id="logo" href="#">个人网站</a>
                </div>
                <Menu mode="horizontal" id="nav" onClick={this.handleClickMenu.bind(this)}>
                    <Menu.Item key="index">首页</Menu.Item>
                    <Menu.Item key="other">其他</Menu.Item>
                </Menu>
                <div className="blog-right">
                    <a className="blog-right__button" href="javascript:;">登录</a>
                    <a className="blog-right__write" href="#/edit">写文章</a>
                </div>
            </header>
        </div>
    }
}
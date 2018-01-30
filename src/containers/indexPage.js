import React from 'react'
import "./styles/index.scss"
import { Menu } from 'antd'
import BlogList from '~/components/blogList'

export default class IndexPage extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <header className="blog-header z-clear">
                <div className="blog-header__brand">
                    <a id="logo" href="#">个人网站</a>
                </div>

                <a id="loginBtn" href="javascript">登录</a>

                <Menu mode="horizontal" id="nav">
                    <Menu.Item key="index">首页</Menu.Item>
                    <Menu.Item key="other">其他</Menu.Item>
                </Menu>
            </header>
            <section className="blog-body">
                <BlogList></BlogList>
            </section>
        </div>
    }
}
import React from 'react'
import './navBar.scss'
import { Menu, Modal, Form, Dropdown, Icon } from 'antd'
import { fetch } from '~/common'
import SignForm from '~/components/signForm'
const FormItem = Form.Item
export default class NavBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            userInfo: {}
        }
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
    showModal() {
        this.setState({
            visible: true,
        });
    }
    handleOk(e) {

        this.refs.signForm.getForm().validateFields((err, values) => {
            if (!err) {
                // /sign  /login
                fetch('/login', values, (res) => {
                    this.setState({
                        visible: false,
                    });
                    location.reload()
                }, 'post')
            }
        });
    }
    handleCancel(e) {
        console.log(e);
        this.setState({
            visible: false,
        });
    }


    componentDidMount() {
        fetch('/getUserInfo', undefined, (data) => {
            this.setState({
                userInfo: data.data
            })
        })
    }

    render() {
        const { userInfo } = this.state;
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">个人中心</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">退出</a>
                </Menu.Item>
            </Menu>
        );
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
                    {
                        userInfo.userName ? <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link blog-right__button" href="#">
                                {userInfo.userName}  <Icon type="down" />
                            </a>
                        </Dropdown> : <a className="blog-right__button" href="javascript:;" onClick={this.showModal.bind(this)}>登录</a>
                    }
                    {/* <a className="blog-right__button" href="javascript:;">注册</a> */}
                    <a className="blog-right__write" href="#/edit">写文章</a>
                </div>
            </header>

            <Modal
                title="登录"
                visible={this.state.visible}
                onOk={this.handleOk.bind(this)}
                onCancel={this.handleCancel.bind(this)}
                okText="确认登录"
                cancelText="取消"
            >
                <SignForm ref="signForm" ></SignForm>
            </Modal>

        </div>
    }
}
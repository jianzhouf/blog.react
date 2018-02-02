import React from 'react'
import E from 'wangeditor'
import "./styles/index.scss"
import "./styles/edit.scss"

import { Input, Form, Button, Modal } from 'antd'
const FormItem = Form.Item
import axios from 'axios'
import NavBar from '~/components/navBar'

export default class editPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            editorContent: ""
        }
    }

    saveArticle() {
        let param = {
            title: this.refs.titleInput.input.value,
            content: this.state.editorContent
        }
        if (this.props.location.query) {
            param.id = this.props.location.query.id
            axios.post('//localhost:3000/update', param).then(res => {
                const message = res.data.message
                Modal.info({
                    title: '提示',
                    content: (
                        <div>{message}</div>
                    ),
                    onOk() {
                        location.href = "#"
                    },
                });
            })
        } else {
            axios.post('//localhost:3000/add', param).then(res => {
                const message = res.data.message

                Modal.info({
                    title: '提示',
                    content: (
                        <div>{message}</div>
                    ),
                    onOk() {
                        location.href = "#"
                    },
                });
            })
        }
    }


    componentDidMount() {
        const elem = this.refs.editorElem
        const editor = new E(elem)
        // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
        editor.customConfig.onchange = html => {
            this.setState({
                editorContent: html
            })
        }
        editor.create()

        if (this.props.location.query) {
            const { id } = this.props.location.query
            axios.get('//localhost:3000/detailById', { params: { id } }).then(res => {
                const data = res.data.data
                this.refs.titleInput.input.value = data.title
                editor.txt.html(data.content)
                this.setState({
                    editorContent: data.content
                })
            })
        }
    }

    render() {
        console.log(this.props)
        return <div>
            <NavBar></NavBar>

            <section className="blog-body" style={{ width: '60%', margin: '0 auto' }}>
                <div style={{ marginBottom: '2rem' }}></div>
                <div>
                    <div>标题</div>
                    <Input ref="titleInput" />
                    <div>内容</div>
                    <div ref="editorElem" style={{ textAlign: 'left' }}></div>
                </div>

                <div className="z-button-group">
                    <Button type="primary" onClick={this.saveArticle.bind(this)}>保存</Button>
                    <Button type="primary">发布</Button>
                    <Button type="primary">取消</Button>
                </div>
            </section>

        </div>
    }
}
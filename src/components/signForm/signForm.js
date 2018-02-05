import React from 'react'

import { Form, Input, Icon, Button } from 'antd'

const FormItem = Form.Item
class BasicForm extends React.Component {
    render() {
        const { getFieldDecorator } = this.props.form
        return (<Form className="login-form">
            <FormItem>
                {getFieldDecorator('userName', {
                    rules: [{ required: true, message: '请输入用户名!' }],
                })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
            </FormItem>
            <FormItem>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入密码!' }],
                })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
            </FormItem>
        </Form>)
    }

}
const SignForm = Form.create()(BasicForm)
export default SignForm 
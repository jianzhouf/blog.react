import React from 'react'
import E from 'wangeditor'
export default class editPage extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            {/* 将生成编辑器 */}
            <div ref="editorElem" style={{ textAlign: 'left' }}>
            </div>

        </div>
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
    }

}
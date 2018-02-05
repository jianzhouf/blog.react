import React from 'react'
import "./blogList.scss"
import demourl from '~/assets/imgs/demo.jpg'
import { Icon } from 'antd'
import { Link } from 'react-router-dom'
import { fetch } from '~/common'

export default class BlogList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            blogList: []
        }
    }

    componentDidMount() {
        fetch('/list', undefined, (data) => {
            this.setState({
                blogList: data.data
            })
        })
        // axios.get('//localhost:3000/list').then((res) => {
        //     this.setState({
        //         blogList: res.data.data
        //     })
        // })
    }

    clearHtmlTagSpace(str) {
        str = str.replace(/(^\s*)|(\s*$)/g, "");
        str = str.replace(/<[^>]+>/g, "");
        if (str.length > 300) {
            str = str.substring(0, 300);
        }
        return str
    }

    render() {
        const { blogList } = this.state
        return <div className="blog-list">
            {
                blogList.map(item => <div key={item._id} className="blog-list__item">
                    <div className="z-media">
                        <div className="z-media__header">
                            <img className="z-media__icon" src={demourl} />
                        </div>
                        <div className="z-media__body">
                            <a className="z-media__title" href={'#/detail/' + item._id}>{item.title}</a>
                            <p dangerouslySetInnerHTML={{ __html: this.clearHtmlTagSpace(item.content) }}></p>
                            <div className="z-media__footer">
                                <Icon type="message" />
                            </div>
                        </div>

                    </div>
                </div>)
            }

        </div>
    }

}
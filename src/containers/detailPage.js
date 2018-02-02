import React from 'react'
import axios from 'axios'
import "./styles/index.scss"
import "./styles/detail.scss"

import NavBar from '~/components/navBar'
import { Link } from 'react-router-dom'

export default class DetailPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params
        axios.get('//localhost:3000/detailById', {
            params: {
                id
            }
        }).then(res => {
            this.setState({
                data: res.data.data
            })
        })
    }

    render() {
        const { data } = this.state
        return <div>
            <NavBar></NavBar>

            <section className="blog-body">
                <div className="article-container w-e-text">
                    <div className="article-title">
                        <div className="article-edit"><Link to={{ pathname: '/edit', query: { id: data._id } }}>编辑</Link></div>
                        {data.title}
                    </div>
                    <div className="article-content" dangerouslySetInnerHTML={{ __html: data.content }}></div>
                </div>
            </section>
        </div>
    }
}
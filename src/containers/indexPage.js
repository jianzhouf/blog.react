import React from 'react'
import "./styles/index.scss"
import BlogList from '~/components/blogList'
import NavBar from '~/components/navBar'
export default class IndexPage extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <NavBar></NavBar>
            <section className="blog-body">
                <BlogList></BlogList>
            </section>
        </div>
    }
}
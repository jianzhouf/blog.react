import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { HashRouter } from 'react-router-dom'
import IndexPage from './containers/indexPage'
import EditPage from './containers/editPage'
import DetailPage from './containers/detailPage';


import "./reset.scss"
import "./common.scss"


ReactDOM.render(
    <HashRouter>
        <div>
            <Route exact path="/" component={IndexPage}></Route>
            <Route path="/edit" component={EditPage}></Route>
            <Route path="/detail/:id" component={DetailPage}></Route>
        </div>
    </HashRouter>,
    document.getElementById('app')
)
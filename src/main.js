import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { HashRouter } from 'react-router-dom'
import IndexPage from './containers/indexPage'
import DetailPage from './containers/detailPage'
import ListPage from './containers/listPage';
import "./reset.scss"
import "./common.scss"


ReactDOM.render(
    <HashRouter>
        <div>
            <Route exact path="/" component={IndexPage}></Route>
            <Route path="/detail" component={DetailPage}></Route>
            <Route path="/list" component={ListPage}></Route>
        </div>
    </HashRouter>,
    document.getElementById('app')
)
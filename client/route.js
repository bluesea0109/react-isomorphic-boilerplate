import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Root from './common/containers/Root'
import Home from './home/containers/App'
import About from './about/containers/App'
import Explore from './explore/containers/App'

const route = (
    <Route path="/" component={Root}>
        <IndexRoute component={Home}/>
        <Route path="explore" component={Explore}/>
        <Route path="about" component={About}/>
    </Route>
)

export default route;

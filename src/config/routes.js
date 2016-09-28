import React from 'react';
import Main from '../components/Main';
import SnakeGame from '../components/SnakeGame';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

export default (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={SnakeGame} />
		</Route>
	</Router>
)

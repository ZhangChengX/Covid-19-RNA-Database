import React from 'react'
import {BrowserRouter as Router, Switch} from 'react-router-dom';

import App from '../App'
import Search from '../Search'

class RouterList extends React.Component {

	render() {
		return (
			<Switch>
				<Route path="/">
					<App />
				</Route>
				<Route path="/search">
					<Search />
				</Route>
			</Switch>
		);
	}
}

export default RouterList;

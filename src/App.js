
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/Home';
import Search from './pages/Search';

// import './App.css';

function Error404PageNotFound() {
	return <h1> Error 404 Page not found. </h1>;
}

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/search">
					<Search />
				</Route>
				<Route path="*">
					<Error404PageNotFound />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;

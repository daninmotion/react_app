var React = require('react')
var ReactDOM = require('react-dom')
var Landing = require('./Landing')
var Search = require('./Search.jsx')
var Layout = require('./Layout.jsx')
var {Router, Route, IndexRoute, hashHistory} = require('react-router')

{/* this is how you write comments. It has to be inside the curly bracets*/}

var App = function () { 
	return (
		<Router history = {hashHistory}>
			<Route path = '/' component = {Layout}>
				<IndexRoute component = {Landing} />
				<Route path = '/search' component = {Search} />
			</Route>
		</Router>
	)
}

ReactDOM.render(<App />, document.getElementById('app'))
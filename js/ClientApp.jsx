var React = require('react')
var ReactDOM = require('react-dom')
var Landing = require('./Landing')
var Search = require('./Search.jsx')
var Layout = require('./Layout.jsx')
var Details = require('./Details.jsx')
var {Router, Route, IndexRoute, hashHistory} = require('react-router')
var {shows} = require('../public/data')

{/* this is how you write comments. It has to be inside the curly bracets*/}

var App = React.createClass({
	assignShow (nextState, replace) {
		const showArray = shows.filter((show) => show.imdbID === nextState.params.id)

		if (showArray.length < 1) {
			return replace('/')
		}

		Object.assign(nextState.params, showArray[0])
		return nextState
	},
	render () { 
		return (
			<Router history = {hashHistory}>
				<Route path = '/' component = {Layout}>
					<IndexRoute component = {Landing} />
					<Route path = '/search' component = {Search} shows = {shows} />
					<Route path = '/details/:id' component = {Details} onEnter={this.assignShow} />
				</Route>
			</Router>
		)
	}
})

ReactDOM.render(<App />, document.getElementById('app'))
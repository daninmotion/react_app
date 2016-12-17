var React = require('react')
var ReactDOM = require('react-dom')

{/* this is how you write comments. It has to be inside the curly bracets*/}

var App = function () { 
	return (
		<div className = 'app-container'>
			<div className = 'home-info'>
				<h1 className = 'title'>svideo</h1>
				<input className = 'search' type = 'text' placeholder = 'Search' />
				<button className = 'browse-all'> or Browse All </button>
			</div>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('app'))
var React = require('react')
var {Link} = require('react-router')
{/* this is how you write comments. It has to be inside the curly bracets*/}

var Landing = function () { 
	return (
		<div className = 'home-info'>
			<h1 className = 'title'>svideo</h1>
			<input className = 'search' type = 'text' placeholder = 'Search' />
			<Link to ='/search' className = 'browse-all'> or Browse All </Link>
		</div>
	)
}

module.exports = Landing
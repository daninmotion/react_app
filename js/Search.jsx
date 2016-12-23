var React = require ('react')
var ShowCard = require('./ShowCard.jsx')
var data = require ('../public/data.json')

var Search = function () {
	return (
		<div className = 'container'>
			<div className = 'shows'>
				{data.shows.map(function (show) {
					return (
						<ShowCard {...show} key={show.imdbID} />
					)
				})}
			</div>
		</div>
	)
}

module.exports = Search 
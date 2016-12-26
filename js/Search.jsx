var React = require ('react')
var ShowCard = require('./ShowCard.jsx')
var data = require ('../public/data.json')

var Search = React.createClass({
	getInitialState () {
		return {
			searchTerm: ''
		}
	},
	handleSearchTermEvent (event) {
		this.setState({searchTerm: event.target.value})
	},
	render () {
		return (
			<div className = 'container'>
				<header className = 'header'>
					<h1 className = 'brand'>svideo</h1>
					<input value = {this.state.searchTerm} className = 'search-input' type = 'text' placeholder = 'Search' onChange = {this.handleSearchTermEvent} />
				</header>
				<div className = 'shows'>
					{data.shows
            .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((show) => (
              <ShowCard {...show} key={show.imdbID} />
          ))}
				</div>
			</div>
		)
	}
})

module.exports = Search 
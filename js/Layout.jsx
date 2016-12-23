var React = require('react')

var Layout = function (props) {
	return (
		<div className = 'app-container'>
			{props.children}
		</div>
	)
}

var element = React.PropTypes

Layout.propTypes = {
	children: element.isRequired
}

module.exports = Layout


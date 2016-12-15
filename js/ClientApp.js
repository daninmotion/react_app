var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle.js')
var div = React.DOM.div


var MyTitleFact = React.createFactory(MyTitle)

var MyFirstComponent = (
	div(null,
		MyTitleFact({title: 'Props are great!', color: 'rebeccapurple'}),
		React.createElement(MyTitle, {title: 'Use props everywhere!', color: 'mediumaquamarine'})
	)
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
var React = require("react");
var MDL = require('mdl-react');

var HelloMessage = React.createClass({
	render: function() {
		return (
			<div>Hello world</div>
		);
	}
});

React.render(<HelloMessage />, document.body);
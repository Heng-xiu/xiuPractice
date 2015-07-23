var React = require("react");

var HelloMessage = React.createClass({
	render: function() {
		return (
			<div>Hello world</div>
			<div>Xiu-xiu</div>
		);
	}
});

React.render(<HelloMessage />, document.body);
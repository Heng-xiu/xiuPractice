var React = require("react");
var MDL = require('mdl-react');

var HelloMessage = React.createClass({

	render: function() {

		var links = [
		    <a href='#'>Link 1</a>,
		    <a href='#'>Link 2</a>,
		    <a href='#'>Link 3</a>,
		];

		return (
			<div>
				<MDL.Layout
					title='Fixed header and drawer'
					href='#'
					isFixedHeader={true}
					headerLinks={links}
					drawerLinks={links}
				>
					put your content here
				</MDL.Layout>
			</div>
		);
	}
});

React.render(<HelloMessage />, document.body);
var React = require("react");
var MDL = require('mdl-react');

var HelloMessage = React.createClass({

	render: function() {

		// Layout head link
		var headLinks = [
			<a href='#'>HLink 1</a>,
			<a href='#'>HLink 2</a>,
			<a href='#'>HLink 3</a>,
		];

		var tabLinks = [
			<a href='#'>TLink 1</a>,
			<a href='#'>TLink 2</a>,
			<a href='#'>TLink 3</a>,
			<a href='#'>TLink 4</a>,
		];

		// Footer 
		var leftSection = {
			links : [
				<a href='#help'>Help</a>,
				<a href='#help'>Help</a>,
			],
			logo : (
				<span>
					Mini footer
				</span>
			),
		};

		var rightSection = {
			links : [
				<a href='#cloud'>
					<i className='material-icons'>cloud</i>
				</a>,
			],
		};

		var pageStyle = {

		};

		// Card style
		var titleStyle = {
			color: '#00BCD4',
			background: 'url("http://i.imgur.com/EJFxjMX.jpg") center / cover',
		};

		var iconStyle = {
			color: '#00AACC',
		};

		var menuStyle = {
			color: '#00BCD4',
		};

		var sectionStyle = {
			position: 'relative',
			marginBottom: '48px',
			maxWidth: '860px',
			margin: '0px auto',
			padding: 'auto',
		};

		// Grid style
		var gridStyle = {
			backgroundColor: '#00AACC',
		};

		var gridTenStyle = {
			backgroundColor: 'purple',
		};

		var gridEnightStyle = {
			backgroundColor: 'blue',
		};

		var gridSixStyle = {
			backgroundColor: '#aa00cc',
		};

		var gridFourStyle = {
			backgroundColor: 'Green',
		};

		var gridTwoStyle = {
			backgroundColor: 'yellow',
		};

		// hr style 
		var hrStyle = {
			display: 'block',
			marginTop: '0.5em',
			marginBottom: '0.5em',
			marginLeft: 'auto',
			marginRight: 'auto',
			borderStyle: 'inset',
			borderWidth: '1px',
		};

		return (
			<div>
				<MDL.Layout
					title='Fixed tabs'
					href='#'
					tabs={tabLinks}
					headerLinks={headLinks}
					initialTabIndex={1}
					isFixedTabs={true}
				>
					<div style = {pageStyle}>
						//  First card
						<section style={sectionStyle}>
							<MDL.Card width='512' shadow={6} style={sectionStyle}>
								<MDL.CardTitle height='176' style={titleStyle}>
									CardTitle
								</MDL.CardTitle>
								<MDL.CardSupportingText>
									CardSupportingText
								</MDL.CardSupportingText>
								<MDL.CardAction border={true}>
									<MDL.Button type="FlatButton"
										isRipple={true}
										isPrimary={true}
									>
										Get Start
									</MDL.Button>
									<br />
								</MDL.CardAction>
								<MDL.CardMenu style={menuStyle}>
									<MDL.Button type="IconButton"
										isRipple={true}
										isMini={true}
										isPrimary={true}
									>
										<i style={iconStyle} className="material-icons">share</i>
										<a href="#"></a>
									</MDL.Button>
									<br />
								</MDL.CardMenu>
							</MDL.Card>
						</section>
						//  secend card
						<section style={sectionStyle}>
							<MDL.Card width='512' shadow={6} style={sectionStyle}>
								<MDL.CardSupportingText>
									<h4>Technology</h4>
									<p>Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua.</p>
								</MDL.CardSupportingText>
								<MDL.CardAction border={true}>
									<MDL.Button type="FlatButton"
										isRipple={true}
										isPrimary={true}
									>
										READ OUR FEATURES
									</MDL.Button>
									<br />
								</MDL.CardAction>
								<MDL.CardMenu style={menuStyle}>
									<MDL.Button type="IconButton"
										isRipple={true}
										isMini={true}
										isPrimary={true}
									>
										<i style={iconStyle} className="material-icons">more_vert</i>
									</MDL.Button>
									<br />
								</MDL.CardMenu>
							</MDL.Card>
						</section>

						//  Third card
						<section style={sectionStyle}>
							<MDL.Card width='512' shadow={6} style={sectionStyle}>
								<MDL.CardSupportingText>
									<h4>Detail</h4>
									<MDL.Grid style={gridStyle}>
										<MDL.GridCell col={2} style={gridTwoStyle}>Picture</MDL.GridCell>
										<MDL.GridCell col={10} style={gridTenStyle}>content</MDL.GridCell>
									</MDL.Grid>
									<MDL.Grid style={gridStyle}>
										<MDL.GridCell col={2} style={gridTwoStyle}>Picture</MDL.GridCell>
										<MDL.GridCell col={10} style={gridTenStyle}>content</MDL.GridCell>
									</MDL.Grid>
									<MDL.Grid style={gridStyle}>
										<MDL.GridCell col={2} style={gridTwoStyle}>Picture</MDL.GridCell>
										<MDL.GridCell col={10} style={gridTenStyle}>content</MDL.GridCell>
									</MDL.Grid>
								</MDL.CardSupportingText>
								<MDL.CardAction border={true}>
									<MDL.Button type="FlatButton"
										isRipple={true}
										isPrimary={true}
									>
										READ OUR FEATURES
									</MDL.Button>
									<br />
								</MDL.CardAction>
								<MDL.CardMenu style={menuStyle}>
									<MDL.Button type="IconButton"
										isRipple={true}
										isMini={true}
										isPrimary={true}
									>
										<i style={iconStyle} className="material-icons">more_vert</i>
									</MDL.Button>
									<br />
								</MDL.CardMenu>
							</MDL.Card>
						</section>

						//  Fourth card
						<section style={sectionStyle}>
							<MDL.Card width='512' shadow={6} style={sectionStyle}>
								<MDL.CardSupportingText>
									<h4>Crew Name</h4>
									<MDL.Grid style={gridStyle}>
										<MDL.GridCell col={2} style={gridTwoStyle}>Picture</MDL.GridCell>
										<MDL.GridCell col={10} style={gridTenStyle}>content</MDL.GridCell>
									</MDL.Grid>
								</MDL.CardSupportingText>
								<MDL.CardAction border={true}>
									
									<MDL.Grid style={gridStyle}>
										<MDL.GridCell col={4} style={gridFourStyle}>
											<MDL.Button type="FlatButton"
												isRipple={true}
												isPrimary={true}
											>
												Social icon
											</MDL.Button>
										</MDL.GridCell>
										<MDL.GridCell col={4} style={gridFourStyle}>
											<MDL.Button type="FlatButton"
												isRipple={true}
												isPrimary={true}
											>
												Social icon
											</MDL.Button>
										</MDL.GridCell>
										<MDL.GridCell col={4} style={gridFourStyle}>
											<MDL.Button type="FlatButton"
												isRipple={true}
												isPrimary={true}
											>
												Social icon
											</MDL.Button>
										</MDL.GridCell>
									</MDL.Grid>
								</MDL.CardAction>
								<MDL.CardMenu style={menuStyle}>
									<MDL.Button type="IconButton"
										isRipple={true}
										isMini={true}
										isPrimary={true}
									>
										<i style={iconStyle} className="material-icons">more_vert</i>
									</MDL.Button>
									<br />
								</MDL.CardMenu>
							</MDL.Card>
						</section>

						//  Fivth card
						<section style={sectionStyle}>
							<MDL.Card width='512' shadow={6} style={sectionStyle}>
								<MDL.CardTitle height='176' style={titleStyle}>
									Crew Name
								</MDL.CardTitle>
								<MDL.CardSupportingText>
									職稱 內容
								</MDL.CardSupportingText>
								<MDL.CardAction border={true}>
									<MDL.Button type="FlatButton"
										isRipple={true}
										isPrimary={true}
									>
										Social icon
									</MDL.Button>
									<br />
								</MDL.CardAction>
							</MDL.Card>
						</section>

						// Sixth Card
						<section style={sectionStyle}>
							<MDL.Grid style={gridStyle}>
								<MDL.GridCell col={4} style={gridFourStyle}>
								Picture
								</MDL.GridCell>

								<MDL.GridCell col={8} style={gridEnightStyle}>
									<MDL.Card width='100%' shadow={6} style={sectionStyle}>
										<MDL.CardSupportingText>
											<h5>Crew Name</h5>
											<p>content</p>
										</MDL.CardSupportingText>
										<MDL.CardAction border={true}>
											<MDL.Button type="FlatButton"
												isRipple={true}
												isPrimary={true}
											>
												Social icon
											</MDL.Button>
											<br />
										</MDL.CardAction>
									</MDL.Card>
								</MDL.GridCell>
							</MDL.Grid>
						</section>
					</div>
					// Introduce key part 1.From MDL 2.Combine react 3.it free
					<MDL.Grid style={gridStyle}>
						<MDL.GridCell col={4} style={gridFourStyle}>
							<h5>title</h5>
							<p>context</p>
						</MDL.GridCell>
						<MDL.GridCell col={4} style={gridFourStyle}>
							<h5>title</h5>
							<p>context</p>
						</MDL.GridCell>
						<MDL.GridCell col={4} style={gridFourStyle}>
							<h5>title</h5>
							<p>context</p>
						</MDL.GridCell>
					</MDL.Grid>
					// Introduce feature 
					<MDL.Grid style={gridStyle}>
						<MDL.GridCell col={4} style={gridFourStyle}>Picture</MDL.GridCell>
						<MDL.GridCell col={8} style={gridEnightStyle}>content</MDL.GridCell>
					</MDL.Grid>
					<MDL.Grid style={gridStyle}>
						<MDL.GridCell col={8} style={gridEnightStyle}>content</MDL.GridCell>
						<MDL.GridCell col={4} style={gridFourStyle}>Picture</MDL.GridCell>
					</MDL.Grid>
					<MDL.Grid style={gridStyle}>
						<MDL.GridCell col={4} style={gridFourStyle}>Picture</MDL.GridCell>
						<MDL.GridCell col={8} style={gridEnightStyle}>content</MDL.GridCell>
					</MDL.Grid>
					<MDL.MiniFooter
						leftSection={leftSection}
						rightSection={rightSection}
					/>
				</MDL.Layout>
			</div>
		);
	}
});

React.render(<HelloMessage />, document.body);
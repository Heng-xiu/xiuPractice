var React = require("react");
var MDL = require('mdl-react');

var HelloMessage = React.createClass({

	_getName: function() {

	},

	_getEmail: function() {

	},

	_getMessage: function() {

	},

	render: function() {

		// Layout head link
		var headLinks = [
			<a href='#section1' >HOME</a>,
			<a href='#section2' >FEATURE</a>,
			<a href='#section3' >TEAM</a>,
			<a href='#section4' >CONTACT US</a>,
		];

		// Footer 
		var leftSection = {
			links : [
				<a href='http://fandorashop.com/tw/page/about'>
					About
				</a>,
			],
			logo : (
				<span>
					Fandora Shop
				</span>
			),
		};

		var rightSection = {
			links : [
				<a href='https://www.facebook.com/fandorashop'>
					<i className="fa fa-facebook-official fa-3x"></i>
				</a>,
				<a href='https://github.com/Fandora'>
					<i className='fa fa-github-square fa-3x'></i>
				</a>,
				<a href='https://instagram.com/fandorashop/'>
					<i className='fa fa-instagram fa-3x'></i>
				</a>,
			],
		};

		// Card style
		var titleStyle = {
			color: '#00BCD4',
			// background: 'url("https://avatars2.githubusercontent.com/u/5138488") center / cover',
			// backgroundImage:'url("https://avatars2.githubusercontent.com/u/5138488")',
			// backgroundRepeat: 'no-repeat',
			// backgroundSize: '100%',
			// backgroundPosition: 'initial',
		};

		var sectionStyle = {
			position: 'relative',
			marginBottom: '48px',
			maxWidth: '860px',
			margin: '20px auto 20px',
		};

		var crewOneStyle = {
			backgroundImage:'url("https://avatars0.githubusercontent.com/u/2688505?v=3&s=400")',
			backgroundRepeat: 'no-repeat',
			backgroundSize: '100%',
			backgroundPosition: 'initial',
			color: '#ffffff',
		};

		var crewTwoStyle = {
			backgroundImage:'url("https://avatars0.githubusercontent.com/u/4189291")',
			backgroundRepeat: 'no-repeat',
			backgroundSize: '100%',
			backgroundPosition: 'initial',
			color: '#ffffff',
		};

		var crewThreeStyle = {
			backgroundImage:'url("https://avatars2.githubusercontent.com/u/4170738")',
			backgroundRepeat: 'no-repeat',
			backgroundSize: '100%',
			backgroundPosition: 'initial',
			color: '#ffffff',
		};

		var crewFourStyle = {
			backgroundImage:'url("https://avatars3.githubusercontent.com/u/13128288")',
			backgroundRepeat: 'no-repeat',
			backgroundSize: '100%',
			backgroundPosition: 'initial',
			color: '#ffffff',
		};

		var crewFiveStyle = {
			backgroundImage:'url("https://avatars2.githubusercontent.com/u/5138488")',
			backgroundRepeat: 'no-repeat',
			backgroundSize: '100%',
			backgroundPosition: 'initial',
			color: '#ffffff',
		};

		// Button style
		var feedBack = {
			height: '50px',
			width: '50px',
			position: 'fixed',
			bottom: '50%',
			right: '0%',
		};
		// section1
		// firstSideStyle
		var headerStyle = {
			backgroundColor: '#46C7C7',
			backgroundImage:'url("http://wallpaper-download.net/wallpapers/random-wallpapers-road-background-wallpaper-wallpaper-31203.jpg")',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'auto',
			backgroundPosition: 'center',
			WebkitFilter: 'grayscale(100%)',
			filter: 'gray',
		};

		var section1H3Style = {
			opacity: '54',
			textAlign: 'center',
			fontFamily: 'Roboto',
			fontSize: '56px',
			fontWeight: '400',
			lineHeight: '64px',
			margin: '20% 0 20%',
			color: 'white',
		};

		var section1PStyle = {
			fontSize: '16px',
			margin: '0 16px',
			paddingTop: '8px',
			textAlign: 'center',
			fontFamily: 'Roboto',
		};

		// section2
		// featureInfoStyle
		var featureInfoStyle = {
			backgroundColor: '#FFEBCD',
		};

		var section2TitleStyle = {
			opacity: '54',
			textAlign: 'center',
			fontFamily: 'Roboto',
			fontSize: '34px',
			fontWeight: '400',
			lineHeight: '40px',
			margin: '0% auto 10% auto',
		};

		var section2PStyle = {
			textAlign: 'center',
			fontSize: '20px',
		};

		var featureCycle = {
			borderRadius: '999px',
			margin: '0 auto',
			height: '80px',
			width: '80px',
			backgroundColor: '#E24C38',
			textAlign: 'center',
			lineHeight: '90px',
		};

		var featureH5 = {
			textAlign: 'center',
		};

		var featureP = {
			textAlign: 'center',
		};

		// section3
		// crewInfoStyle
		var crewInfoStyle = {
			backgroundColor: '#F5F5F5',
		};

		var section3H3Style = {
			opacity: '54',
			textAlign: 'center',
			fontFamily: 'Roboto',
			fontSize: '34px',
			fontWeight: '400',
			lineHeight: '40px',
			// margin: '20% 0 20%',
		};
		// section4
		var section4Style = {
			position: 'center',
			textAlign: 'center',
			backgroundColor: '#B0BEC5',
		};

		var section4H3Style = {
			margin: '5% 0% 0% 0%',
			color: '#ffffff'
		}

		var section4PStyle = {
			fontSize: '36px',
			margin: '0% 0% 10% 0%',
			textAlign: 'center',
			fontFamily: 'Roboto',
		};

		var section4Btn = {
			margin: '0 0 0 45%',
		}

		// mapStyle
		var mapStyle = {
			width: '100%',
			height: '80%',
			backgroundColor: '#C2C2C2',
			position: 'center',
		};

		return (
			<div >

				<MDL.Layout
					title='Fixed tabs'
					href='#'
					headerLinks={headLinks}
					drawerLinks={headLinks}
				>

					<div id="fullpage'">

						<div className="section active" id="section1" style={headerStyle} >
							<h3 style={section1H3Style}>Start your MDL-react website</h3>
							<br />
							<p style={section1PStyle}>
								<a href="https://github.com/Fandora">
									Follow us on Github
								</a>
							</p>
						</div>

						<div className="section" id="section2" style={featureInfoStyle} >
							<p style={section2TitleStyle}>Open source, Developer API and Material Desgin</p>
							<p style={section2PStyle}>MDL-react is the best choice for developer who want to use React.js and MDL</p>
							<section style={sectionStyle}>
								<MDL.Grid>
									<MDL.GridCell col={4} >
										<div style={featureCycle}>
											<i className="material-icons">accessibility</i>
										</div>
										<h5 style={featureH5}>Open source</h5>
										<p style={featureP}>mdl-react is open source. If you would want to improve our exciting project, find us on GitHub, Discuss and Slack.</p>
									</MDL.GridCell>
									<MDL.GridCell col={4}>
										<div style={featureCycle}>
											<i className="material-icons">computer</i>
										</div>
										<h5 style={featureH5}>Developer API</h5>
										<p style={featureP}>We also provide API for Developer to create their own website, as BLOG. Portfolio. DASHBOARD</p>
									</MDL.GridCell>
									<MDL.GridCell col={4} >
										<div style={featureCycle}>
											<i className="material-icons">layers</i>
										</div>
										<h5 style={featureH5}>Material Desgin</h5>
										<p style={featureP}>This is material design. We combine two project from the hottest company, React.js and Material Design lite</p>
									</MDL.GridCell>
								</MDL.Grid>
							</section>
						</div>

						<div className="section" id="section3" style = {crewInfoStyle} >
							<h3 style={section3H3Style}>Team</h3>
							<section style={sectionStyle}>
								<MDL.Card width='512' shadow={6} style={sectionStyle}>
									<MDL.CardTitle height='350' style={crewOneStyle}>
										xpsteven
									</MDL.CardTitle>
									<MDL.CardSupportingText>
										<h4>職稱</h4>
										<p>內容</p>
									</MDL.CardSupportingText>
									<MDL.CardAction border={true}>
										<a href="https://github.com/xpsteven">
											<MDL.Button type="FlatButton"
												isRipple={true}
												isPrimary={true}
												isMini={true}
												isAccent={false}
												isDisabled={false}
											>
												GITHUB
											</MDL.Button>
										</a>
									</MDL.CardAction>
								</MDL.Card>
							</section>
							<section style={sectionStyle}>
								<MDL.Card width='512' shadow={6} style={sectionStyle}>
									<MDL.CardTitle height='350' style={crewTwoStyle}>
										terence223
									</MDL.CardTitle>
									<MDL.CardSupportingText>
										<h4>職稱</h4>
										<p>內容</p>
									</MDL.CardSupportingText>
									<MDL.CardAction border={true}>
										<a href="https://github.com/terence223">
											<MDL.Button type="FlatButton"
												isRipple={true}
												isPrimary={true}
												isMini={true}
												isAccent={false}
												isDisabled={false}
											>
												GITHUB
											</MDL.Button>
										</a>
									</MDL.CardAction>
								</MDL.Card>
							</section>
							<section style={sectionStyle}>
								<MDL.Card width='512' shadow={6} style={sectionStyle}>
									<MDL.CardTitle height='350' style={crewThreeStyle}>
										seal789ie
									</MDL.CardTitle>
									<MDL.CardSupportingText>
										<h4>職稱</h4>
										<p>內容</p>
									</MDL.CardSupportingText>
									<MDL.CardAction border={true}>
										<a href="https://github.com/seal789ie">
											<MDL.Button type="FlatButton"
												isRipple={true}
												isPrimary={true}
												isMini={true}
												isAccent={false}
												isDisabled={false}
											>
												GITHUB
											</MDL.Button>
										</a>
									</MDL.CardAction>
								</MDL.Card>
							</section>
							<section style={sectionStyle}>
								<MDL.Card width='512' shadow={6} style={sectionStyle}>
									<MDL.CardTitle height='350' style={crewFourStyle}>
										EmilyWen
									</MDL.CardTitle>
									<MDL.CardSupportingText>
										<h4>職稱</h4>
										<p>內容</p>
									</MDL.CardSupportingText>
									<MDL.CardAction border={true}>
										<a href="https://github.com/EmilyWen">
											<MDL.Button type="FlatButton"
												isRipple={true}
												isPrimary={true}
												isMini={true}
												isAccent={false}
												isDisabled={false}
											>
												GITHUB
											</MDL.Button>
										</a>
									</MDL.CardAction>
								</MDL.Card>
							</section>
							<section style={sectionStyle}>
								<MDL.Card width='512' shadow={6} style={sectionStyle}>
									<MDL.CardTitle height='350' style={crewFiveStyle}>
										Heng-xiu
									</MDL.CardTitle>
									<MDL.CardSupportingText>
										<h4>職稱</h4>
										<p>內容</p>
									</MDL.CardSupportingText>
									<MDL.CardAction border={true}>
										<a href="https://github.com/Heng-xiu">
											<MDL.Button type="FlatButton"
												isRipple={true}
												isPrimary={true}
												isMini={true}
												isAccent={false}
												isDisabled={false}
											>
												GITHUB
											</MDL.Button>
										</a>
									</MDL.CardAction>
								</MDL.Card>
							</section>
						</div>
					</div>

					<div className="section" id="section4" style={section4Style}>
						<section style={sectionStyle}>
						<h3 style={section4H3Style}>CONTACT US</h3>
						<MDL.TextField
							labelText='Name'
							isFloatingLabel={true}
							onChange={this.onChange}
						/><br />
						<MDL.TextField
							labelText='Email'
							isFloatingLabel={true}
						/><br />
						<MDL.TextField
							labelText='Message'
							isFloatingLabel={true}
						/><br />
						<MDL.Button type="RaisedButton" isPrimary={true} style={section4Btn}>
							SUBMIT
						</MDL.Button>
						</section >
					</div>

					<div className="section" id="section5" >
						<div id="map-canvas" style={mapStyle}></div>
					</div>

					<MDL.MiniFooter
						leftSection={leftSection}
						rightSection={rightSection}
					/>

					<a href="#section1">
						<MDL.Button type="FloatingActionButton" isPrimary={true} style={feedBack}>
							<button>
								<i className="material-icons">keyboard_arrow_up</i>
							</button>
						</MDL.Button>
					</a>

				</MDL.Layout>

			</div>
		);
	}
});

React.render(<HelloMessage />, document.body);
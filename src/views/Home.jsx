// Vendor
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

// Local
import CTAForm from '../components/Home/CTAForm'
import StandardButtom from '../components/Global/StandardButton'

class Home extends Component {
	state = {
		showCTA: true,
		userEmail: '',
	}

	handleFormSubmit = event => {
		event.preventDefault()

		// Post email to ctaemails collection
		// axios.post('/cta', { email: this.state.userEmail }).then(this.setState({ showCTA: false })).catch(error => {
		//   console.log(error.response)
		// })
	}

	handleInputChange = event => {
		const { name, value } = event.target
		this.setState({
			[name]: value,
		})
	}

	render() {
		const { classes } = this.props
		const { showCTA, userEmail } = this.state

		return (
			<Splash className={classes.root}>
				<Grid container spacing={16} justify="center" alignItems="center">
					<LogoWrapper>
						<Logo src="assets/img/backgrounds/logoBlue.png" alt="logo" />
					</LogoWrapper>
					<Grid item xs={12} className={classes.formWrapper}>
						{showCTA ?
							<CTAForm
								userEmail={userEmail}
								handleInputChange={this.handleInputChange}
								handleFormSubmit={this.handleFormSubmit}
							/>
							:
							<div id="CTAconfirmation">
								<h3>Thank you! We will be in touch!</h3>
							</div>}
					</Grid>
					<Grid item>
						<Link to="/learn">
							<StandardButtom value="Learn More" />
						</Link>
					</Grid>
					<Grid item>
						<Link to="/comingsoon">
							<StandardButtom value="Find a Doula" />
						</Link>
					</Grid>
				</Grid>
			</Splash>
		)
	}
}

const styles = () => ({
	formWrapper: {
		marginTop: '40px',
	},
	root: {
		flexGrow: 1,
	},
})

const Logo = styled.img`
	margin-top: 10%;
	padding: 0 20px;
	width: 90%;
`
const LogoWrapper = styled.div`
	display: block;
`
const Splash = styled.div`
	background-color: var(--main-bg-color);
	background-size: cover;
	color: #2c3d50;
	height: 100%;
	position: fixed;
	top: 0;
	width: 100%;
`

Home.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home)

// Vendor
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'

// Local
import NavBar from '../components/Global/NavBar'
import StandardButton from '../components/Global/StandardButton'

const Delivering = ({ classes }) => (
	<div className={classes.root}>
		<NavBar currentPage="/comingsoon" />
		<Grid container spacing={16} direction="column" alignItems="center">
			<Grid item>
				<Headline>Still cooking in the oven.</Headline>
			</Grid>
			<Grid item>
				<Link to="/">
					<StandardButton value="Home" />
				</Link>
			</Grid>
			<Grid item>
				<Image src="./assets/img/backgrounds/delivering.png" alt="stork" />
			</Grid>
		</Grid>
	</div>
)

const styles = () => ({
	root: {
		flexGrow: 1,
	},
})

const Headline = styled.h1`
	font-family: 'Lilita One', sans-serif;
`
const Image = styled.img`
	@media screen and (max-width: 640px) {
		width: 80%;
	}
	height: auto;
	// max-width: 100%;
	padding: 20px;
`

Delivering.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Delivering)


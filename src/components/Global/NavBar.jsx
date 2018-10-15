// Vendor
import React from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu'

const styles = {
	bigScreenNav: {
		'@media screen and (max-width: 601px)': {
			display: 'none',
		},
		display: 'block',
	},
	desktopMenuButtonActive: {
		border: '2px solid black',
	},
	desktopMenuButtonInactive: {
		border: '0px',
	},
	flex: {
		flex: 1,
	},
	menuButton: {
		border: '2px solid black',
		marginLeft: -12,
		marginRight: 20,
	},
	menuItem: {
		textDecoration: 'none',
	},
	navBar: {
		background: 'linear-gradient(to bottom, #f2ece3, #fff 95%)',
		borderBottom: '0px',
		boxShadow: '0 0 0',
	},
	root: {
		flexGrow: 1,
	},
	smallScreenNav: {
		'@media screen and (max-width: 600px)': {
			display: 'block',
		},
		display: 'none',
		textDecoration: 'none',
	},
}

// max - width less than or equal to

class ButtonAppBar extends React.Component {
	state = {
		anchorEl: null,
	}

	handleClick = event => {
		this.setState({ anchorEl: event.currentTarget })
	}

	handleClose = () => {
		this.setState({ anchorEl: null })
	}

	render() {
		const { anchorEl } = this.state
		const { classes, currentPage } = this.props

		return (
			<div className={classes.root}>
				<AppBar position="static" className={classes.navBar}>
					<Toolbar>
						<Typography variant="title" className={classes.flex}>
							<Link to="/home">
								<img href="/" src="./assets/img/logoNoTagline.png" alt="logo" height="50" width="100" />
							</Link>
						</Typography>
						<div className={classes.bigScreenNav}>
							<Button href="/learn"
								className={currentPage === '/learn' ? classes.desktopMenuButtonActive : classes.desktopMenuButtonInactive}>
								What is a Doula
							</Button>
							<Button href="/search"
								className={currentPage === '/search' ? classes.desktopMenuButtonActive : classes.desktopMenuButtonInactive}>
								Search
							</Button>
							<Button href="/comingsoon"
								className={currentPage === '/comingsoon' ? classes.desktopMenuButtonActive : classes.desktopMenuButtonInactive}>
								Register
							</Button>
						</div>
						<div className={classes.smallScreenNav}>
							<IconButton
								style={styles.menuButton}
								aria-owns={anchorEl ? 'simple-menu' : null}
								aria-haspopup="true"
								onClick={this.handleClick}
							>
								<MenuIcon />
							</IconButton>
							<Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
								<MenuItem onClick={this.handleClose}>
									<a href="/learn" className={classes.menuItem}> What is a Doula</a>
								</MenuItem>
								<MenuItem onClick={this.handleClose}>
									<a href="/search" className={classes.menuItem}>Search </a>
								</MenuItem>
								<MenuItem onClick={this.handleClose}>
									<a href="/comingsoon" className={classes.menuItem}>Register </a>
								</MenuItem>
							</Menu>
						</div>
					</Toolbar>
				</AppBar>
			</div>
		)
	}
}

ButtonAppBar.propTypes = {
	classes: PropTypes.object.isRequired,
	currentPage: PropTypes.string.isRequired,
}

export default withStyles(styles)(ButtonAppBar)


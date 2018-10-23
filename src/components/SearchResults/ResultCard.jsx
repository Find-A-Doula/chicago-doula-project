// Vendor
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

// Local
import Popover from '../Global/PopOver'
import DoulaFullProfile from './DoulaFullProfile'
import DoulaMessage from './DoulaMessage'


const MAX_LENGTH = 250

class ResultCard extends React.Component {
	state = {
		messageOpen: false,
		profileOpen: false,
	}

	handleMessageOpen = () => {
		this.setState({ messageOpen: true })
	}

	handleMessageClose = () => {
		this.setState({ messageOpen: false })
	}

	handleProfileOpen = () => {
		this.setState({ profileOpen: true })
	}

	handleProfileClose = () => {
		this.setState({ profileOpen: false })
	}

	render() {
		const { classes, doula, ...rest } = this.props
		const { messageOpen, profileOpen } = this.state
		const trimmedBio = doula.bio.substr(0, MAX_LENGTH)
		const bio = trimmedBio.substr(0, Math.min(trimmedBio.length, trimmedBio.lastIndexOf(' ')))
		// Return the component
		return (
			<div className={classes.root}>
				<div className={classes.wrapper}>
					<Paper className={classes.paper}>
						<Grid container wrap="nowrap" spacing={16}>
							<Grid container item xs={4} alignItems="center" direction="column">
								<Grid item className={classes.imageWrapper}>
									<img className={classes.image} src={doula.image} alt={doula.name} />
								</Grid>
								<Grid item>
									<Button variant="contained" className={classes.button} onClick={this.handleMessageOpen}>
										Connect
									</Button>
								</Grid>
							</Grid>
							<Grid container item xs={8} direction="column">
								<Grid item>
									<Typography className={classes.name}>{doula.name}</Typography>
								</Grid>
								<Grid item>
									<Typography>
										<FontAwesomeIcon className={classes.star} icon={faStar} />
										<FontAwesomeIcon className={classes.star} icon={faStar} />
										<FontAwesomeIcon className={classes.star} icon={faStar} />
										<FontAwesomeIcon className={classes.star} icon={faStar} />
										<FontAwesomeIcon className={classes.star} icon={faStar} />
									</Typography>
								</Grid>
								<Grid item>
									<hr className={classes.rule} />
									<Typography className={classes.priceRange}>Price Range: ${doula.priceRangeMin} - ${doula.priceRangeMax}</Typography>
									<Typography className={classes.location}>{doula.location}</Typography>
									<hr className={classes.rule} />
								</Grid>
								<Grid item>
									{doula.bio.length > MAX_LENGTH
										? <Typography className={classes.bio}>
											{`${bio}...`}<span className={classes.more} onClick={this.handleProfileOpen} role="button" tabIndex={0}>More</span>
										</Typography>
										: <Typography className={classes.bio}>{bio}</Typography>
									}
								</Grid>
								<Popover
									selectedValue={doula.id}
									open={profileOpen}
									onClose={this.handleProfileClose}
									child={ DoulaFullProfile }
									doula={doula}
									{...rest}
								/>
								<Popover
									selectedValue={doula.id}
									open={messageOpen}
									onClose={this.handleMessageClose}
									child={ DoulaMessage }
									doula={doula}
									{...rest}
								/>
								<Grid item>
									<Typography className={classes.lastSignIn}>Skills:</Typography>
									<div className={classes.bulletSection}>
										{doula.bdExperience.map(experience => (
											<Typography key={experience} className={classes.bullet}>• {experience}</Typography>
										))}
										{doula.ppExperience.map(experience => (
											<Typography key={experience} className={classes.bullet}>• {experience}</Typography>
										))}
									</div>
								</Grid>
							</Grid>
						</Grid>
					</Paper>
				</div>
			</div>
		)
	}
}

const styles = theme => ({
	bulletSection: {
		columnCount: 2,
		margin: '2px 2px',
	},
	button: {
		backgroundColor: '#ffa692',
		marginTop: 20,
		textTransform: 'none',
		width: '180px',
	},
	image: {
		borderRadius: '10px',
		maxHeight: '100%',
		maxWidth: '100%',
	},
	imageWrapper: {
		height: 180,
		textAlign: 'center',
		width: 180,
	},
	lastSignIn: {
		display: 'inline-block',
		fontWeight: 'bolder',
		padding: '10px 0',
	},
	location: {
		display: 'inline-block',
		float: 'right',
		fontWeight: 'bolder',
		paddingRight: '20px',
		paddingTop: '0',
	},
	messageImage: {
		borderRadius: '50%',
		display: 'absolute',
		zIndex: '99999 !important',
	},
	more: {
		color: '#ffa692 !important',
		cursor: 'pointer',
		display: 'inline-block',
		marginTop: 0,
		paddingLeft: '20px',
		textDecoration: 'none',
	},
	name: {
		fontSize: 28,
		fontWeight: 'bolder',
		letterSpacing: '1px',
	},
	paper: {
		boxShadow: '6px 6px 47px 3px rgba(200,195,200,1)',
		margin: theme.spacing.unit * 2,
		padding: theme.spacing.unit * 2,
	},
	priceRange: {
		display: 'inline-block',
		fontWeight: 'bolder',
		paddingRight: '20px',
		paddingTop: '0',
	},
	root: {
		overflow: 'visible',
		padding: `0 ${theme.spacing.unit * 3}px`,
	},
	rule: {
		borderTop: '1px dashed #000',
	},
	star: {
		color: '#f8b64c',
	},
	wrapper: {
		maxWidth: 1000,
	},
})

ResultCard.propTypes = {
	classes: PropTypes.object.isRequired,
	doula: PropTypes.object.isRequired,
}

export default withStyles(styles)(ResultCard)

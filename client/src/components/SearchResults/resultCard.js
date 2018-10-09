// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Button from '@material-ui/core/Button';
import Popover from './popOver.js'
import doulaFullProfile from './doulaFullProfile.js';

// Component
const styles = theme => ({
	root: {
		overflow: 'visible',
		padding: `0 ${theme.spacing.unit * 3}px`
	},
	wrapper: {
		maxWidth: 1000,
	},
	paper: {
		margin: theme.spacing.unit * 2,
		padding: theme.spacing.unit * 2,
		boxShadow: "6px 6px 47px 3px rgba(200,195,200,1)",
	},
	name: {
		fontSize: 28,
		fontWeight: 'bolder',
		letterSpacing: '1px'
	},
	bulletSection: {
		margin: '2px 2px',
		columnCount: 2
	},
	image: {
		borderRadius: '10px'
	},
	hr: {
		borderTop: '1px dashed #000'
	},
	priceRange: {
		fontWeight: 'bolder',
		display: 'inline-block',
		paddingRight: '20px',
		paddingTop: '0'
	},
	location: {
		fontWeight: 'bolder',
		display: 'inline-block',
		float: 'right',
		paddingRight: '20px',
		paddingTop: '0'
	},
	more: {
		paddingLeft: '20px',
		textDecoration: 'none',
		color: "#ffa692 !important",
		display: "inline-block",
		marginTop: 0,
		cursor: "pointer"
	},
	lastSignIn: {
		fontWeight: 'bolder',
		display: 'inline-block',
		padding: '10px 0'
	},
	star: {
		color: '#f8b64c'
	},
	button: {
		marginTop: '200px',
		marginLeft: '-195px',
		width: '180px',
		textTransform: 'none',
		backgroundColor: '#ffa692'
	},
});

const MAX_LENGTH = 250;

class ResultCard extends React.Component {
	state = {
		fullProfileOpen: false,
		selectedValue: this.props.doula.id,
		messageOpen: false
	  };

	handleProfileOpen = () => {
		this.setState({
			fullProfileOpen: true,
		});
	};

	handleProfileClose = value => {
		this.setState({ selectedValue: value, fullProfileOpen: false });
	};

	handleMessageOpen = () => {
		this.setState({
			messageOpen: true,
		});
	};

	handleMessageClose = value => {
		this.setState({ selectedValue: value, messageOpen: false });
	};

	render() {
		const { classes, doula } = this.props;
		const trimmedBio = doula.bio.substr(0, MAX_LENGTH)
		const bio = trimmedBio.substr(0, Math.min(trimmedBio.length, trimmedBio.lastIndexOf(" ")))

		// Return the component
		return (
			<div className={classes.root}>
				<div className={classes.wrapper}>
					<Paper className={classes.paper}>
						<Grid container wrap="nowrap" spacing={16}>
							<Grid item>
								<img className={classes.image} src={doula.image} alt={doula.name} />
							</Grid>
							<Grid item>
								<Button variant="contained" className={classes.button} onClick={this.handleMessageOpen}>
									Connect
								</Button>
							</Grid>
							<Grid item xs>
								<Typography className={classes.name}>{doula.name}</Typography>
								<Typography>
									<FontAwesomeIcon className={classes.star} icon={faStar} />
									<FontAwesomeIcon className={classes.star} icon={faStar} />
									<FontAwesomeIcon className={classes.star} icon={faStar} />
									<FontAwesomeIcon className={classes.star} icon={faStar} />
									<FontAwesomeIcon className={classes.star} icon={faStar} />
								</Typography>
								<hr className={classes.hr} />
								<Typography className={classes.priceRange}>Price Range: ${doula.priceRangeMin} - ${doula.priceRangeMax}</Typography>
								<Typography className={classes.location}>{doula.location}</Typography>
								<hr className={classes.hr} />
								{doula.bio.length > MAX_LENGTH
									? <Typography className={classes.bio}>
											{`${bio}...`}<p className={classes.more} onClick={this.handleProfileOpen}>More</p>
										</Typography>
									: <Typography className={classes.bio}>{bio}</Typography>
								}
								<Popover
									selectedValue={this.state.selectedValue}
									open={this.state.fullProfileOpen}
									onClose={this.handleProfileClose}
									child={ doulaFullProfile }
									doula={doula}
									className={classes.popover}
								/>				
								<Typography className={classes.lastSignIn}>Skills:</Typography>
								<div className={classes.bulletSection}>
									{doula.experience.map(experience => (
										<Typography className={classes.bullet}>• {experience}</Typography>
									))}
								</div>
							</Grid>
						</Grid>
					</Paper>
				</div>
			</div>
		);
	}
}
ResultCard.propTypes = {
	classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ResultCard);

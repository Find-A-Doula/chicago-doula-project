// Vendor
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


// Local
import Popover from '../Global/PopOver'
import DoulaMessage from './DoulaMessage'

class DoulaFullProfile extends React.Component {
	state = {
		messageOpen: false,
	}

	handleMessageOpen = () => {
		this.setState({ messageOpen: true })
	}

	handleMessageClose = () => {
		this.setState({ messageOpen: false })
	}

	handleRedirect = () => {
		const { history } = this.props
		return history.push('/learn')
	}

	render() {
		const { classes, doula } = this.props
		const { messageOpen } = this.state

		return (
			<div className={classes.wrapper}>
				<Grid container justify="flex-start" direction="row">
					<Grid item className={classes.imageWrapper}>
						<img className={classes.image} src={doula.image} alt={doula.name} />
					</Grid>
					<Grid item className={classes.header}>
						<Typography className={classes.name}>{doula.name}</Typography>
						<Typography>
							<FontAwesomeIcon className={classes.star} icon={faStar} />
							<FontAwesomeIcon className={classes.star} icon={faStar} />
							<FontAwesomeIcon className={classes.star} icon={faStar} />
							<FontAwesomeIcon className={classes.star} icon={faStar} />
							<FontAwesomeIcon className={classes.star} icon={faStar} />
						</Typography>
						<Typography className={classes.subheadline}>Price Range: ${doula.priceRangeMin} - ${doula.priceRangeMax}</Typography>
						<Typography className={classes.subheadline}>Location: {doula.location}</Typography>
						<Typography className={classes.subheadline}>Travel Range: {doula.travelRange} miles</Typography>
						<Button variant="contained" className={classes.button} onClick={this.handleMessageOpen}>
							Connect
						</Button>
					</Grid>
					<Grid item xs={12}>
						<Typography className={classes.sectionTitle}>About:</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography>
							{doula.bio}
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography className={classes.sectionTitle}>Certifications:</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography><span className={classes.learnMore} onClick={this.handleRedirect} role="redirect">Learn more</span> about evaluating doula certifications, an important part of the interview process.</Typography>
					</Grid>
					<Grid container justify="flex-start" direction="row">
						<Grid item>
							{/* Certificate */}
							<div className={classes.certificate}>Certification</div>
						</Grid>
						<Grid item>
							{doula.certification.length ?
								<List className={classes.listWrapper} dense>
									{doula.certification.map(certification => <ListItem className={classes.listItem} key={certification}><ListItemText primary={certification}/></ListItem>)}
								</List>
								:
								<List className={classes.listWrapper} dense>
									<ListItem className={classes.listItem}><ListItemText primary="Lorem ipsum dolor sit amet consectetur adipiscing"/></ListItem>
									<ListItem className={classes.listItem}><ListItemText primary="Lorem ipsum dolor sit amet consectetur adipiscing"/></ListItem>
									<ListItem className={classes.listItem}><ListItemText primary="Lorem ipsum dolor sit amet consectetur adipiscing"/></ListItem>
									<ListItem className={classes.listItem}><ListItemText primary="Lorem ipsum dolor sit amet consectetur adipiscing"/></ListItem>
								</List>
							}
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<Typography className={classes.sectionTitle}>Experience:</Typography>
					</Grid>
					<Grid container justify="flex-start" direction="row">
						<div className={classes.experienceBox}>
							<div>
								<Typography className={classes.experienceHeadline}>Prenatal</Typography>
							</div>

							<Grid container justify="center" direction="row" className={classes.experienceLists}>
								<div>
									<List className={classes.listWrapper} dense>
										<ListItem className={classes.listItem}><ListItemText className={classes.listItemText} primary="Multiples"/></ListItem>
										<ListItem className={classes.listItem}><ListItemText className={classes.listItemText} primary="Premature"/></ListItem>
										<ListItem className={classes.listItem}><ListItemText className={classes.listItemText} primary="Nursing/Lactation"/></ListItem>
										<ListItem className={classes.listItem}><ListItemText className={classes.listItemText} primary="High Risk"/></ListItem>
									</List>
								</div>
								<div>
									<List className={classes.listWrapper} dense>
										<ListItem className={classes.listItem}><ListItemText className={classes.listItemText} primary="Families of Color"/></ListItem>
										<ListItem className={classes.listItem}><ListItemText className={classes.listItemText} primary="Adoption"/></ListItem>
										<ListItem className={classes.listItem}><ListItemText className={classes.listItemText} primary="People with Disabilites"/></ListItem>
										<ListItem className={classes.listItem}><ListItemText className={classes.listItemText} primary="Water Births"/></ListItem>
									</List>
								</div>
							</Grid>

						</div>
						<div className={classes.experienceBox}>
							<div>
								<Typography className={classes.experienceHeadline}>Post-partum</Typography>
							</div>

							<Grid container justify="center" direction="row" className={classes.experienceLists}>
								<div>
									<List className={classes.listWrapper} dense>
										<ListItem className={classes.listItem}><ListItemText className={classes.listItemText} primary="Care after Cesarean"/></ListItem>
										<ListItem className={classes.listItem}><ListItemText className={classes.listItemText} primary="Prematurity"/></ListItem>
										<ListItem className={classes.listItem}><ListItemText className={classes.listItemText} primary="Nursing/Lactation"/></ListItem>
										<ListItem className={classes.listItem}><ListItemText className={classes.listItemText} primary="Cooking/Nutrition"/></ListItem>
									</List>
								</div>
								<div>
									<List className={classes.listWrapper} dense>
										<ListItem className={classes.listItem}><ListItemText className={classes.listItemText} primary="Overnight Availability"/></ListItem>
										<ListItem className={classes.listItem}><ListItemText className={classes.listItemText} primary="Comfort Watching"/></ListItem>
										<ListItem className={classes.listItem}><ListItemText className={classes.listItemText} primary="Providing Care for Older Children"/></ListItem>
									</List>
								</div>
							</Grid>
						</div>
					</Grid>
					<Grid item xs={6}>
						{/* Prenatal */}
					</Grid>
					<Grid item xs={6}>
						{/* Post-Partum */}
					</Grid>
					<Grid item xs={12}>
						<Typography className={classes.sectionTitle}>Education:</Typography>
					</Grid>
					<Grid item xs={12}>
						<Grid item>
							{doula.education.length ?
								<List className={classes.eduListWrapper} dense>
									{doula.education.map(education => <ListItem className={classes.listItem} key={education}><ListItemText primary={education}/></ListItem>)}
								</List>
								:
								<List className={classes.eduListWrapper} dense>
									<ListItem className={classes.listItem}><ListItemText primary="Lorem ipsum dolor sit amet consectetur adipiscing"/></ListItem>
									<ListItem className={classes.listItem}><ListItemText primary="Lorem ipsum dolor sit amet consectetur adipiscing"/></ListItem>
									<ListItem className={classes.listItem}><ListItemText primary="Lorem ipsum dolor sit amet consectetur adipiscing"/></ListItem>
									<ListItem className={classes.listItem}><ListItemText primary="Lorem ipsum dolor sit amet consectetur adipiscing"/></ListItem>
								</List>
							}						
						</Grid>
					</Grid>
					<Popover
						selectedValue={doula.id}
						open={messageOpen}
						onClose={this.handleMessageClose}
						child={ DoulaMessage }
						doula={doula}
						className={classes.popover}
					/>
				</Grid>
			</div>
		)
	}
}

const styles = theme => ({
	button: {
		backgroundColor: '#ffa692',
		marginTop: 6,
		textTransform: 'none',
		width: '180px',
	},
	certificate: {
		alignItems: 'center',
		border: '1px solid black',
		display: 'flex',
		height: 80,
		justifyContent: 'center',
		margin: 20,
		width: 180,
	},
	eduListWrapper: {
		marginLeft: 20,
	},
	experienceBox: {
		alignItems: 'center',
		backgroundColor: 'lightgray',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		margin: 20,
		minHeight: 80,
		width: '45%',
	},
	experienceHeadline: {
		fontSize: 20,
		fontWeight: 'bolder',
		marginTop: 20,
	},
	experienceLists: {
		marginBottom: 20,
	},
	header: {
		marginLeft: 20,
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
	learnMore: {
		color: '#ffa692 !important',
		cursor: 'pointer',
	},
	listItem: {
		padding: 4,
	},
	listItemText: {
		maxWidth: '140px',
	},
	listWrapper: {
		marginTop: 10,
	},
	name: {
		fontSize: '1.5em',
		fontWeight: 'bolder',
		paddingBottom: 2,
	},
	sectionTitle: {
		fontWeight: 'bolder',
		paddingBottom: 15,
		paddingTop: 15,
	},
	star: {
		color: '#f8b64c',
		paddingBottom: 4,
		paddingTop: 4,
	},
	subheadline: {
		paddingBottom: 4,
	},
	typography: {
		margin: theme.spacing.unit * 2,
	},
	wrapper: {
		marginTop: -30,
		padding: 20,
	},
})

DoulaFullProfile.propTypes = {
	classes: PropTypes.object.isRequired,
	doula: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
	// onClose: PropTypes.func,
	// selectedValue: PropTypes.string,
}

export default withStyles(styles)(DoulaFullProfile)

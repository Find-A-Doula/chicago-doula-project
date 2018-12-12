/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */

// Vendor
import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import ToggleButton from '@material-ui/lab/ToggleButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

// Local
import NavBar from '../components/Global/NavBar'
import StandardButton from '../components/Global/StandardButton'
import { birthDoulaSkills, postpartumDoulaSkills, languages } from '../constants'

class DoulaSurvey extends React.Component {
	state = {
		bio: '',
		birthDoulaExperience: [],
		birthDoulaStartDate: '',
		certification: [],
		dateOfBirth: '',
		doulaType: [],
		education: [],
		name: '',
		postpartumDoulaExperience: [],
		postpartumDoulaStartDate: '',
		priceRangeMax: 1000,
		priceRangeMin: 0,
		showConfirmation: false,
		showWarning: false,
		spokenLanguages: [],
		travelRange: 0,
		zipCode: '',
	}

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
		})
	}

	handleFormSubmit = (event) => {
		event.preventDefault()
		axios.post('/api/doula', {doula: this.state})
			.then(response => {
				console.log(response.data)
				this.setState({ showConfirmation: true })
			})
			.catch(error => {
				if (error.response.status === 422) {
					window.scrollTo({ behavior: 'smooth', top: 0 })
					this.setState({ showWarning: true })
				}
				console.log(error.response)
			})
	}

	handleToggle = (event, doulaType) => {
		this.setState({ doulaType })
	}

	handleBirthDoulaListField = value => () => {
		const { birthDoulaExperience } = this.state
		const currentIndex = birthDoulaExperience.indexOf(value)
		const newChecked = [...birthDoulaExperience]

		if (currentIndex === -1) {
			newChecked.push(value)
		} else {
			newChecked.splice(currentIndex, 1)
		}

		this.setState({
			birthDoulaExperience: newChecked,
		})
	}

	handleLanguageListField = value => () => {
		const { spokenLanguages } = this.state
		const currentIndex = spokenLanguages.indexOf(value)
		const newChecked = [...spokenLanguages]

		if (currentIndex === -1) {
			newChecked.push(value)
		} else {
			newChecked.splice(currentIndex, 1)
		}

		this.setState({
			spokenLanguages: newChecked,
		})
	}

	handlePostpartumDoulaListField = value => () => {
		const { postpartumDoulaExperience } = this.state
		const currentIndex = postpartumDoulaExperience.indexOf(value)
		const newChecked = [...postpartumDoulaExperience]

		if (currentIndex === -1) {
			newChecked.push(value)
		} else {
			newChecked.splice(currentIndex, 1)
		}

		this.setState({
			postpartumDoulaExperience: newChecked,
		})
	}

	render() {
		const { classes } = this.props
		const { birthDoulaExperience, birthDoulaStartDate, bio, certification, dateOfBirth, doulaType, education, name, postpartumDoulaExperience, postpartumDoulaStartDate, priceRangeMax, priceRangeMin, showConfirmation, showWarning, spokenLanguages, travelRange, zipCode } = this.state

		return (
			<div>
				<NavBar currentPage="/signup"/>
				{showWarning ?
					<div className={classes.warning}>
						<Typography gutterBottom>Oops! Some information below is missing or incomplete.</Typography>
					</div>
					: null}
				<div className={classes.root}>
					<form onSubmit={this.handleFormSubmit}>
						<Grid container spacing={16} direction="column" alignItems="center">
							<Typography variant="h3" gutterBottom>Doula Sign Up</Typography>
							<Grid container item xs={8}>
								<Typography variant="h5" gutterBottom>About You:</Typography>
							</Grid>
							{/* Name */}
							<Grid item>
								<TextField
									id="name"
									label="Full Name"
									className={classes.textField}
									value={name}
									onChange={this.handleChange('name')}
									placeholder="Meryl Streep"
									variant="outlined"
									margin="dense"
									InputLabelProps={{
										shrink: true,
									}}
								/>
							</Grid>
							{/* Doula Type */}
							<Grid item className={classes.doulaPicker}>
								<Typography>I am a:</Typography>
								<div className={classes.toggleContainer}>
									<ToggleButtonGroup
										onChange={this.handleToggle}
										value={doulaType}
									>
										<ToggleButton value="birthDoula">Birth Doula</ToggleButton>
										<ToggleButton value="postpartumDoula">Postpartum Doula</ToggleButton>
									</ToggleButtonGroup>
								</div>
							</Grid>
						</Grid>
						{/* If birth Doula... */}
						{doulaType.indexOf('birthDoula') > -1 ?
							<Grid container spacing={16} direction="column" alignItems="center">
								<Grid container item xs={8}>
									<Typography variant="h5" gutterBottom>Birth Doula Details:</Typography>
								</Grid>
								<Grid item>
									<TextField
										id="birthDoulaStartDate"
										type="date"
										label="Start Date"
										helperText="Date you started working as a birth doula"
										value={birthDoulaStartDate}
										onChange={this.handleChange('birthDoulaStartDate')}
										// fullWidth
										InputLabelProps={{
											shrink: true,
										}}
									/>
								</Grid>
								<Grid container item xs={6}>
									<Typography variant="h6" gutterBottom>Skills:</Typography>
								</Grid>
								<Grid container item className={classes.itemListWrapper}>
									{birthDoulaSkills.map((value) => (
										<Grid item xs={6} key={`birthDoulaSkill-${value}`}>
											<List className={classes.itemList}>
												<ListItem
													role={undefined}
													dense
													button
													onClick={this.handleBirthDoulaListField(value)}
													className={classes.listItem}
												>
													<Checkbox
														checked={birthDoulaExperience.indexOf(value) !== -1}
														tabIndex={-1}
														disableRipple
														className={classes.listItemCheckbox}
														// checkedIcon={null}  // Need to find a new icon
													/>
													<ListItemText primary={value} className={classes.listItemText} />
												</ListItem>
											</List>
										</Grid>
									))}
								</Grid>
							</Grid>
							: <div/> }
						{/* If postpartum Doula... */}
						{doulaType.indexOf('postpartumDoula') > -1 ?
							<Grid container spacing={16} direction="column" alignItems="center">
								<Grid container item xs={8}>
									<Typography variant="h5" gutterBottom>Postpartum Doula Details:</Typography>
								</Grid>
								<Grid item>
									<TextField
										id="postpartumDoulaStartDate"
										type="date"
										label="Start Date"
										helperText="Date you started working as a postpartum doula"
										value={postpartumDoulaStartDate}
										onChange={this.handleChange('postpartumDoulaStartDate')}
										InputLabelProps={{
											shrink: true,
										}}
									/>
								</Grid>
								<Grid container item xs={6}>
									<Typography variant="h6" gutterBottom>Skills:</Typography>
								</Grid>
								<Grid container item className={classes.itemListWrapper}>
									{postpartumDoulaSkills.map((value) => (
										<Grid item xs={6} key={`postpartumDoulaSkill-${value}`}>
											<List className={classes.focusAreaList}>
												<ListItem
													role={undefined}
													dense
													button
													onClick={this.handlePostpartumDoulaListField(value)}
													className={classes.listItem}
												>
													<Checkbox
														checked={postpartumDoulaExperience.indexOf(value) !== -1}
														tabIndex={-1}
														disableRipple
														className={classes.listItemCheckbox}
														// checkedIcon={null}  // Need to find a new icon
													/>
													<ListItemText primary={value} className={classes.listItemText} />
												</ListItem>
											</List>
										</Grid>
									))}
								</Grid>
							</Grid>
							: <div/> }
						{/* Certification */}
						<Grid container spacing={16} direction="column" alignItems="center">
							<Grid container item xs={8}>
								<Typography variant="h5" gutterBottom>Additional Information:</Typography>
							</Grid>
							<Grid item>
								<TextField
									id="certification"
									label="Certification"
									className={classes.textField}
									value={certification}
									onChange={this.handleChange('certification')}
									placeholder="My Certification"
									variant="outlined"
									margin="dense"
									InputLabelProps={{
										shrink: true,
									}}
								/>
							</Grid>
							<Grid item>
								<TextField
									id="dateOfBirth"
									type="date"
									label="My Date of Birth"
									className={classes.datePicker}
									value={dateOfBirth}
									onChange={this.handleChange('dateOfBirth')}
									InputLabelProps={{
										shrink: true,
									}}
								/>
							</Grid>
							<Grid item>
								<TextField
									id="zipCode"
									label="My Zip Code"
									className={classes.textField}
									value={zipCode}
									onChange={this.handleChange('zipCode')}
									placeholder="60610"
									variant="outlined"
									margin="dense"
									InputLabelProps={{
										shrink: true,
									}}
								/>
							</Grid>
							<Grid item>
								<Grid container alignItems="flex-end">
									<TextField
										id="travelRange"
										type="number"
										label="My Travel Range"
										className={classes.numPicker}
										value={travelRange}
										onChange={this.handleChange('travelRange')}
										variant="outlined"
										margin="dense"
										InputLabelProps={{
											shrink: true,
										}}
									/>
									<Typography variant="body1" style={{ paddingBottom: 18, paddingLeft: 14}}>miles</Typography>
								</Grid>
							</Grid>
							<Grid item>
								<Grid container alignItems="flex-end">
									<Typography variant="body1" style={{paddingBottom: 18, paddingRight: 4}}>$</Typography>
									<TextField
										id="priceRangeMin"
										type="number"
										label="My Minimum Price"
										className={classes.numPicker}
										value={priceRangeMin}
										onChange={this.handleChange('priceRangeMin')}
										variant="outlined"
										margin="dense"
										InputLabelProps={{
											shrink: true,
										}}
									/>
								</Grid>
							</Grid>
							<Grid item>
								<Grid container alignItems="flex-end">
									<Typography variant="body1" style={{paddingBottom: 18, paddingRight: 4}}>$</Typography>
									<TextField
										id="priceRangeMax"
										type="number"
										label="My Maximum Price"
										className={classes.numPicker}
										value={priceRangeMax}
										onChange={this.handleChange('priceRangeMax')}
										variant="outlined"
										margin="dense"
										InputLabelProps={{
											shrink: true,
										}}
									/>
								</Grid>
							</Grid>
							<Grid container item xs={8}>
								<TextField
									id="bio"
									value={bio}
									onChange={this.handleChange('bio')}
									placeholder="I have been a doula for..."
									multiline
									rows={8}
									fullWidth
									variant="outlined"
									margin="dense"
									InputLabelProps={{
										shrink: true,
									}}
								/>
							</Grid>
							<Grid item>
								<TextField
									id="education"
									label="My Education"
									className={classes.textField}
									value={education}
									onChange={this.handleChange('education')}
									placeholder="Northwestern University"
									variant="outlined"
									margin="dense"
									InputLabelProps={{
										shrink: true,
									}}
								/>
							</Grid>
							<Grid container item xs={6}>
								<Typography variant="h6" gutterBottom>Lanugages Spoken:</Typography>
							</Grid>
							<Grid container className={classes.itemListWrapper} item alignItems="center">
								{languages.map((value) => (
									<Grid item xs={4} key={value}>
										<List className={classes.itemList}>
											<ListItem
												role={undefined}
												dense
												button
												onClick={this.handleLanguageListField(value)}
												className={classes.listItem}
											>
												<Checkbox
													checked={spokenLanguages.indexOf(value) !== -1}
													tabIndex={-1}
													disableRipple
													className={classes.listItemCheckbox}
													// checkedIcon={null}  // Need to find a new icon
												/>
												<ListItemText primary={value} className={classes.listItemText} />
											</ListItem>
										</List>
									</Grid>
								))}
							</Grid>
							<Grid item>
								<StandardButton value="Submit"/>
							</Grid>
							<Dialog
								open={showConfirmation}
								onClose={() => this.setState({ showConfirmation: false })}
							>
								<DialogTitle id="alert-dialog-title">Thank you!</DialogTitle>
								<DialogContent>
									<DialogContentText id="alert-dialog-description">
										Well be in touch
									</DialogContentText>
								</DialogContent>
								<DialogActions>
									<Button onClick={this.handleClose} color="primary" autoFocus>
										Great!
									</Button>
								</DialogActions>
							</Dialog>
						</Grid>
					</form>
				</div>
			</div>
		)
	}
}

const styles = theme => ({
	birthDateWrapper: {
		width: 80,
	},
	button: {
		backgroundColor: '#ffa692',
		marginTop: 20,
		textTransform: 'none',
		width: '30%',
	},
	datePicker: {
		margin: 20,
	},
	doulaPicker: {
		marginTop: 20,
	},
	familyPhoto: {
		alignItems: 'center',
		border: '1px solid black',
		display: 'flex',
		height: 80,
		justifyContent: 'center',
		margin: 20,
		width: 180,
	},
	header: {
		// marginTop: -200,
		marginTop: -80,
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
	itemList: {
		padding: 0,
	},
	itemListWrapper: {
		marginBottom: 40,
		maxWidth: 400,
	},
	listItem: {
		height: 30,
		padding: 0,
		width: 200,
	},
	listItemText: {
		padding: 0,
	},
	message: {
		marginTop: 0,
	},
	name: {
		fontSize: '1.5em',
		fontWeight: 'bolder',
		paddingBottom: 2,
	},
	numPicker: {
		marginTop: 50,
		maxWidth: 200,
	},
	root: {
		flexGrow: 1,
		padding: theme.spacing.unit * 2,
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
	textField: {
		// flexBasis: 200,
		minWidth: 300,
	},
	toggleContainer: {
		cursor: 'pointer',
		height: 56,
		margin: `${theme.spacing.unit}px 0`,
	},
	typography: {
		margin: theme.spacing.unit * 2,
	},
	uploadLink: {
		margin: 0,
		paddingLeft: 6,
	},
	uploadLinkWrapper: {
		cursor: 'pointer',
		fontSize: 12,
		paddingLeft: 40,
	},
	warning: {
		backgroundColor: 'pink',
		marginBottom: 10,
		padding: 14,
		textAlign: 'center',
	},
	wrapper: {
		padding: 20,
	},
})

DoulaSurvey.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(DoulaSurvey)

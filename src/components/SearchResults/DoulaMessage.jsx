// Vendor
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import ToggleButton from '@material-ui/lab/ToggleButton'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCamera } from '@fortawesome/free-solid-svg-icons'

class DoulaMessage extends React.Component {
	state = {
		birthDate: '',
		confirmOpen: false,
		doulaType: [''],
		familyName: '',
		hospitalName: '',
		message: '',
		pastPregnancies: 1,
	}

	componentDidMount() {
		this.setState({birthDate: this.getDate()})
	}

	// Use moment.js if we add it in the future
	getDate = () => {
		const d = new Date()
		let month = (d.getMonth() + 1).toString()
		let day = d.getDate().toString()
		const year = d.getFullYear().toString()

		if (month.length < 2) month = `0${month}`
		if (day.length < 2) day = `0${day}`

		return [year, month, day].join('-')
	}

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
		})
	}

	handleClickOpen = () => {
		this.setState({ confirmOpen: true })
	}

	handleClose = () => {
		const { onClose } = this.props
		this.setState({ confirmOpen: false }, onClose())
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.handleClickOpen()
	}

	handleToggle = (event, doulaType) => this.setState({ doulaType })

	render() {
		const { classes, doula } = this.props
		const { birthDate, confirmOpen, doulaType, familyName, hospitalName, message, pastPregnancies } = this.state

		return (
			<div className={classes.wrapper}>
				<Grid container justify="center" direction="column" alignItems="center" className={classes.header}>
					<Grid item className={classes.imageWrapper}>
						<img className={classes.image} src={doula.image} alt={doula.name} />
					</Grid>
					<Grid item><Typography className={classes.name}>{doula.name}</Typography></Grid>
					<Grid item>
						<Typography>
							<FontAwesomeIcon className={classes.star} icon={faStar} />
							<FontAwesomeIcon className={classes.star} icon={faStar} />
							<FontAwesomeIcon className={classes.star} icon={faStar} />
							<FontAwesomeIcon className={classes.star} icon={faStar} />
							<FontAwesomeIcon className={classes.star} icon={faStar} />
						</Typography>
					</Grid>
				</Grid>
				<Grid container justify="flex-start" direction="row">
					<Grid item xs={12}>
						<Typography className={classes.sectionTitle}>Message:</Typography>
					</Grid>
					<Grid item xs={12}>
						<TextField
							id="message"
							className={classes.message}
							value={message}
							onChange={this.handleChange('message')}
							multiline
							rows={8}
							fullWidth
							placeholder="Hello, I am looking for a doula..."
							variant="outlined"
							margin="dense"
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</Grid>
					<Grid item xs={12}>
						<Typography className={classes.sectionTitle}>About Your Family:</Typography>
					</Grid>
					<Grid container item xs={12}>
						<Grid item xs={4}>
							<div className={classes.familyPhoto}>Family Picture</div>
							<Grid container item className={classes.uploadLinkWrapper}>
								<FontAwesomeIcon className={classes.camera} icon={faCamera} />
								<p className={classes.uploadLink}>Upload New Photo</p>
							</Grid>
						</Grid>
						<Grid container item xs={5}>
							<Grid item>
								<TextField
									id="familyName"
									label="Family Name"
									className={classes.textField}
									value={familyName}
									onChange={this.handleChange('familyName')}
									placeholder="Smith Family"
									variant="outlined"
									margin="dense"
									InputLabelProps={{
										shrink: true,
									}}
								/>
							</Grid>
							<Grid item className={classes.doulaPicker}>
								<Typography>I am looking for a:</Typography>
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
							<Grid item>
								<TextField
									id="hospitalName"
									label="Hospital Name"
									className={classes.textField}
									value={hospitalName}
									onChange={this.handleChange('familyName')}
									placeholder="Northwestern Memorial"
									variant="outlined"
									margin="dense"
									InputLabelProps={{
										shrink: true,
									}}
								/>
							</Grid>
						</Grid>
						<Grid item xs={3}>
							<TextField
								id="birthDate"
								label="Delivery Date"
								type="date"
								value={birthDate}
								onChange={this.handleChange('birthDate')}
								className={classes.datePicker}
								InputLabelProps={{
									shrink: true,
								}}
							/>
							<TextField
								id="pastPregnancies"
								label="Past Pregnancies"
								className={classes.numPicker}
								value={pastPregnancies}
								onChange={this.handleChange('pastPregnancies')}
								variant="outlined"
								margin="dense"
								type="number"
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</Grid>
					</Grid>
					<Grid container item xs={12} justify="center">
						<Button variant="contained" className={classes.button} onClick={this.handleSubmit}>
							Send Message
						</Button>
					</Grid>
				</Grid>
				<Dialog
					open={confirmOpen}
					onClose={this.handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">Thank You!</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							Your message has been sent. You should hear back from your doula soon.
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color="primary">
							Close
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		)
	}
}

const styles = theme => ({
	button: {
		backgroundColor: '#ffa692',
		marginTop: 20,
		textTransform: 'none',
		width: '30%',
	},
	camera: {
	},
	datePicker: {
		maxWidth: 200,
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
	wrapper: {
		padding: 20,
	},
})

DoulaMessage.propTypes = {
	classes: PropTypes.object.isRequired,
	doula: PropTypes.object.isRequired,
	onClose: PropTypes.func.isRequired,
}

export default withStyles(styles)(DoulaMessage)

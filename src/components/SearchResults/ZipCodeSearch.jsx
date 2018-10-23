// Vendor
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const ZipCodeSearch = ({ classes }) => (
	<div className={classes.root}>
		<Grid container direction="row" justify="center" alignItems="center">
			<Button href="#" variant="contained" className={classes.button}>Zip Code</Button>
			<TextField
				defaultValue="Zip Code"
				id="zipCodeInput"
				InputProps={{
					classes: {
						input: classes.bootstrapInput,
						root: classes.bootstrapRoot,
					},
					disableUnderline: true,
				}}
				InputLabelProps={{
					className: classes.bootstrapFormLabel,
					shrink: true,
				}}
			/>
		</Grid>
	</div>
)

const styles = theme => ({
	bootstrapFormLabel: {
		fontSize: 18,
	},
	bootstrapInput: {
		'&:focus': {
			borderColor: '#80bdff',
			boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
		},
		backgroundColor: theme.palette.common.white,
		border: '1px solid #ced4da',
		borderRadius: 4,
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		fontSize: 16,
		marginLeft: '20px',
		padding: '10px 12px',
		transition: theme.transitions.create(['border-color', 'box-shadow']),
		width: 'calc(100% - 24px)',
	},
	bootstrapRoot: {
		'label + &': {
			marginTop: theme.spacing.unit * 3,
		},
		padding: 0,
	},
	button: {
		backgroundColor: '#eaeaea',
		backgroundImage: '-webkit-gradient(linear, left top, left bottom, from(#EAEAEA), to(#F9F9F9))',
		border: '1px solid #b1b9c3',
		textTransform: 'none',
	},
	root: {
		overflow: 'hidden',
		padding: `0 ${theme.spacing.unit * 3}px`,
	},
})

ZipCodeSearch.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ZipCodeSearch)

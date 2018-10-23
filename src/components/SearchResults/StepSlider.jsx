// Vendor
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/lab/Slider'

class StepSlider extends React.Component {
	state = {
		value: 0,
	}

	handleChange = (event, value) => {
		this.setState({ value })
	}

	render() {
		const { classes, sliderEndLabel, sliderMax, sliderMin, sliderStartLabel, sliderStep, title} = this.props
		const { value } = this.state

		return (
			<div className={classes.root}>
				<Grid item xs={12}>
					<Typography className={classes.title} id="label">{title}</Typography>
				</Grid>
				<Grid item xs={12}>
					<hr className={classes.rule} />
				</Grid>
				<Grid container direction="row" justify="center" alignItems="center">
					<Slider
						className={classes.slider}
						value={value}
						aria-labelledby="label"
						min={sliderMin}
						max={sliderMax}
						step={sliderStep}
						onChange={this.handleChange}
					/>
					<Typography className={classes.sliderValue}>
						{sliderStartLabel}{value}{sliderEndLabel}
					</Typography>
				</Grid>
			</div>
		)
	}
}

const styles = () => ({
	root: {
		flexGrow: 1,
	},
	rule: {
		border: 0,
		borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
		borderTop: '1px solid rgba(0, 0, 0, 0.1)',
		height: 0,
		maxWidth: '90%',
		paddingTop: 6,
	},
	slider: {
		maxWidth: '70%',
	},
	sliderValue: {
		marginLeft: '10px',
	},
	title: {
		// fontSize: '20px',
		fontWeight: 'bold',
		marginLeft: '20px',
		paddingTop: 6,
	},
})

StepSlider.propTypes = {
	classes: PropTypes.object.isRequired,
	sliderEndLabel: PropTypes.string,
	sliderMax: PropTypes.number.isRequired,
	sliderMin: PropTypes.number.isRequired,
	sliderStartLabel: PropTypes.string,
	sliderStep: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
}

StepSlider.defaultProps = {
	sliderEndLabel: '',
	sliderStartLabel: '',
}

export default withStyles(styles)(StepSlider)

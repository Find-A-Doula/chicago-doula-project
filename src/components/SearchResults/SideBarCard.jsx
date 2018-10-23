// Vendor
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

// Local
import ZipCodeSearch from './ZipCodeSearch'
import DoulaSelectDropdown from './DoulaSelectDropdown'
import StepSlider from './StepSlider'
import SideBarList from './SideBarList'

// Component
const styles = theme => ({
	paper: {
		boxShadow: '6px 6px 47px 3px rgba(200,195,200,1)',
		margin: theme.spacing.unit * 5,
		padding: theme.spacing.unit * 2,
	},
	root: {
		overflow: 'hidden',
		padding: `0 ${theme.spacing.unit * 3}px`,
	},
})

const SideBarCard = ({ classes }) => (
	<div className={classes.root}>
		<Paper className={classes.paper}>
			<Grid container>
				<Grid item xs={12}>
					<ZipCodeSearch />
				</Grid>
				<Grid item xs={12}>
					<DoulaSelectDropdown />
				</Grid>
				<Grid item xs={12}>
					<StepSlider
						title="Maxiumum Price"
						sliderMin={0}
						sliderMax={1000}
						sliderStep={50}
						sliderStartLabel="$"
					/>
				</Grid>
				<Grid item xs={12}>
					<SideBarList title="Focus Area"/>
				</Grid>
			</Grid>
		</Paper>
	</div>
)

SideBarCard.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SideBarCard)

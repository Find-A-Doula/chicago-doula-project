// Vendor
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

// Local
import ResultCard from '../components/SearchResults/ResultCard'
import SideBarCard from '../components/SearchResults/SideBarCard'
import NavBar from '../components/Global/NavBar'
import FilterDropdown from '../components/SearchResults/FilterDropdown'
import preload from '../../data.json'

const SearchResults = (props) => {
	const { classes, ...rest } = props

	return (
		<div className={classes.root}>
			<NavBar className={classes.navBar} currentPage="/results"/>
			<Grid container spacing={8} className={classes.pageWrapper}>
				<Grid item xs={12} md={5}>
					<div><h2 className={classes.sideBarHeaderText}>Refine Results</h2></div>
					<SideBarCard/>
				</Grid>
				<Grid container item xs={12} md={7}>
					<Grid item xs={6}>
						<FilterDropdown />
					</Grid>
					<Grid item xs={6}>
						<p className={classes.resultsAmount}>
							<span className={classes.resultsAmountSpan}>57</span> Doulas Found
						</p>
					</Grid>
					<Grid item xs={12}>
						{preload.doulas.map(doula => (
							<ResultCard key={doula.id} doula={doula} {...rest} />
						))}
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

const styles = () => ({
	pageWrapper: {
		marginTop: '20px',
	},
	resultsAmountSpan: {
		color: '#ffa692 !important',
	},
	root: {
		flexGrow: 1,
	},
	sideBarHeaderText: {
		margin: 0,
		textAlign: 'center',
	},
})

SearchResults.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SearchResults)


// Vendor
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'

const doulaSkills = [
	'VBAC',
	'Multiples',
	'Premature',
	'Nursing',
	'High Risk',
	'LGBTQ',
	'Teens',
	'Single Parent',
	'Trama Informed',
	'Families of Color',
	'Adoption',
	'People with Disabilities',
	'Waterbirth',
	'Homebirth',
	'Advocacy in Hospital',
	'Prenatal Yoga',
]

class SideBarList extends React.Component {
	state = {
		checked: [0],
	}

	handleToggle = value => () => {
		const { checked } = this.state
		const currentIndex = checked.indexOf(value)
		const newChecked = [...checked]

		if (currentIndex === -1) {
			newChecked.push(value)
		} else {
			newChecked.splice(currentIndex, 1)
		}

		this.setState({
			checked: newChecked,
		})
	}

	render() {
		const { classes, title } = this.props
		const { checked } = this.state

		return (
			<div className={classes.root}>
				<Grid item xs={12}>
					<Typography className={classes.title} id="label">{title}</Typography>
				</Grid>
				<Grid item xs={12}>
					<hr className={classes.rule} />
				</Grid>
				<Grid container className={classes.focusAreaListWrapper}>
					{doulaSkills.map((value) => (
						<Grid item xs={6} key={value}>
							<List className={classes.focusAreaList}>
								<ListItem
									role={undefined}
									dense
									button
									onClick={this.handleToggle(value)}
									className={classes.listItem}
								>
									<Checkbox
										checked={checked.indexOf(value) !== -1}
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
			</div>
		)
	}
}

const styles = theme => ({
	focusAreaList: {
		padding: 0,
	},
	focusAreaListWrapper: {
		marginLeft: 30,
	},
	listItem: {
		height: 30,
		padding: 0,
	},
	listItemText: {
		padding: 0,
	},
	root: {
		backgroundColor: theme.palette.background.paper,
		maxWidth: 360,
		width: '100%',
	},
	rule: {
		border: 0,
		borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
		borderTop: '1px solid rgba(0, 0, 0, 0.1)',
		height: 0,
		maxWidth: '90%',
	},
	title: {
		fontWeight: 'bold',
		marginLeft: '20px',
		paddingTop: 6,
	},
})

SideBarList.propTypes = {
	classes: PropTypes.object.isRequired,
	title: PropTypes.string,
}

SideBarList.defaultProps = {
	title: '',
}

export default withStyles(styles)(SideBarList)

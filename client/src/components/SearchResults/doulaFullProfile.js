// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const styles = theme => ({
	typography: {
		margin: theme.spacing.unit * 2,
	},
	wrapper: {
		padding: 20,
		marginTop: -30,
	},
	image: {
		borderRadius: '10px'
	},
	subheadline: {
		paddingBottom: 4
	},
	name: {
		fontWeight: "bolder",
		fontSize: "1.5em",
		paddingBottom: 2
	},
	sectionTitle: {
		fontWeight: "bolder",
		paddingTop: 15,
		paddingBottom: 15
	},
	button: {
		width: '180px',
		textTransform: 'none',
		backgroundColor: '#ffa692',
		marginTop: 6
	},
	header: {
		marginLeft: 20
	},
	star: {
		color: '#f8b64c',
		paddingTop: 4,
		paddingBottom: 4
	},
	certificate: {
		height: 80,
		width: 180,
		display: "flex",
		border: "1px solid black",
		margin: 20,
		alignItems: "center",
		justifyContent: "center"
	},
	listWrapper: {
		marginTop: 10
	},
	listItem: {
		padding: 4,
	},
	experienceBox: {
		minHeight: 80,
		width: "45%",
		display: "flex",
		backgroundColor: "lightgray",
		margin: 20,
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},
	experienceHeadline: {
		marginTop: 20,
		fontWeight: "bolder",
		fontSize: 20
	},
	eduListWrapper: {
		marginLeft: 20
	},
	experienceLists: {
		marginBottom: 20
	}
})

class DoulaFullProfile extends React.Component {

	render() {
		const { classes, doula } = this.props;

		return (
			<div className={classes.wrapper}>
			  <Grid container justify="flex-start" direction="row">
				<Grid item>
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
					<Button variant="contained" className={classes.button} onClick={this.handleClickOpen}>
						Connect
					</Button>
				</Grid>
				<Grid item xs={12}>
					<Typography className={classes.sectionTitle}>About:</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography>
						Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus ultrices vulputate lectus class morbi hendrerit facilisi, cubilia vehicula
						feugiat etiam nostra orci dui porttitor praesent leo quis sociosqu suscipit nisi. Tempus gravida blandit semper etiam fames habitant pharetra
						nulla turpis aenean, praesent per auctor lobortis fermentum sapien facilisis porttitor litora lectus, mollis inceptos natoque himenaeos
						molestie viverra congue hac accumsan. Cum potenti pretium elementum laoreet eu vulputate per enim nunc, platea dui hendrerit phasellus
						sapien aptent vitae parturient, congue in est ad curae cursus mauris rhoncus.
						Nam tellus egestas commodo lacinia sem hendrerit luctus volutpat nascetur ultricies ullamcorper enim maecenas ligula, tristique
						condimentum fringilla malesuada praesent sed nulla scelerisque habitant tortor imperdiet aenean. Ultrices orci a posuere tempor mi sapien
						commodo faucibus dui, habitant vulputate habitasse fames rhoncus parturient condimentum feugiat, curae sem tellus molestie lectus velit
						dis porta. Molestie sed libero eros enim sagittis ante potenti, quis vulputate luctus nisl dictumst ullamcorper, habitant vel imperdiet gravida
						lacus vivamus
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography className={classes.sectionTitle}>Certifications:</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography>Learn more about evaluating doula certifications, an important part of the interview process.</Typography>
				</Grid>
				<Grid container justify="flex-start" direction="row">
					<Grid item>
						{/* Certificate */}
						<div className={classes.certificate}>Certification</div>
					</Grid>
					<Grid item>
						{/* List */}
						<List className={classes.listWrapper} dense={true}>
							<ListItem className={classes.listItem}><ListItemText primary="Lorem ipsum dolor sit amet consectetur adipiscing"/></ListItem>
							<ListItem className={classes.listItem}><ListItemText primary="Lorem ipsum dolor sit amet consectetur adipiscing"/></ListItem>
							<ListItem className={classes.listItem}><ListItemText primary="Lorem ipsum dolor sit amet consectetur adipiscing"/></ListItem>
							<ListItem className={classes.listItem}><ListItemText primary="Lorem ipsum dolor sit amet consectetur adipiscing"/></ListItem>
						</List>
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
								<List className={classes.listWrapper} dense={true}>
									<ListItem className={classes.listItem}><ListItemText primary="Multiples"/></ListItem>
									<ListItem className={classes.listItem}><ListItemText primary="Premature"/></ListItem>
									<ListItem className={classes.listItem}><ListItemText primary="Nursing/Lactation"/></ListItem>
									<ListItem className={classes.listItem}><ListItemText primary="High Risk"/></ListItem>
								</List>
							</div>
							<div>
								<List className={classes.listWrapper} dense={true}>
									<ListItem className={classes.listItem}><ListItemText primary="Families of Color"/></ListItem>
									<ListItem className={classes.listItem}><ListItemText primary="Adoption"/></ListItem>
									<ListItem className={classes.listItem}><ListItemText primary="People with Disabilites"/></ListItem>
									<ListItem className={classes.listItem}><ListItemText primary="Water Births"/></ListItem>
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
								<List className={classes.listWrapper} dense={true}>
									<ListItem className={classes.listItem}><ListItemText primary="Care after Cesarean"/></ListItem>
									<ListItem className={classes.listItem}><ListItemText primary="Prematurity"/></ListItem>
									<ListItem className={classes.listItem}><ListItemText primary="Nursing/Lactation"/></ListItem>
									<ListItem className={classes.listItem}><ListItemText primary="Cooking/Nutrition"/></ListItem>
								</List>
							</div>
							<div>
								<List className={classes.listWrapper} dense={true}>
									<ListItem className={classes.listItem}><ListItemText primary="Overnight Availability"/></ListItem>
									<ListItem className={classes.listItem}><ListItemText primary="Comfort Watching"/></ListItem>
									<ListItem className={classes.listItem}><ListItemText primary="Providing Care for Older Children"/></ListItem>
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
						<List className={classes.eduListWrapper} dense={true}>
							<ListItem className={classes.listItem}><ListItemText primary="Lorem ipsum dolor sit amet consectetur adipiscing"/></ListItem>
							<ListItem className={classes.listItem}><ListItemText primary="Lorem ipsum dolor sit amet consectetur adipiscing"/></ListItem>
							<ListItem className={classes.listItem}><ListItemText primary="Lorem ipsum dolor sit amet consectetur adipiscing"/></ListItem>
							<ListItem className={classes.listItem}><ListItemText primary="Lorem ipsum dolor sit amet consectetur adipiscing"/></ListItem>
						</List>
					</Grid>
				</Grid>
			  </Grid>
		  </div>
		);
	}
}
DoulaFullProfile.propTypes = {
	classes: PropTypes.object.isRequired,
	onClose: PropTypes.func,
	selectedValue: PropTypes.string,
  };
export default withStyles(styles)(DoulaFullProfile);

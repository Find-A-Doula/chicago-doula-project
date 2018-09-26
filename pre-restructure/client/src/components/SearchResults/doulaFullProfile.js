// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import blue from '@material-ui/core/colors/blue';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const styles = theme => ({
	typography: {
		margin: theme.spacing.unit * 2,
	},
	wrapper: {
		padding: 20,
	},
	image: {
		borderRadius: '10px'
	}
})

class DoulaFullProfile extends React.Component {

	render() {
		const { classes, doula } = this.props;

		return (
			<div className={classes.wrapper}>
			  <Grid container>
				<Grid item xs={4}>
					<img className={classes.image} src={doula.image} alt={doula.name} />
				</Grid>
				<Grid item xs={8}>
					<Typography className={classes.name}>{doula.name}</Typography>
					<Typography>
						<FontAwesomeIcon className={classes.star} icon={faStar} />
						<FontAwesomeIcon className={classes.star} icon={faStar} />
						<FontAwesomeIcon className={classes.star} icon={faStar} />
						<FontAwesomeIcon className={classes.star} icon={faStar} />
						<FontAwesomeIcon className={classes.star} icon={faStar} />
					</Typography>
					<Typography className={classes.priceRange}>Price Range: ${doula.priceRangeMin} - ${doula.priceRangeMax}</Typography>
					<Typography className={classes.location}>{doula.location}</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography>About:</Typography>
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
					<Typography>Certifications:</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography>Learn more about evaluating doula certifications, an important part of the interview process</Typography>
					<Grid item xs={6}>
						{/* Certificate */}
					</Grid>
					<Grid item xs={6}>
						{/* List */}
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Typography>Experience:</Typography>
				</Grid>
				<Grid item xs={6}>
					{/* Prenatal */}
				</Grid>
				<Grid item xs={6}>
					{/* Post-Partum */}
				</Grid>
				<Grid item xs={12}>
					<Typography>Education:</Typography>
				</Grid>
				<Grid item xs={12}>
					{/* List */}
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

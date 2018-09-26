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

import DoulaFullProfile from './doulaFullProfile.js';

const styles = theme => ({
	typography: {
		margin: theme.spacing.unit * 2,
	},
})

class PopOver extends React.Component {

	handleClose = () => {
		this.props.onClose(this.props.selectedValue);
	  };
	

	render() {
		const { classes, onClose, selectedValue, ...other } = this.props;
		const Child = this.props.child

		return (
			<Dialog 
				onClose={this.handleClose} 
				aria-labelledby="simple-dialog-title"
				// maxWidth="lg"
				{...other}
			>
				{/* <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle> */}
				<Child {...other}/>
			</Dialog>
		);
	}
}
PopOver.propTypes = {
	classes: PropTypes.object.isRequired,
	onClose: PropTypes.func,
	selectedValue: PropTypes.string,
  };
export default withStyles(styles)(PopOver);

// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
	typography: {
		margin: theme.spacing.unit * 2,
	},
	closeButton: {
		textAlign: "right"
	}
})

class PopOver extends React.Component {

	handleClose = () => {
		this.props.onClose(this.props.selectedValue);
	  };
	

	render() {
		const { classes, child, onClose, selectedValue, ...other } = this.props;
		const Child = child;

		return (
			<Dialog className={classes.popover}
				onClose={this.handleClose} 
				aria-labelledby="simple-dialog-title"
				fullWidth
				maxWidth="md"
				scroll="body"
				{...other}
			>

				<DialogContent>
				<Grid
					container
					direction="row"
					justify="flex-end"
					alignItems="flex-start"
				>
					<Grid item>
					<IconButton className={classes.closeButton} color="inherit" onClick={this.handleClose} aria-label="Close">
						<CloseIcon />
					</IconButton>
					</Grid>
					<Child {...other}/>
				</Grid>
				</DialogContent>
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

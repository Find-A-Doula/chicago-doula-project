// Vendor
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'

const PopOver = ({ child, classes, onClose, selectedValue, ...rest }) => {
	const Child = child

	const handleClose = () => {
		onClose(selectedValue)
	}

	return (
		<Dialog
			onClose={handleClose}
			aria-labelledby="simple-dialog-title"
			fullWidth
			maxWidth="md"
			scroll="body"
			{...rest}
		>
			<DialogContent>
				<Grid
					container
					direction="row"
					justify="flex-end"
					alignItems="flex-start"
				>
					<Grid item>
						<IconButton className={classes.closeButton} color="inherit" onClick={handleClose} aria-label="Close">
							<CloseIcon />
						</IconButton>
					</Grid>
					<Child {...rest} onClose={handleClose}/>
				</Grid>
			</DialogContent>
		</Dialog>
	)
}

const styles = () => ({
	closeButton: {
		textAlign: 'right',
	},
})

PopOver.propTypes = {
	child: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired,
	onClose: PropTypes.func.isRequired,
	selectedValue: PropTypes.string.isRequired,
}

export default withStyles(styles)(PopOver)

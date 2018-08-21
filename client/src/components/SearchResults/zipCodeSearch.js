// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// Component
const styles = theme => ({
  root: {
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit * 3}px`
  },
  button: {
    textTransform: 'none',
    backgroundColor: '#eaeaea',
    backgroundImage: '-webkit-gradient(linear, left top, left bottom, from(#EAEAEA), to(#F9F9F9))',
    border: '1px solid #b1b9c3'
  },
  bootstrapRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3
    }
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    marginLeft: '20px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
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
      '"Segoe UI Symbol"'
    ].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
    }
  },
  bootstrapFormLabel: {
    fontSize: 18
  }
});

class ZipCodeSearch extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Button href="#" variant="contained" className={classes.button}>Zip Code</Button>
          <TextField
            defaultValue="Zip Code"
            id="zipCodeInput"
            InputProps={{
              disableUnderline: true,
              classes: {
                root: classes.bootstrapRoot,
                input: classes.bootstrapInput
              }
            }}
            InputLabelProps={{
              shrink: true,
              className: classes.bootstrapFormLabel
            }}
          />
        </Grid>
      </div>
    );
  }
}

ZipCodeSearch.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ZipCodeSearch);

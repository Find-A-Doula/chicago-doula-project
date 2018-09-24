// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    borderRadius: 4,
    margin: theme.spacing.unit,
    minWidth: 300,
    backgroundColor: '#eaeaea',
    backgroundImage: '-webkit-gradient(linear, left top, left bottom, from(#EAEAEA), to(#F9F9F9))',
    border: '1px solid #b1b9c3',
    textAlign: 'center'
  }
});

class FilterDropdown extends React.Component {
  state = {
    doulaType: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container direction="row" justify="center" alignItems="center">
          <form autoComplete="off">
            <FormControl className={classes.formControl}>
              <Select
                value={this.state.doulaType}
                onChange={this.handleChange}
                displayEmpty
                name="doulaType"
                className={classes.selectEmpty}
              >
                <MenuItem value="">Sort By Relevance</MenuItem>
              </Select>
            </FormControl>
          </form>
        </Grid>
      </div>
    );
  }
}

FilterDropdown.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FilterDropdown);

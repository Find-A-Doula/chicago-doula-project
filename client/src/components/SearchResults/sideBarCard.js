// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Local
import ZipCodeSearch from './zipCodeSearch.js';
import DoulaSelectDropdown from './doulaSelectDropdown.js';
import StepSlider from './stepSlider.js';
import SideBarList from './sideBarList.js';

// Component
const styles = theme => ({
  root: {
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit * 3}px`
  },
  paper: {
    margin: theme.spacing.unit * 5,
    padding: theme.spacing.unit * 2,
    boxShadow: "6px 6px 47px 3px rgba(200,195,200,1)",
  }
});

class SideBarCard extends React.Component {
  render() {
    const { classes } = this.props;

    // Return the component
    return (
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
                title="Preferred Price"
                sliderMin={0}
                sliderMax={6}
                sliderStep={1}
                sliderStartLabel="$"
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <SideBarList title="Focus Area" onChange={this.handleChange} />
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

SideBarCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SideBarCard);

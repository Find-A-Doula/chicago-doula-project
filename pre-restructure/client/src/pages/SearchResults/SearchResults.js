// Vendor
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Local
import ResultCard from "../../components/SearchResults/resultCard.js"
import SideBarCard from "../../components/SearchResults/sideBarCard.js"
import NavBar from '../../components/NavBar'
import FilterDropdown from '../../components/SearchResults/filterDropdown.js'
import preload from '../../data.json'

// Component
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  pageWrapper: {
    marginTop: '20px',
  },
  sideBarHeaderText: {
    textAlign: 'center',
    margin: 0
  },
  resultsAmount: {

  },
  resultsAmountSpan: {
    color: '#ffa692 !important',
  }
});

class SearchResults extends Component {

  render() {

    const { classes } = this.props

    return (
      <div className={classes.root}>
       <NavBar className={classes.navBar} currentPage="/results"/>
        <Grid container spacing={8} className={classes.pageWrapper}>
          <Grid item xs={12} md={5}>
            <div><h2 className={classes.sideBarHeaderText}>Refine Results</h2></div>
            <SideBarCard/>
          </Grid>
          <Grid item xs={12} md={7}>
            <Grid container>
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
                  <ResultCard doula={doula}/>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

SearchResults.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchResults);


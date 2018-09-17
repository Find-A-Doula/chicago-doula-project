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

// MOVE TO API
class SearchResults extends Component {
  state = {
    doulas: [
      {
        name: "Crystal L.",
        age: 26,
        location: "Chicago, IL",
        bio: "My name is Crystal, I am the product of a single mother so I understand how important child care can be to a parent. From watching my younger brother while my mother went to work to co-running a day camp where I was in charge of taking care of children from the ages of 4-8 I have always been passionate about providing exemplary child care. I love to read to/or with kids, play silly games and engage their interests because it brings them joy and that's the foundation of good child care. I am cautious of health concerns such as allergies and incredibly skilled with a first aid kit. I understand that a clean home is a happy home and I'll work to help you keep your space happy. I'm very good with pets of all kinds and do my best work under stress. Honesty is incredibly important to me especially where children are involved and it is something that you can expect from me at all times as well as responsibility and reliability.",
        lastSignIn: "Today",
        experience: [
          "6 years paid experience",
          "Will care for up to 4 or more children",
          "Available with short notice",
          "Will provide homework help",
          "References are available",
          "After school care availability",
          "Before school care availability",
          "Has special needs experience"
        ],
        image: "/images/crystal.png"
      },
      {
        name: "Lorena R.",
        age: 25,
        location: "Chicago, IL",
        bio: "My name is Lorena Reyes, I graduated from the University of Texas at San Antonio with a BA in Public Administration and a minor in Criminal Justice. I am CPR/AED certified through the Red Cross and am fluent in Spanish. I recently moved to Chicago with my fiancé and live downtown. I am energetic, I enjoy walks and sports as well as learning and enjoy liberal arts, especially if the child is passionate about any of those. I am reliable and responsible and would love to enjoy my time off with developing kids! I work a full time job for a federal agency and am babysitting in order to save up for my wedding. I previously had clients in Austin, TX and have prior experience caring for my nieces and nephews as well.",
        lastSignIn: "This week",
        experience: [
          "4 years paid experience",
          "Will care for up to 4 or more children",
          "Available with short notice",
          "Will provide homework help",
          "After school care availability",
          "Has infant care experience"
        ],
        image: "/images/lorena.png"
      }
    ]
  }

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
                {this.state.doulas.map(doula => (
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


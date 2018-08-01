// Vendor
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Row, Col } from 'react-flexbox-grid';

// Local
import './search-results.css';
import ResultCard from "../../components/resultCard.js"

// Component
const styles = theme => ({
  root: {
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit * 3}px`,
  },
  wrapper: {
    maxWidth: 400,
  },
  paper: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
  },
});

class SearchResults extends Component {
  state = {
    doulas: [
      {
        name: "Crystal L",
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
      }
    ]
  }

  render() {
    return (
      <div>
        {this.state.doulas.map(doula => (
          <ResultCard doula={doula}/>
        ))}

      </div>
    );
  }
}

SearchResults.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchResults);


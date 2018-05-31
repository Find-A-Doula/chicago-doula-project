import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Row, Col } from 'react-flexbox-grid';

import './search-results.css';

const styles = {};

class SearchResults extends Component {

  render() {
    return (
      <div>
        <Grid fluid>
          <Row>
            <Col lg={12}>
              <div id="nav"></div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={4}>
              <div id="sidebar"></div>
            </Col>
            <Col sm={12} md={8}>
              <div id="results">
                <div id="result-01"></div>
                <div id="result-02"></div>
                <div id="result-03"></div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

SearchResults.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchResults);


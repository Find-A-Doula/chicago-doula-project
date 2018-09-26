// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';

const styles = theme => ({
  root: {},
  title: {
    fontsize: '20px',
    fontWeight: 'bold',
    marginLeft: '20px'
  },
  sliderValue: {
    marginLeft: '10px'
  },
  slider: {
    maxWidth: '70%'
  },
  rule: {
    maxWidth: '90%',
    border: 0,
    height: 0,
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.3)'
  }
});

class StepSlider extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Typography className={classes.title} id="label">{this.props.title}</Typography>
            <hr className={classes.rule} />
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <Slider
            className={classes.slider}
            value={value}
            aria-labelledby="label"
            min={this.props.sliderMin}
            max={this.props.sliderMax}
            step={this.props.sliderStep}
            onChange={this.handleChange}
          />
          <Typography className={classes.sliderValue}>
            {this.props.sliderStartLabel}{this.state.value}{this.props.sliderEndLabel}
          </Typography>
        </Grid>
      </div>
    );
  }
}

StepSlider.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StepSlider);

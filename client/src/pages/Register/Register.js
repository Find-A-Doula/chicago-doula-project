// Vendor
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

// Local
import NavBar from '../../components/NavBar'

// Component
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  pageWrapper: {
    marginTop: '20px'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  container: {
    // display: 'flex',
    // flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class Register extends Component {
  state = {
    name: '',
    certified: false,
    notCertifiedButTrained: false,
    notTrained: false,
    value: ''
  }
  
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {

    const { classes } = this.props
    const { certified, notCertifiedButTrained, notTrained } = this.state;
    const error = Object.values(this.state).filter(v => v).length !== 1;
    return (
      <div className={classes.root}>
       <NavBar className={classes.navBar} currentPage="/register"/>
        <Grid container spacing={8} className={classes.pageWrapper} direction="row" justify="center" alignItems="center">
            <form className={classes.container} noValidate autoComplete="off">
            <Grid item xs={12}>
              <TextField
                id="name"
                label="Name"
                className={classes.textField}
                value={this.state.name}
                onChange={this.handleChange('name')}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="emailAddress"
                label="Email Address"
                className={classes.textField}
                value={this.state.name}
                onChange={this.handleChange('name')}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="phoneNumber"
                label="Phone Number"
                className={classes.textField}
                value={this.state.name}
                onChange={this.handleChange('name')}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Are you certified?</FormLabel>
                  <RadioGroup
                    aria-label="Certification"
                    name="certification"
                    className={classes.group}
                    value={this.state.value}
                    onChange={this.handleChange}
                  >
                  <FormControlLabel value="certified" control={<Radio />} label="yes" />
                  <FormControlLabel value="notCertifiedButTrained" control={<Radio />} label="no, but I have completed doula training" />
                  <FormControlLabel value="notTrained" control={<Radio />} label="no" />
                  </RadioGroup>
              </FormControl>
            </Grid>
            </form>
        </Grid>
      </div>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Register);


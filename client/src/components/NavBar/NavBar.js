import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1
  },
  navBar: {
    backgroundColor: 'var(--lowlight)'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
           <Link to="/home">
            <img href="/" src="/images/CDP_LOGO_BLUE.png" alt="logo" height="50" width="100" />
            </Link>
          </Typography>

          <Button href="/learn" color="inherit">What is a Doula</Button>
          <Button href="/search" color="inherit">Search</Button>
          <Button href="/comingsoon" color="inherit">Register</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);

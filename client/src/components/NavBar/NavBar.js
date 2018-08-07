import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

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
  },
  menuItem:{
    textDecoration: 'none'
  },
  bigScreenNav: {
    display: 'block',
    '@media screen and (max-width: 601px)': {
      display: 'none',
    }
  },
  smallScreenNav: {
    display: 'none',
    textDecoration: 'none',
    '@media screen and (max-width: 600px)': {
      display: 'block',
    }
  }
};

 // max - width less than or equal to

class ButtonAppBar extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        
        <AppBar position="static" className={classes.navBar}>
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              <Link to="/home">
                <img href="/" src="/images/CDP_LOGO_BLUE.png" alt="logo" height="50" width="100" />
              </Link>
            </Typography>

            <div className = {classes.bigScreenNav}>
              <Button href="/learn" color="inherit">
                What is a Doula
              </Button>
              <Button href="/comingsoon" color="inherit">
                Search
              </Button>
              <Button href="/comingsoon" color="inherit">
                Register
              </Button>
            </div>

            <div className = {classes.smallScreenNav} >
              <IconButton style={styles.menuButton} 
                aria-owns={anchorEl ? 'simple-menu' : null}
                aria-haspopup="true"
                onClick={this.handleClick}
              >
              <MenuIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}><a href="/learn" className = {classes.menuItem} color="inherit"> What is a Doula</a></MenuItem>
                <MenuItem onClick={this.handleClose}><a href="/search" className = {classes.menuItem} color="inherit">Search </a></MenuItem>
                <MenuItem onClick={this.handleClose}><a href="/comingsoon" className = {classes.menuItem} color="inherit">Register </a></MenuItem>
              </Menu>
            </div>

      
          </Toolbar>


        </AppBar>

        
      </div>

    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);

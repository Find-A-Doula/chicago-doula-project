// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import { createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';

// Component
const styles = theme => ({
  root: {
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit * 3}px`,
  },
  wrapper: {
    maxWidth: 1000
  },
  paper: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
    marginLeft: 300
  },
  name: {
    marginBottom: 12,
    fontSize: 24
  },
  bulletSection: {
    // display: 'inline-block',
    // float: 'left',
    margin: '2px 2px',
    columnCount: 2
  }, 
  image: {
    margin: '6px',
    padding: '20px',
    boxShadow: '1px 1px 1px 1px #000',
  },
  hr: {
    borderTop: "1px dashed #000"
  },
  subheadline: {
    fontWeight: "bolder",
    display: "inline-block",
    paddingRight: '20px',
    paddingTop: '0'
  },
  more: {
    paddingLeft: '20px',
    textDecoration: 'none'
  },
  lastSignIn: {
    fontWeight: "bolder",
    display: "inline-block",
    padding: '10px 0'   
  }
});

const MAX_LENGTH = 250;

class ResultCard extends React.Component {

  render() {

    const { classes, doula, theme } = this.props

    // Return the component
    return (
        <div className={classes.root}>
        <div className={classes.wrapper}>
            <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={16}>
                <Grid item>
                    <img className={classes.image} src={doula.image}/>
                </Grid>
                <Grid item xs>
                    <Typography className={classes.name} color="cyan">{doula.name}</Typography>
                    <hr className={classes.hr}/>
                    <Typography className={classes.subheadline}>Age: {doula.age}</Typography>
                    <Typography className={classes.subheadline}>{doula.location}</Typography>
                    <hr className={classes.hr}/>
                    {doula.bio.length > MAX_LENGTH ? (
                        <Typography className={classes.bio}>
                            {`${doula.bio.substring(0, MAX_LENGTH)}...`}<a className={classes.more} href="#">More</a>
                        </Typography>
                    ) :
                        <Typography className={classes.bio}>{doula.bio}</Typography>
                    }
                    <Typography className={classes.lastSignIn}>Last signed in: {doula.lastSignIn}</Typography>
                    <div className={classes.bulletSection}>
                    {doula.experience.map(experience => (
                        <Typography className={classes.bullet}>• {experience}</Typography>
                    ))}
                    </div>
                </Grid>
            </Grid>
            </Paper>
        </div>
        </div>
    )
  }

}

ResultCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ResultCard)
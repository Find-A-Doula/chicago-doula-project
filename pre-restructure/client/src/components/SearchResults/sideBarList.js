// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  title: {
    fontsize: '20px',
    fontWeight: 'bold',
    marginLeft: '20px'
  },
  rule: {
    maxWidth: '90%',
    border: 0,
    height: 0,
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.3)'
  },
  listItem: {
    padding: 0,
    height: 30
  },
  listItemText: {
    padding: 0
  },
  listItemCheckbox: {
    // backgroundColor: 'blue',
  },
  focusAreaListWrapper: {
    marginLeft: 30
  },
  focusAreaList: {
    padding: 0
  }
});

const doulaSkills = [
  'VBAC',
  'Multiples',
  'Premature',
  'Nursing',
  'High Risk',
  'LGBTQ',
  'Teens',
  'Single Parent',
  'Trama Informed',
  'Families of Color',
  'Adoption',
  'People with Disabilities',
  'Waterbirth',
  'Homebirth',
  'Advocacy in Hospital',
  'Prenatal Yoga'
];

class SideBarList extends React.Component {
  state = {
    checked: [0]
  };

  handleToggle = value =>
    () => {
      const { checked } = this.state;
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      this.setState({
        checked: newChecked
      });
    };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Typography className={classes.title} id="label">{this.props.title}</Typography>
            <hr className={classes.rule} />
          </Grid>
        </Grid>
        <Grid container className={classes.focusAreaListWrapper}>
          {doulaSkills.map((value, index) => (
            <Grid item xs={6}>
              <List className={classes.focusAreaList}>
                <ListItem
                  key={value}
                  role={undefined}
                  dense={true}
                  button
                  onClick={this.handleToggle(value)}
                  className={classes.listItem}
                >
                  <Checkbox
                    checked={this.state.checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple={true}
                    className={classes.listItemCheckbox}
                    // checkedIcon={null}  // Need to find a new icon
                  />
                  <ListItemText primary={value} className={classes.listItemText} />
                </ListItem>
              </List>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

SideBarList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SideBarList);

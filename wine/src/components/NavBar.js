import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function FlatButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button className={classes.button}>Sign Up</Button>
      <Button className={classes.button}>Login</Button>
      <Button className={classes.button}>Home</Button>
    </div>
  );
}

FlatButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FlatButtons);
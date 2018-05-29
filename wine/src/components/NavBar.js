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
    <div className="nav-bar" >
      <Button className={classes.button} onClick={props.home}>Home</Button>
      <Button className={classes.button} onClick={props.form}>Journal</Button>
      <Button className={classes.button} onClick={props.form}>Raitings</Button>
    </div>
  );
}

FlatButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FlatButtons);
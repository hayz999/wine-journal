import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
})


function FlatButtons(props) { 

  const { classes } = props
  return (
    <div className="nav-bar header2" id="myHeader" >
      <Link to="/"><Button className={classes.button}>Home</Button></Link>
      <Link to="/form"><Button className={classes.button}>New Submission</Button></Link>
      <Link to="/journal"><Button className={classes.button}>Journal</Button></Link>
      <Link to="/ratingChart"><Button className={classes.button}>Ratings</Button></Link>
    </div>
  )
}

FlatButtons.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(FlatButtons)
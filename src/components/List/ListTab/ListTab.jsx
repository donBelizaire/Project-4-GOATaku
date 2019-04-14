import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

function ListTab(props) {

  // const handler = props.handleSubmit ? 
  // props.handleSubmit : props.handleUpdate

  const { classes } = props;
  console.log(props.value)  
  return (
    
    <div className={classes.root}>
    {
      props.top5.map((pick) => (
    <form onSubmit= {() => props.handleRemove(pick.id)}>
      <ExpansionPanel defaultExpanded key={pick.id}>
       <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.column}>
            <Typography className={classes.heading} value="Title/Img">{pick.name}</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading} value="Anime Summary" >Anime Summary</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Anime Reveiw Avalible</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column} ><img src={pick.image} alt="img"/></div>
          <div className={classes.column} >{pick.synopsis}</div>
          <div className={classNames(classes.column, classes.helper)}>
            <Typography variant="caption">3
            {props.value} 
              <br />
              <textarea type="text" name='text' value={props.text} onChange={props.handleChange} />
            </Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small" type="submit" onClick={props.handlePrepareUpdate}>Submit/Update Reveiw</Button>
          <button size="small" type="submit" onClick={props.handleRemove}>Remove from Top5</button>
          <Button size="small" color="primary" onClick={props.handleSubmit}>Save</Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </form>
    ))
  }
    </div>
  );
}

ListTab.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListTab);



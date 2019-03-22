import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Paper from "@material-ui/core/Paper";
import { fetch } from "../../functions/fetcher";

const styles = theme => ({
  paperContent: {
    margin: 10,
    padding: 10
  },
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

const Dashboard = props => {
  const { classes } = props;
  const niodInstructions = fetch("/api/functions", {}, true);
  return (
    <Paper className={classes.paperContent}>
      {niodInstructions.map(niodInstruction => (
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              {niodInstruction.data.name}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Detection :
              <ul>
                <li>
                  Prefixes
                  <ul>
                    {niodInstruction.data.detection.prefixes.reduce(
                      prefix => `<li>${prefix}</li>`
                    )}
                  </ul>
                </li>
                <li>Range : {niodInstruction.data.detection.range} m</li>
              </ul>
              Border group name : {niodInstruction.data.border.name}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </Paper>
  );
};

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);

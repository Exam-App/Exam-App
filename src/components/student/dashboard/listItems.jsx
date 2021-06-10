import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AssignmentIcon from "@material-ui/icons/Assignment";
import BallotIcon from "@material-ui/icons/Ballot";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <BallotIcon />
      </ListItemIcon>
      <ListItemText primary="Quiz" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Comprehensive" />
    </ListItem>
  </div>
);

import { Box, makeStyles } from "@material-ui/core";
import Registration from "../../student/Registration";
import React from "react";

const useStyles = makeStyles((theme) => ({
  // Load app bar information from the theme
}));

export default function FacultyTab() {
  const classes = useStyles();



  return (
    <Box className={classes.toolbar} width="45%" height="10%">
      <div>
        <Registration />
      </div>
    </Box>
  );
}

import { Box, makeStyles } from "@material-ui/core";
import Registration from "../../student/Registration";
import React from "react";

const useStyles = makeStyles((theme) => ({
  // Load app bar information from the theme
}));

export default function FacultyTab() {
  const classes = useStyles();



  return (
    <Box width="40%">
      <div>
        <Registration />
      </div>
    </Box>
  );
}

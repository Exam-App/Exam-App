import { Button, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import "./404.css";

export default function Error404() {
  let history = useHistory();

  const goToPreviousPath = () => {
    history.goBack();
  };

  return (
    <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
          <h1>404</h1>
        </div>
        <h2>Oops! This Page Could Not Be Found</h2>
        <h3>It looks like one of the developers fell asleep</h3>
        <p>
          Sorry but the page you are looking for does not exist, have been
          removed. name changed or is temporarily unavailable
          <br />
        </p>
        <Button
          onClick={goToPreviousPath}
          style={{
            background: "#5c91fe",
            padding: "10px 40px",
            marginTop: "15px",
          }}
        >
          <Typography style={{color: "whitesmoke"}}>Go Back</Typography>
        </Button>
      </div>
    </div>
  );
}

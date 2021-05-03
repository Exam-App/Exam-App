import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  pos:{
    textAlign:'center',
  },
}));


function App() {
  const classes = useStyles();
  <Grid
  container
  spacing={0}
  direction="row"
  alignItems="center"
  justify="center"
  display="flex"
  style={{ minHeight: '100vh' }}
 />
  return (
    <div>
      <div>
    <AppBar position="fixed">
  <Toolbar>
    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton> */}
    <Typography variant="h6" className={classes.title}>
      Exam App
    </Typography>
    <Button color="inherit">Login</Button>
    <Button color="inherit">SignUp</Button>
  </Toolbar>
</AppBar>
</div>
<br>
</br>
<br>
</br>
<br>
</br>
<br></br>

<div className={classes.root}>


  
<Card
        style={{
          width: 1000,
          margin:"auto",
          
          backgroundColor: "light grey",
        }}
      >
<CardContent>
          
          <Typography variant="body2" component="p" className={classes.pos}>
            <h3 >Instructions:</h3>
          </Typography>
          <Typography variant="body1" component="p">
            <p>Dear Candidate<br></br>1.You are taking this exam from your residence or any convinient location.<br></br>2. You are required to ensure that the following conditions are adhered to before sitting for the test</p>
          </Typography>
          <Typography variant="body1" component="p">

            

          </Typography>
        </CardContent>
        </Card>
    </div>
</div>


  
        
     
  );
}

export default App;

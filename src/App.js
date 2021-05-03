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
    {/* <Button color="inherit">Login</Button>
    <Button color="inherit">SignUp</Button> */}
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
            <h1 >Instructions</h1>
          </Typography>
          <Typography variant="body1" component="p">
            <p>Dear Candidate<br></br>1.You are taking this exam from your residence or any convinient location.<br></br>2. You are required to ensure that the following conditions are adhered to before sitting for the test</p>
            <h3>Do's and Don'ts</h3>
            <p><b>Do's:</b><br></br>1.Ensure that your computer has the following specifications<br></br>
            <ul>
              <li>Computer-Pentium IV/Dual core,1GB RAM or higher,</li>
              <li>80GB HDD or higher</li>
              <li>15' colour Monitor,keyboard and mouse</li>
              <li>Microsoft Windows 10 and Antivirus</li>
              <li>Webcam and microphone</li>
              <li>Internet connection of atleast 1MBPS</li>
            </ul></p>
            <p>2.Place the computer so that your back is facing the wall and there are no devices placed in the background</p>
            <p>3.The room where you sit should be isolated and only you need to be present for complete examduration</p>
            <p>4.Sit at table with computer.Keep the desk clear of objects,papers books and any other electronic material like mobiles</p>
            <p>5.Ensure proper lighting so that your face is clearly visible to the camera</p>
            <p>6.Ensure your dressed formally</p><br></br>
            <p><b>Don'ts:</b><br></br></p>
            <p>1.Do not take help from others</p>
            <p>2.Do not wear any bluetooth devices</p>
            <p>3.Do not read out anything loudly</p>
            <p>4.Do not leave the work station while taking the test</p>
            <p>5.Do not let anyone in the room and avoid background noise</p><br></br>
            <Button color="inherit">SignUp</Button>
            
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

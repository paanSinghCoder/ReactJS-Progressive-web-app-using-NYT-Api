import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  aStyle: {
    textDecoration: 'none',
    color: 'white'
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <span role='img' aria-label='logo'>📰</span>
          </Typography>
          <a href='https://github.com/gaurav3017/ReactJS-Progressive-web-app-using-NYT-Api' className={classes.aStyle} target='_blank' rel="noopener noreferrer">
              {/* <span role='img' aria-label='github'>🍴</span> */}
              Github            
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
}
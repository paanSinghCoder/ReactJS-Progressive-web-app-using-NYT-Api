import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Home from '../home/Home';
import Posts from '../posts/Posts';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <BrowserRouter>
    <div className={classes.root}>
      
        <AppBar position="sticky" color="default">
          <Route
            path='/'
            render={({ location }) => (
              <>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="on"
                  >
                  <Tab label="🏠Home" component={Link} to="/" />
                  <Tab label="🔬Science" component={Link} to="/section/science" />
                  <Tab label="💻Technology" component={Link} to="/section/technology" />
                  <Tab label="🤑Business" component={Link} to="/section/business" />
                  <Tab label="🌏World" component={Link} to="/section/world" />
                  <Tab label="📽️Movies" component={Link} to="/section/movies" />
                  <Tab label="✈️Travel" component={Link} to="/section/travel" />
                </Tabs>
              </>
            )}
            />
        </AppBar>
        {value === 0 && <TabContainer><Home /></TabContainer>}
        {value === 1 && <TabContainer><Posts token='science' /></TabContainer>}
        {value === 2 && <TabContainer><Posts token='technology' /></TabContainer>}
        {value === 3 && <TabContainer><Posts token='business' /></TabContainer>}
        {value === 4 && <TabContainer><Posts token='world' /></TabContainer>}
        {value === 5 && <TabContainer><Posts token='movies' /></TabContainer>}
        {value === 6 && <TabContainer><Posts token='travel' /></TabContainer>}
        {/* <Switch>
          {value === 0 && <TabContainer><Route path="/" render={() => <Home />} /></TabContainer>}
          {value === 1 && <TabContainer><Route path="/section/science" render={() => <Posts token='science' />} /></TabContainer>}
          {value === 2 && <TabContainer><Route path="/section/technology" render={() => <Posts token='technology' />} /></TabContainer>}
          {value === 3 && <TabContainer> <Route path="/section/business" render={() => <Posts token='business' />} /></TabContainer>}
          {value === 4 && <TabContainer><Route path="/section/world" render={() => <Posts token='world' />} /></TabContainer>}
          {value === 5 && <TabContainer><Route path="/section/movies" render={() => <Posts token='movies' />} /></TabContainer>}
          {value === 6 && <TabContainer><Route path="/section/travel" render={() => <Posts token='travel' />} /></TabContainer>}
        </Switch> */}
        
        
        
        
    </div>
    </BrowserRouter>
  );
}
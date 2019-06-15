
import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import './App.css';

import { connect } from 'react-redux';
import Messages from './Messages/Messages';
import MetaPanel from './MetaPanel/MetaPanel';
import SidePanel from './SidePanel/SidePanel';

const TabContainer = ({ children, dir }) => {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
  },
}));

const FullWidthTabs = ({ currentUser, currentChannel, isPrivateChannel, userPosts }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary" elevation={24} className="nav">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          variant="fullWidth"
        >
          <Tab label="Console" />
          <Tab label="Chat" />
          <Tab label="About" />
        </Tabs>
      </AppBar>

      
        <SwipeableViews 
          className="main"
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <SidePanel
              onChangeIndex={handleChangeIndex}
              key={currentUser && currentUser.id}
              currentUser={currentUser}
              primaryColor="#673ab7"
            />  
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Messages 
              key={currentChannel && currentChannel.id}
              currentChannel={currentChannel}
              currentUser={currentUser}
              isPrivateChannel={isPrivateChannel}
            />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <MetaPanel 
              key={currentChannel && currentChannel.id}
              userPosts={userPosts}
              isPrivateChannel={isPrivateChannel}
              currentChannel={currentChannel}
            />
          </TabContainer>
        </SwipeableViews>
      </div>
  );
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  currentChannel: state.channel.currentChannel,
  isPrivateChannel: state.channel.isPrivateChannel,
  userPosts: state.channel.userPosts,
  primaryColor: state.colors.primaryColor,
  secondaryColor: state.colors.secondaryColor
});

export default connect(mapStateToProps)(FullWidthTabs);



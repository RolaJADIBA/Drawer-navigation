import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Dimensions} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {ProfileScreen, MessageScreen, ActivityScreen, ListScreen, ReportScreen, StaticScreen, SignOutScreen} from './screens';

import SideBar from './components/SideBar';

const DrawerNavigator = createDrawerNavigator({
  ProfileScreen:{
    screen: ProfileScreen,
    navigationOptions:{
      title: "Activity",
      drawerIcon: ({ tinColor }) => <Feather name="user" size={16} color={tinColor} />
    }
  },
   MessageScreen:{
    screen: MessageScreen,
    navigationOptions:{
      title: "Message",
      drawerIcon: ({ tinColor }) => <Feather name="message-square" size={16} color={tinColor} />
    }
   }, 
   ActivityScreen:{
    screen: ActivityScreen,
    navigationOptions:{
      title: "Activities",
      drawerIcon: ({ tinColor }) => <Feather name="activity" size={16} color={tinColor} />
    }
   }, 
   ListScreen:{
    screen: ListScreen,
    navigationOptions:{
      title: "Lists",
      drawerIcon: ({ tinColor }) => <Feather name="list" size={16} color={tinColor} />
    }
   }, 
   ReportScreen:{
    screen: ReportScreen,
    navigationOptions:{
      title: "Reports",
      drawerIcon: ({ tinColor }) => <Feather name="bar-chart" size={16} color={tinColor} />
    }
   }, 
   StaticScreen:{
    screen: StaticScreen,
    navigationOptions:{
      title: "Statics",
      drawerIcon: ({ tinColor }) => <Feather name="trending-up" size={16} color={tinColor} />
    }
   }, 
   SignOutScreen:{
    screen: SignOutScreen,
    navigationOptions:{
      title: "SigneOut",
      drawerIcon: ({ tinColor }) => <Feather name="log-out" size={16} color={tinColor} />
    }
   }
  },
  {
      contentComponent: props => <SideBar {...props} />,

      drawerWidth: Dimensions.get("window").width* 0.85,

      hideStatusBar: true,

      contentOptions: {
        activeBackgroundColor: "#rgba(212, 118, 207, 0.2)",
        activeTineColor: "#531158",
        itemContainerStyle: {
          marginTop: 16,
          marginHorizontal: 8
        },
        itemStyle: {
          borderRadius: 4
        } 
      }

  }
);

export default createAppContainer(DrawerNavigator);
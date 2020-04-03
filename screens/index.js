import React from 'react';
import Screen from './screen';

export const ProfileScreen = ({navigation}) => <Screen navigation={navigation} name="profile" />  
export const MessageScreen = ({navigation}) => <Screen navigation={navigation} name="Message" /> 
export const ActivityScreen = ({navigation}) => <Screen navigation={navigation} name="Activity" /> 
export const ListScreen = ({navigation}) => <Screen navigation={navigation} name="List" />  
export const ReportScreen = ({navigation}) => <Screen navigation={navigation} name="Report" />  
export const StaticScreen = ({navigation}) => <Screen navigation={navigation} name="Static" />  
export const SignOutScreen = ({navigation}) => <Screen navigation={navigation} name="SignOut" />  
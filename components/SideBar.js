import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
// import {DrawerView} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
// import DrawerNavigator from 'react-navigation-drawer/lib/typescript/src/navigators/createDrawerNavigator';

const Sidebar = props => {
    return(
    <ScrollView>
        <ImageBackground 
          source={require('../assets/fond.jpg')}
          style={{ width: undefined, padding: 16, paddingTop: 48 }}
        >
            <Image source={require('../assets/portait.jpg')} style={styles.profile}/>
            <Text style={styles.name}>Rola Jadiba</Text>

            <View style={{ flexDirection: "row"}}>
                <Text style={styles.followers}>743 Followers</Text>
                <Ionicons name="md-people" size={16} color="rgba(255,255,255,0.8)"/>
            </View>
        </ImageBackground>

        <View style={styles.container}>
            <DrawerNavigatorItems {...props} />
        </View>

   </ScrollView>
    );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: "#fff"
    },
    name:{
        color: "#fff",
        fontSize: 20,
        fontWeight: "800",
        marginVertical: 8
    },
    followers:{
        color: "rgba(255,255,255,0.8)",
        fontSize: 13,
        marginRight: 4
    }
});

export default Sidebar;
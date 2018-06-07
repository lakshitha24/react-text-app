import React from 'react';
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';
import {Platform} from 'react-native';

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import NewContact from '../screens/NewContact';
import Location from '../screens/Location';
import Me from '../screens/Me';
import {capitalizeFirstLetter} from '../helpers/string';
import {DrawerButton} from '../components/Header';

const LeftDrawerButton =({navigation}) =>{
    if(Platform.OS  === 'android'){
        return <DrawerButton onPress={() => navigation.toggleDrawer()}/>
    }
    return null;
}

export const ContactsSatck = StackNavigator({
    Contacts: {
        screen: Contacts,
        navigationOptions:(props) => ({
            title: 'Contact',
            headerLeft:<LeftDrawerButton {...props}/>,
        }),
    },
    Details: {
        screen: Details,
        // navigationOptions:{
        //     title:'Details'
        // }
        navigationOptions: ({navigation}) => ({
            title: `${capitalizeFirstLetter(navigation.state.params.name.first)} ${capitalizeFirstLetter(navigation.state.params.name.last)}`,
        }),
    }
});

export const NewContactStack = StackNavigator({
    NewContact: {
        screen: NewContact,
        navigationOptions:(props) => ({
            title: 'New Contact',
            headerLeft:<LeftDrawerButton {...props}/>,
        }),
    }
});

export const MeStack = StackNavigator({
    Me: {
        screen: Me,
        navigationOptions:(props) => ({
            title: 'Me',
            headerLeft: <LeftDrawerButton {...props}/>,
        }),
    },
});
export  const LocationStack =StackNavigator({
    Location:{
       screen:Location,
        navigationOptions:(props)=>({
          title:'Location',
          headerLeft:<LeftDrawerButton{...props}/>
        })
   }
});

export const Tabs = TabNavigator({
    Contacts: {
        screen: ContactsSatck,
        navigationOptions: {
            tabBarLabel: 'Contact',
            tabBarIcon: ({tintColor}) => <Icon name='ios-list' size={35} color={tintColor}/>
        }
    },
    NewContact: {
        screen: NewContactStack,
        navigationOptions: {
            tabBarLabel: 'New Contact',
            tabBarIcon: ({tintColor}) => <Icon name='ios-list' size={35} color={tintColor}/>
        }
    },
    Me: {
        screen: MeStack,
        navigationOptions: {
            tabBarLabel: 'Me',
            tabBarIcon: ({tintColor}) => <Icon name='ios-list' size={35} color={tintColor}/>
        }
    },
});


export const Drawer = DrawerNavigator({
    Contacts: {
        screen: ContactsSatck,
        navigationOptions: {
            drawerLabel: 'Contacts',
        }
    },
    NewContact: {
        screen: NewContactStack,
        navigationOptions: {
            drawerLabel: 'New Contact'
        }
    },
    Me: {
        screen: MeStack,
        navigationOptions: {
            drawerLabel: 'Me'
        }
    },
    Location:{
        screen:LocationStack,
        navigationOptions:{
            drawerLabel:'Location'
        }

    },
})
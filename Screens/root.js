import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Ecran1 from './screen1';
import Ecran2 from './screen2';

const disc = createStackNavigator( {
  Discussions: {
    screen: Ecran1,
  },
});

const speech = createStackNavigator( {
  Discussions: {
    screen: Ecran2,
  },
});

const TabScreens = createBottomTabNavigator(
    {
        Screen1: {
            screen: disc,
            navigationOptions: () => ({
              tabBarIcon: ( { focused, horizontal, tintColor } ) => (
                <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center',}}>
                  <Image source={focused ? require( '../speech_active.png' ):require( '../speech_inactive.png' )} style={{ height: 25, width: 25 }} />
                  {/* {focused ? <Text style={{color:'gray'}}>Feeds</Text>:<Text style={{display:'none'}}></Text>} */}
                </View>
              ),
            } ),
            
          },
          Screen2:  {
            screen: speech,
            navigationOptions: () => ( {
              tabBarIcon: ( { focused, horizontal, tintColor } ) => (
                <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center',}}>
                  <Image source={focused ? require( '../group_active.png' ):require( '../group_inactive.png' )} style={{ height: 25, width: 25 }} />
                  {/* {focused ? <Text style={{color:'gray'}}> Friends</Text>:<Text style={{display:'none'}}></Text>} */}
                </View>
              )
            })
          },
      
    },
    {
      initialRouteName: 'Screen1',
      tabBarOptions: {
        showLabel: false,
      },
    }
  );

  export const ROUTES = createAppContainer(TabScreens);
import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SportsSelectionScreen from './screens/SportsSelectionScreen/SportsSelectionScreen';
import UpcomingEventsScreen from './screens/UpcomingEventsScreen/UpcomingEventsScreen';
import {darkBackground} from './consts/theme';
import EventScreen from './screens/EventScreen/EventScreen';
import {UpcomingEvent} from './consts/UpcomingEvent';

export type RootStackParamList = {
  SportsSelectionScreen: undefined;
  UpcomingEventsScreen: undefined;
  EventScreen: {event: UpcomingEvent};
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.view}>
        <Stack.Navigator
          initialRouteName="SportsSelectionScreen"
          headerMode="none">
          <Stack.Screen
            name="SportsSelectionScreen"
            component={SportsSelectionScreen}
          />
          <Stack.Screen
            name="UpcomingEventsScreen"
            component={UpcomingEventsScreen}
          />
          <Stack.Screen name="EventScreen" component={EventScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: darkBackground,
  },
});

export default App;

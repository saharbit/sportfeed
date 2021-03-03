import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {darkBackground} from './theme';
import {createStackNavigator} from '@react-navigation/stack';
import SportsSelectionScreen from './components/SportsSelectionScreen';
import UpcomingEventsScreen from './components/UpcomingEventsScreen';

export type RootStackParamList = {
  SportsSelectionScreen: undefined;
  UpcomingEventsScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <>
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
          </Stack.Navigator>
        </SafeAreaView>
      </>
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

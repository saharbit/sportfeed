import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SportsSelectionScreen from './screens/SportsSelectionScreen/SportsSelectionScreen';
import FeedScreen from './screens/FeedScreen/FeedScreen';
import {darkBackground} from './consts/theme';
import {StoreProvider} from 'easy-peasy';
import store from './store';

export type RootStackParamList = {
  SportsSelectionScreen: undefined;
  FeedScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <StoreProvider store={store}>
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
            <Stack.Screen name="FeedScreen" component={FeedScreen} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </StoreProvider>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: darkBackground,
  },
});

export default App;

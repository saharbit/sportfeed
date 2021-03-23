import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SportsSelectionScreen from './screens/SportsSelectionScreen/SportsSelectionScreen';
import FeedScreen from './screens/FeedScreen/FeedScreen';
import {darkBackground} from './consts/theme';
import {StoreProvider} from 'easy-peasy';
import store from './store';
import TweetsScreen from './screens/TweetsScreen/TweetsScreen';
import PodcastsScreen from './screens/PodcastsScreen/PodcastsScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SELECTED_SPORTS} from './consts/asyncStorage';
import MyText from './components/MyText';

export type RootStackParamList = {
  SportsSelectionScreen: undefined;
  FeedScreen: undefined;
  TweetsScreen: undefined;
  PodcastsScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userSports, setUserSports] = useState<string[]>([]);

  useEffect(() => {
    const checkForSelectedSports = async () => {
      const sports = await AsyncStorage.getItem(SELECTED_SPORTS);
      if (sports) {
        setUserSports(JSON.parse(sports));
      }
      setIsLoading(false);
    };

    checkForSelectedSports();
  }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <MyText style={{color: 'black'}}>My splash</MyText>
      </View>
    );
  }

  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.view}>
          <Stack.Navigator headerMode="none">
            {userSports.length === 0 ? (
              <Stack.Screen name="SportsSelectionScreen">
                {(props) => (
                  <SportsSelectionScreen
                    {...props}
                    setUserSports={setUserSports}
                  />
                )}
              </Stack.Screen>
            ) : (
              <>
                <Stack.Screen name="FeedScreen" component={FeedScreen} />
                <Stack.Screen name="TweetsScreen" component={TweetsScreen} />
                <Stack.Screen
                  name="PodcastsScreen"
                  component={PodcastsScreen}
                />
              </>
            )}
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

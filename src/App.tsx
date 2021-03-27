import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SportsSelectionScreen from './screens/SportsSelectionScreen/SportsSelectionScreen';
import FeedScreen from './screens/FeedScreen/FeedScreen';
import {blue, darkBackground, lessDarkBackground} from './consts/theme';
import {StoreProvider} from 'easy-peasy';
import store from './store';
import PodcastsScreen from './screens/PodcastsScreen/PodcastsScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SELECTED_SPORTS} from './consts/asyncStorage';
import MyText from './components/MyText';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScoresScreen from './screens/ScoresScreen/ScoresScreen';
import HighlightsScreen from './screens/HighlightsScreen/HighlightsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TweetsScreen from './screens/TweetsScreen/TweetsScreen';

export type RootStackParamList = {
  SportsSelectionScreen: undefined;
  FeedScreen: undefined;
  TweetsScreen: undefined;
  PodcastsScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

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
          {userSports.length === 0 ? (
            <Stack.Navigator headerMode="none">
              <Stack.Screen name="SportsSelectionScreen">
                {(props) => (
                  <SportsSelectionScreen
                    {...props}
                    setUserSports={setUserSports}
                  />
                )}
              </Stack.Screen>
            </Stack.Navigator>
          ) : (
            <Tab.Navigator
              screenOptions={({route}) => ({
                tabBarIcon: ({color, size}) => {
                  if (route.name === 'Scores') {
                    return (
                      <MaterialCommunityIcons
                        name={'scoreboard'}
                        size={size}
                        color={color}
                      />
                    );
                  } else if (route.name === 'Podcasts') {
                    return (
                      <Fontisto name={'podcast'} size={size} color={color} />
                    );
                  } else if (route.name === 'Feed') {
                    return (
                      <FontAwesome name={'feed'} size={size} color={color} />
                    );
                  } else if (route.name === 'Highlights') {
                    return (
                      <FontAwesome
                        name={'video-camera'}
                        size={size}
                        color={color}
                      />
                    );
                  }
                },
              })}
              tabBarOptions={{
                activeTintColor: blue,
                inactiveTintColor: 'gray',
                inactiveBackgroundColor: darkBackground,
                activeBackgroundColor: darkBackground,
              }}>
              <Tab.Screen name="Feed" component={TweetsScreen} />
              <Tab.Screen name="Podcasts" component={PodcastsScreen} />
              <Tab.Screen name="Scores" component={ScoresScreen} />
              <Tab.Screen name="Highlights" component={HighlightsScreen} />
            </Tab.Navigator>
          )}
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

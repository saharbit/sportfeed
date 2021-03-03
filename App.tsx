import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {blueButtonBackground, darkBackground} from './src/theme';
import MyText from './src/components/MyText';
import SportsSelection from './src/components/SportsSelection';

const App = () => {
  const [selectedSports, setSelectedSports] = useState([]);

  return (
    <NavigationContainer>
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.scrollView}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <MyText style={styles.header}>Select your favourite sports</MyText>
            <SportsSelection />
            <TouchableOpacity style={styles.letsGoButton}>
              <MyText style={styles.letsGoButtonText}>Let's go</MyText>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: darkBackground,
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  letsGoButton: {
    backgroundColor: blueButtonBackground,
    paddingVertical: 20,
    paddingHorizontal: 75,
    alignItems: 'center',
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  letsGoButtonText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default App;

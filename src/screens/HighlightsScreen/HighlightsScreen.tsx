import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {darkBackground} from '../../consts/theme';
import {useStoreActions, useStoreState} from '../../store';
import SingleHighlight from '../../components/SingleHighlight';

const HighlightsScreen = () => {
  const {highlights} = useStoreState((state) => state);
  const {fetchHighlights} = useStoreActions((actions) => actions);

  useEffect(() => {
    fetchHighlights();
  }, [fetchHighlights]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {highlights.map((highlight, index) => (
          <SingleHighlight key={`highlight_${index}`} highlight={highlight} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 20,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  container: {
    backgroundColor: darkBackground,
    flex: 1,
    paddingHorizontal: 15,
  },
});

export default HighlightsScreen;

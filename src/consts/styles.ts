import {lessDarkBackground} from './theme';
import {StyleSheet} from 'react-native';

const commonStyles = StyleSheet.create({
  feedHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    marginVertical: 20,
    backgroundColor: lessDarkBackground,
    padding: 10,
    borderRadius: 25,
  },
  feedHeader: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default commonStyles;

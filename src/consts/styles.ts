import {lessDarkBackground} from './theme';
import {StyleSheet} from 'react-native';

const commonStyles = StyleSheet.create({
  feedHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
    marginVertical: 20,
    backgroundColor: lessDarkBackground,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
  },
  feedHeader: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default commonStyles;

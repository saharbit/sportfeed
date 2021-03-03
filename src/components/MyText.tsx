import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';

type Props = {
  style?: TextStyle;
};

const MyText: React.FC<Props> = ({style, children, ...props}) => {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
});

export default MyText;

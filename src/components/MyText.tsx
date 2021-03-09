import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

type Props = {
  style?: TextProps;
  children: React.ReactNode;
};

const MyText = ({style, children, ...props}: Props & TextProps) => {
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

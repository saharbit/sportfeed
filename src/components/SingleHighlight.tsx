import React from 'react';
import {View} from 'react-native';
import Highlight from '../entities/Highlights';
import MyText from './MyText';
import {WebView} from 'react-native-webview';

const SingleHighlight = ({highlight}: {highlight: Highlight}) => {
  return (
    <View>
      <MyText>{highlight.title}</MyText>
      <WebView
        source={{uri: highlight.url}}
        style={{
          marginTop: 20,
          width: '100%',
          height: 100,
        }}
        allowsInlineMediaPlayback={true}
      />
    </View>
  );
};

export default SingleHighlight;

import 'react-native';
import React from 'react';
import App from '../src/App';
import '@testing-library/jest-native/extend-expect';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

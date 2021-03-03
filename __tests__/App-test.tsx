import 'react-native';
import React from 'react';
import App from '../src/App';
import '@testing-library/jest-native/extend-expect';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react-native';
import {sports} from '../src/sports';
import {blue} from '../src/theme';

it('renders correctly', () => {
  renderer.create(<App />);
});

it('should allow selecting sports', () => {
  const {getByText} = render(<App />);
  const sportName = sports[0].name;
  const selectSportButton = getByText(sportName);

  expect(selectSportButton).toHaveStyle({color: 'white'});
  fireEvent.press(selectSportButton);
  expect(selectSportButton).toHaveStyle({color: blue});
});

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';

it('renders correctly', () => {
  renderer.create(<App />);
});

it('Welcomes user to react', () => {
  const {getByText} = render(<App />);
  const welcomeMessage = getByText('Welcome to React');
  expect(welcomeMessage).toBeTruthy();
});

// it('Shows you which file to edit', () => {
//   const {getByText} = render(<App />);
//   const editFile = getByText(/Edit App.tsx/);
//   expect(editFile).toBeTruthy();
// });

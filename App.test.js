import React from 'react'
import { render } from '@testing-library/react-native'
import App from './App'

it('renders', () => {
  const { baseElement, getByHintText } = render(<App />);

  expect(getByHintText('greeting')).toHaveTextContent(/hello/i);
  expect(baseElement).toMatchSnapshot();
});
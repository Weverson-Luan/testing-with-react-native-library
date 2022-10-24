/* eslint-disable prettier/prettier */
import React from 'react';
import {render} from '@testing-library/react-native';
import {StarRating} from '..';

describe('Test StarRating component', () => {
  it('if passed the average and the name shows the component.', () => {
    const {getByText, getByTestId} = render(
      <StarRating name="Testing New" star={4}  image="https://i.pinimg.com/736x/5a/72/e1/5a72e1f05f9e2e1b76a8438a7490dc3b.jpg"/>,
    );

    // debug();

    const name = getByText('Testing New');
    const icon = getByTestId('starIcon');

    expect(name).toBeTruthy(); // para saber se tem uma valor.
    expect(icon).toBeTruthy(); // para saber se tem uma valor.
  });
});

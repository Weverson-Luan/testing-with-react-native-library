/* eslint-disable prettier/prettier */
import React from 'react';
import {render} from '@testing-library/react-native';
import {StarRating} from '../StarRating';

describe('Test StarRating component', () => {
  it('if passed the average and the name shows the component.', () => {
    const {getByText, getByTestId} = render(
      <StarRating name="Testing New" star={4} />,
    );

    // debug();

    const name = getByText('Testing New');
    const icon = getByTestId('starIcon');

    expect(name).toBeTruthy(); // para saber se tem uma valor.
    expect(icon).toBeTruthy(); // para saber se tem uma valor.
  });
});

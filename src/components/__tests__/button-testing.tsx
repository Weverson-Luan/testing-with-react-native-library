/* eslint-disable prettier/prettier */
import React from 'react';
import {render} from '@testing-library/react-native';
import {NameComponent} from '../button';

describe('Test button component', () => {
  it('See if the button component is rendering correctly', () => {
    const {} = render(<NameComponent />);

    // debug();
  });
});

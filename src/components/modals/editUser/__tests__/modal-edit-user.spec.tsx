/* eslint-disable prettier/prettier */
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {EditUser as EditUserModal} from '..';

describe('Test EditUserModal component', () => {
  it('see if the component is being rendered.', () => {
   render(<EditUserModal titleModal='Atualizar Usuário' visibleModal={true} onOpenAndClosedModal={()=> {}}  />);
  });

  it('see if the title is being passed to the modal.', () => {
    const { getByText } = render(<EditUserModal titleModal='Atualizar Usuário' visibleModal={true} onOpenAndClosedModal={()=> {}}  />);
    const titleModal = getByText('Atualizar Usuário');
    expect(titleModal).toBeTruthy();

  });

  it('when you click on the x the modal should be closed.', () => {
   const onOpenAndClosedModalMock = jest.fn();
   const { getByTestId } = render(<EditUserModal titleModal='Atualizar Usuário' visibleModal={true} onOpenAndClosedModal={onOpenAndClosedModalMock}  />);

   const buttonClosed = getByTestId('closed');

   fireEvent.press(buttonClosed);

   expect(onOpenAndClosedModalMock).toBeCalled();

  });
});

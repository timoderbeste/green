import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent} from '@testing-library/react';
import PartyDialog from './PartyDialog';
import { StoreContext } from '../utils/store';



it('renders without crashing', () => {
  const open = jest.fn();

  const {getByTestId} = render(<PartyDialog />);
  expect(getByTestId('party-dialog-content').textContent).toBe('To generate your playlist, please enter the title of your playlist and the type of your event.');
  fireEvent.click(getByTestId('generate-button'));
  expect(open).toBeCalledWith(false);
  expect(open).toHaveBeenCalledTimes(1);
});

import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent} from 'react-testing-library';
import PartyDialog from './PartyDialog';


it('renders without crashing', () => {
  const ctx = React.useContext(StoreContext);

  const {getByTestId} = render(<PartyDialog />);
  expect(getByTestId('party-dialog-content').textContent).toBe('To generate your playlist, please enter the title of your playlist and the type of your event.');
  fireEvent.click(getByTestId('generate-button'));
  expect(ctx.open[1]).toHaveBeenCalledTimes(1);
});

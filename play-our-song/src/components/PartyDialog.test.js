import React from 'react';
import ReactDOM from 'react-dom';
import PartyDialog from './PartyDialog';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PartyDialog />, div);
  ReactDOM.unmountComponentAtNode(div);
});

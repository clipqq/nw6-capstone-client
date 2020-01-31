import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Landing';
import renderer from 'react-test-renderer';

describe('Landing Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Landing />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Landing/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
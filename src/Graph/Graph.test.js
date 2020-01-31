import React from 'react';
import ReactDOM from 'react-dom';
import Graph from './Graph';
import renderer from 'react-test-renderer';

describe('Graph Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< Graph />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Graph/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
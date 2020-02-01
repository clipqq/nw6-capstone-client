import React from 'react';
import ReactDOM from 'react-dom';
import GraphList from './GraphList';
import renderer from 'react-test-renderer';

describe('GraphList Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< GraphList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<GraphList/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
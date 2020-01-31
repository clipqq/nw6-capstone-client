import React from 'react';
import ReactDOM from 'react-dom';
import EditGraph from './EditGraph';
import renderer from 'react-test-renderer';

describe('EditGraph Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< EditGraph />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<EditGraph/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
import React from 'react';
import ReactDOM from 'react-dom';
import Register from './Register';
import renderer from 'react-test-renderer';

describe('Register Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Register />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Register/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
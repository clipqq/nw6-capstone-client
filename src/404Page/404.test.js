import React from 'react';
import ReactDOM from 'react-dom';
import Four from './404';
import renderer from 'react-test-renderer';

describe('Four Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        < Four />
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Four/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
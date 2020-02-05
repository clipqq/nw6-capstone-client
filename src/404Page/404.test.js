import React from 'react';
import ReactDOM from 'react-dom';
import AddGraph from './404';
import renderer from 'react-test-renderer';

describe('AddGraph Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< AddGraph />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<AddGraph/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
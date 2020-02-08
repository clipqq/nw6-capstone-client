import React from 'react';
import ReactDOM from 'react-dom';
import AddGraph from './AddGraph';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe('AddGraph Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Route>
          <AddGraph />
        </Route>
        
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
        <Route>
          <AddGraph/>
        </Route>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
import React from 'react';
import ReactDOM from 'react-dom';
import About from './index';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<About />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('About says "Hey, a section about me!"', () => {
  const component = shallow(<About />);
  expect(component.text()).toEqual('Hey, a section about me!');
});

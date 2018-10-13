import React from 'react';
import ReactDOM from 'react-dom';
import Work from './index';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Work />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('About says "I sure do love working"', () => {
  const component = shallow(<Work />);
  expect(component.text()).toEqual('I sure do love working');
});

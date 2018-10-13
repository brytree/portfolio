import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './index';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('About says "Footnote"', () => {
  const component = shallow(<Footer />);
  expect(component.text()).toEqual('Footnote');
});

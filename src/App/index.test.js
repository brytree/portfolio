import React from 'react';
import ReactDOM from 'react-dom';
import App from './';
import Menu from '../Menu';
import About from '../About';
import Work from '../Work';
import Footer from '../Footer';


import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has a Menu', () => {
  const app = shallow(<App />);
  expect(app.find(Menu)).toHaveLength(1);
});


it('has an About', () => {
  const app = shallow(<App />);
  expect(app.find(About)).toHaveLength(1);
});


it('has a Work', () => {
  const app = shallow(<App />);
  expect(app.find(Work)).toHaveLength(1);
});


it('has a Footer', () => {
  const app = shallow(<App />);
  expect(app.find(Footer)).toHaveLength(1);
});
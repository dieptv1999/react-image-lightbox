/* eslint-disable import/no-extraneous-dependencies */
import 'regenerator-runtime/runtime';
import { configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

configure({ adapter: new Adapter() });

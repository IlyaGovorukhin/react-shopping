import { combineReducers } from 'redux';

import clocks from './clocks';
import cart from './cart';
import filter from './filter';

export default combineReducers({
  clocks,
  cart,
  filter,
});

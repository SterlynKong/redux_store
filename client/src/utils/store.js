// import createStore method from redux.
import { createStore } from 'redux';

// import reducers from reducers.js
import reducers from './reducers';


// declare export of new created store using reducers
export default createStore(reducers);
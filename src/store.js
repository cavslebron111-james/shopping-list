import { createStore, applyMiddleware, compose } from 'redux';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './reducer';


//const initialState = {};


const middleWare = [thunk];

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  
 
  compose(applyMiddleware(...middleWare),
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  )
)

export const persistor = persistStore(store);
export default { store,persistor };
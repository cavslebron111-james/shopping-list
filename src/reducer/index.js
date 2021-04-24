import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import itemReducer from './itemReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['item','error','auth']
}

const rootReducer = combineReducers( {
  item: itemReducer,
  error: errorReducer,
  auth: authReducer

})
export default persistReducer(persistConfig, rootReducer)
 
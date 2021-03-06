import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store,persistor} from './store';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
     <Provider store={store}>
    <PersistGate persistor={persistor}>
   
    <App />
    
    </PersistGate >
    
    </ Provider >
    </BrowserRouter>,
    
     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change

import React, { Component } from 'react';
import AppNavBar from './components/AppNavBar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';
import {BrowserRouter,Route} from 'react-router-dom';

//import {BrowserRouter, Route} from 'react-router-dom';


//import {store} from './store';
//import {store, persistor} from 'redux-store';
//import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import EditModal from './components/EditModal';

class App extends Component {
  // componentDidMount() {
  //   store.dispatch(loadUser());
  // }

  render() {
    return (
     
      <BrowserRouter>
    
      <div className='App'>
          <AppNavBar />
          <Container>
         
         
         <Route path = '/' component={ShoppingList} />
         <ItemModal />
         
            <Route path = '/EditModal/:_id' component={EditModal} />
            </Container>
        </div>
        
        </BrowserRouter>
        
    );
  }
}

export default App;
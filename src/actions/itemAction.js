import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING,UPDATE_ITEM,FETCHED_DATA } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get('/api/items')
    .then(res =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addItem = item => (dispatch, getState) => {
  console.log(item);
  axios
    .post('/api/items', item, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_ITEM,
        payload: res.data
      })
    )
    // .catch(err =>
    //  dispatch(returnErrors(err.response.data, err.response.status))
    // );
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'GET_ERRORS')
      );
      // dispatch({
      //   type: GET_ERRORS
      // });
    });

  };

export const deleteItem = id => (dispatch, getState) => {
  axios
    .delete(`/api/items/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_ITEM,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

 


    
    
export const getItemId = id => (dispatch, getState) => {
  console.log('thisaydi', id)
  
    axios
    .get(`/api/items/${id}`, tokenConfig(getState))
      .then(res => {
        dispatch({
          type: FETCHED_DATA,
          payload: res.data
        })
    console.log('getid', res.data)
      })
      
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
    
    
    
    }
        


 




export const editItem = item =>  (dispatch, getState) => {
 //console.log('d', item);
// console.log('c',item._id)
  axios
  .put(`/api/items/${item._id}`,item, tokenConfig(getState))
  
  .then( res => {
    dispatch( {
      type: UPDATE_ITEM,
      payload: res.data
    })
 //console.log('mydata221',item)
  })  
 
  .catch(err =>
    dispatch(returnErrors(err.response.data, err.response.status, 'GET_ERRORS'))
  );
};



export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
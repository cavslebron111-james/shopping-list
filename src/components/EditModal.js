import React, { Component } from 'react';
import { clearErrors,returnErrors } from '../actions/errorActions';

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import { editItem ,getItemId} from '../actions/itemAction';
import PropTypes from 'prop-types';



class EditModal extends Component {
  

  constructor(props) {
   super(props);

   
   
    this.state = {
      modal: true,
      _id:  this.props.item1 ? this.props.item1._id : null,
      name: this.props.item1 ? this.props.item1.name : '',
      //id:  this.props.item1._id ,
      //name: this.props.item1.name,
      msg: null
    }
}

  

 
componentDidMount = () => {
     if (this.props.match.params._id) {
    this.props.getItemId(this.props.match.params._id);
    }
}


 componentWillReceiveProps = (nextProps) => {
   this.setState({
    _id: nextProps._id,
   name: nextProps.name
    
   });
 }
  







  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    editItem: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    returnErrors: PropTypes.func.isRequired
  };

  
  
  
  
  
  
  
  componentDidUpdate(prevProps) {
    
    const { error } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === 'GET_ERRORS') {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    
    }

   
 }


  

  onChangename = e => {
    
    this.setState({
        [e.target.name]: e.target.value
    });
}


  

HandleSubmit = e => {
  //this.props.clearErrors();
  e.preventDefault();
  const newItem = {
    
    name: this.state.name,
    _id: this.props.match.params._id
    
  };

  // Add item via editItem action
  this.props.editItem(newItem)
  this.props.history.push('/')
 
   
     
 

  
}





  render() {
    
    console.log(this.props.item1)
    return (
      <div>
      
        <Modal isOpen={this.state.modal} >
          <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
          <ModalBody>
          {this.state.msg ? (
            <Alert color='danger'>{this.state.msg}</Alert>
          ) : null}
          <Form onSubmit={this.HandleSubmit.bind(this)}>
              <FormGroup>
                <Label for='item'>Item</Label>
                <Input
                  type='text'
                  name='name'
                  value ={this.state.name}
                  placeholder='Add shopping item'
                  onChange={this.onChangename.bind(this)}
                />
                <Button color='dark' style={{ marginTop: '2rem' }} block>
                  edit Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
        
        </div>
        )
      
      
      
        
    
  }
}

const mapStateToProps = (state,props) => {
    return {
    isAuthenticated: state.auth.isAuthenticated,
       error: state.error,
   
   item1:state.item.items.find(item => item._id === props.match.params._id)
      }


      // if (props.match.params._id) {
      //   return {

        
    
//         }
  
// }
//  return { item: null};

}

export default connect(
  mapStateToProps,
  { editItem, clearErrors,getItemId,returnErrors }
)(EditModal);
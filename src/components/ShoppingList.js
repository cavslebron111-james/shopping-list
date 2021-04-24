import React, { Component,Fragment } from 'react';
import {Link} from 'react-router-dom';

import { Container, ListGroup, ListGroupItem, Button ,
 
 
  
   } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemAction';
import PropTypes from 'prop-types';


class ShoppingList extends Component {
 
  state = {
   // modal: false,
    id: '',
    name: '',
    msg: null
  };
 
 
 
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.getItems();
  }

 
  
  
  
  onDeleteClick = id => {
    this.props.deleteItem(id);
  };
 
 
 
  render() {
    const { items } = this.props.item;
    console.log(this.props.item)
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className='shopping-list'>
            {items.map(({ _id, name }) => (
              <CSSTransition key={_id}  classNames='fade'>
                <ListGroupItem>
                  {this.props.isAuthenticated ? (
                   <Fragment>
                    <Button
                      className='remove-btn'
                      color='danger'
                      size='sm'
                      onClick={this.onDeleteClick.bind(this,_id)}
                    >
                      &times;
                     
                  
                      </Button>
                    
                    
                      <Link to={`/EditModal/${_id}`}>edit</Link>
                     
                     
                      
                  </Fragment>
                    ) : null}
                  {name}
                  
                
                
                  
                  
                </ListGroupItem>
                  </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
 return {
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
 }
 
}
export default connect(
  mapStateToProps,
  { getItems, deleteItem}
)(ShoppingList);
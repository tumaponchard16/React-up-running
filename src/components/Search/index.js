import React, { Component } from 'react';
import { FormGroup } from 'react-bootstrap';
// import { Button } from '../Button/index';

class Search extends Component {
    componentDidMount(){
      this.input.focus();
    }
    render(){
      const { onChange, value, children, onSubmit } = this.props;
      return(
        <form onSubmit={ onSubmit }>
          <FormGroup>
            <h2 className="input-header">{ children }</h2>
            <hr style={{ border: '2px solid #fff', width: '100px' }} />
            <div className="input-group">
              <input 
                className="form-control width100"
                type="text" 
                onChange={ onChange } 
                value={ value }
                ref={(node) => { this.input = node }}
              />
  
              <span className="input-group-btn">
                <button
                  className="btn btn-primary"
                  type="submit"
                >
                Search
                </button>
              </span>
            </div>
          </FormGroup>
        </form>
      )
    }
  }

  export default Search;
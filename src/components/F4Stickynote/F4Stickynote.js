/**
* F4Stickynote.js
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import { BaseContext } from 'frontend-react-f4-base-commons';
import { FormGroup,ControlLabel, FormControl } from 'react-bootstrap';
const { connect } = BaseContext;


@observer
@connect
class F4Stickynote extends Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this.save = this.save.bind(this);
    this.state = {
      defaultValue : "",
      loading: true,
    }
  }


  componentDidMount() {
    this.props.load(this.setDefaultValue);
  }

  setDefaultValue = (defaultValue) => {
    const {loading} = this.state;
    this.setState({defaultValue, loading: false});
  }
  

  save(data) {
    this.props.save(data);
    //console.log(data);
  }

  _onChange(event){
    // this.props.onChange(event, event.target.value);
    this.save(event.target.value);
  }

  render() {
    const { loading } = this.state;

    return (
  
      <div>
      {
        !loading ? <FormControl className = "reminder" spellCheck= "false" ref="note" defaultValue = {this.state.defaultValue} componentClass="textarea" onChange = {this._onChange} />
        : null
      }
      </div>
    );
  }
}

F4Stickynote.propTypes = {
  // props definition
}

F4Stickynote.defaultProps = {
  // default props
}


export default F4Stickynote;

/**
* F4Customframe.js
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import FontIcon from 'react-fontawesome';
import { Panel } from 'react-bootstrap';
import { Navbar, Popover, OverlayTrigger , Tooltip, ResponsiveEmbed, Fade} from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class F4Customframe extends Component {
  constructor(props) {
    super(props);
    this.state = {      
      open: this.props.open
     };
 
  }
  render() {
    const { children, onRemove, editable, title } = this.props;
    const collapseTip = (
      <Tooltip id="collapseTip">
      <strong>collapse</strong>
      </Tooltip>
    );
    const removeTip = (
      <Tooltip id="removeTip">
      <strong>close</strong>
      </Tooltip>
    );
    const maximizeTip = (
      <Tooltip id="maximizeTip">
      <strong>maximize</strong>
      </Tooltip>
    );
    let remove = <a href onClick={() => { onRemove(); }} >
     <OverlayTrigger placement="bottom" overlay={removeTip}>
     {/* <i className="fa fa-close"></i> */}
     <Button bsSize="xsmall" bsStyle = "link"> <FontIcon name="close" /> </Button>
     </OverlayTrigger>
    </a>
    let collapse = <a>
     <OverlayTrigger placement="bottom" trigger={['hover']} overlay={collapseTip}>
     <Button bsSize="xsmall" bsStyle = "link" onClick={() => this.setState({ open: !this.state.open })}>
    {/* <Button bsSize="xsmall" bsStyle = "link">  */}
    
    <FontIcon name="minus" /> </Button> 
     </OverlayTrigger>
    </a>

    let maximize = <a  href={title}>
     <OverlayTrigger placement="bottom" overlay={maximizeTip}>
     {/* <FontIcon name="fas fa-expand" /> */}
     <Button bsSize="xsmall" bsStyle = "link"> 
     <FontIcon name="fas fa-expand" /> </Button>
     </OverlayTrigger>
    
    </a>
    return (
      <div>
  
    <Navbar fluid={this.props.fluidity}>
        <Navbar.Header>
          {/* <Navbar.Text > */}
           {title}
          {/* </Navbar.Text> */}
  
         <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text pullRight>{remove}</Navbar.Text>
          <Navbar.Text pullRight>{collapse}</Navbar.Text>
          <Navbar.Text pullRight>{maximize}</Navbar.Text>
        </Navbar.Collapse>
        <Panel expanded={this.state.open} >
          <Panel.Collapse>
            <Panel.Body>
            <div className="clearfix"></div>
            <div className="x_content">
              {children}
            </div>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>

       
      </Navbar>

  
   



      </div>
  
    );
  }
}

F4Customframe.propTypes = {
  // props definition
}

F4Customframe.defaultProps = {
  // default props
  fluidity:true,
  open: true,
  
}


export default F4Customframe;
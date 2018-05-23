/**
* F4Addwidgetdialog.js
*/

import React, { Component} from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import { BaseContext } from 'frontend-react-f4-base-commons';
import { Button, Modal, Checkbox, Tooltip, OverlayTrigger ,ButtonToolbar} from 'react-bootstrap';
import FontIcon from 'react-fontawesome';
const { connect } = BaseContext;

class F4Addwidgetdialog extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleSelectAll = this.handleSelectAll.bind(this);
    const { addWidgetComponentText, onClick, widgets, isModalOpen, onRequestClose, onWidgetSelect } = this.props

    this.state = {
      show: isModalOpen,
      selectedWidgets: []
    };
  }


  handleSubmit() {
    this.props.onSubmit();
    this.handleClose();
    this.props.alert.success(<div style={{ textAlign: 'center' }}>Dashboard Updated!</div>)
  }
  
  

  handleClose() {
    this.setState({ show: this.props.show });
  }

  handleShow() {
    this.setState({ 
      show: !this.props.show,
      selectedWidgets: this.props.selectedWidgets
    });
  }
  handleSelectAll(){
    const { widgets, onWidgetSelect } = this.props;
    const { selectedWidgets } = this.state;

    let newSelectedWidgets = selectedWidgets;
    let index;

    if (Object.keys(widgets).length !== selectedWidgets.length) {
      Object.keys(widgets).forEach((widget, key) => {
        index = -1;
        for (let i = 0; i < selectedWidgets.length; i++) {
          if (selectedWidgets[i] === widget) {
            index = i;
          }
        }
        if (index === -1) {
          newSelectedWidgets.push(widget);
          onWidgetSelect(widget);
        }
      });
    } else {
      Object.keys(widgets).forEach((widget, key) => {
        index = -1;
        for (let i = 0; i < selectedWidgets.length; i++) {
          if (selectedWidgets[i] === widget) {
            index = i;
          }
        }
        if (index !== -1) {
          newSelectedWidgets.splice(index,1);
          onWidgetSelect(widget);
        }
      });
    }
    

    this.setState({
      selectedWidgets: newSelectedWidgets,
    })
  }



  handleCheckbox(widget) {
    const { selectedWidgets } = this.state;
    const { onWidgetSelect } = this.props;

    let newSelectedWidgets = selectedWidgets;
    let exists = false;
    let index = -1;
    for (let i = 0; i < selectedWidgets.length; i++) {
      if (selectedWidgets[i] === widget) {
        index = i;
      }
    }
    if (index !== -1) {
      newSelectedWidgets.splice(index,1);
    } else {
      newSelectedWidgets.push(widget);
    }

    console.log(index);

    this.setState({
      selectedWidgets: newSelectedWidgets
    })
    onWidgetSelect(widget);
  }

  render() {
    const { addWidgetComponentText, onClick, widgets, isModalOpen, onRequestClose, onWidgetSelect, modelStore } = this.props
    const { selectedWidgets } = this.state;
    let widgetItems = Object.keys(widgets).map((widget, key) => {
      return (
              <Col xs={6} md={6}>
                  <Checkbox checked={selectedWidgets.includes(widget)} inline="true" onClick={() => this.handleCheckbox(widget)}>{widgets[widget].title}</Checkbox>
              </Col>
      );
    });
    const configureDashboardTip = (
      <Tooltip id="configureDashboardTip">
        <strong>Add/Remove Widget</strong>
      </Tooltip>
    );
    const ShowinDashboardTip = (
      <Tooltip id="configureDashboardTip">
        <strong>Show in Dashboard</strong>
      </Tooltip>
    );
    // console.log("selected:",selectedWidgets.length);
    // console.log("widgets:",widgets.length);
    return (
   
      <div>
        <div>
          <div className= "btnConfigure">
          <OverlayTrigger placement="right"   trigger={['hover']} overlay={configureDashboardTip}>
            <Button bsStyle="default" bsSize="small" onClick={() => {
              this.handleShow();
              modelStore.onClickAdd();
            }}>
              <FontIcon name="fas fa-wrench" />
              {addWidgetComponentText}
            </Button>
          </OverlayTrigger>
          </div>
          <Modal  bsSize="large" show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton bsStyle = "danger">
              <Modal.Title>Add Widgets</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Checkbox className = "selectAllCheck" checked={selectedWidgets.length === Object.keys(widgets).length} onClick= {this.handleSelectAll}>Select All</Checkbox>
                {widgetItems}
            </Modal.Body>

            <Modal.Footer>

              <ButtonToolbar className="pull-right">
                <Button onClick={this.handleClose} bsStyle="default">Cancel</Button>
                <OverlayTrigger placement="bottom" trigger={['hover']} overlay={ShowinDashboardTip}>
                  <Button onClick={this.handleSubmit}bsStyle = "primary">Submit</Button>
                </OverlayTrigger>
              </ButtonToolbar>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
     
    );
  }
}
F4Addwidgetdialog.propTypes = {
  // props definition

}

F4Addwidgetdialog.defaultProps = {
  // default props
  show: false,
}
// export default withAlert(F4Addwidgetdialog);
export default F4Addwidgetdialog;
/**
* F4Dashboard.js
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Dashboard, { addWidget }from 'react-dazzle';
import Customframe from './F4Customframe';
import Addwidgetdialog from './F4Addwidgetdialog';
import Grid from 'react-bootstrap';

class F4Dashboard extends Component {
  constructor(props) {
    super(props);

    // let layout = this.props.loadLayout();

    const { modelStore } = this.props;
    this.state = {      
     layout: this.props.layout,
     isModalOpen : this.props.isModalOpen,
     addWidgetOptions: null,
     toAddWidgets: []
    };
  }

 
  componentDidMount() {
    this.props.loadLayout(this.setLayout);
  }

  setLayout = (layout) => {
    if (layout) {
      this.setState({layout: layout});
    }
  }

  onRemove = (layout) => {
    this.setState({
      layout: layout,
    });

    this.props.saveLayout(layout);
  }

  onMove = (layout) => {
    this.setState({
      layout: layout,
    });

    this.props.saveLayout(layout);
  }
// start test


  /**
   * When user selects a widget from the modal dialog, this will be called.
   * By calling the 'addWidget' method, the widget could be added to the previous requested location.
   */
  handleWidgetSelection = (widgetName) => {
    const { rowIndex, columnIndex} = this.state.addWidgetOptions;

    const { toAddWidgets } = this.state;
  
    let index = -1;
    for (let i = 0; i < toAddWidgets.length; i++) {
      if (toAddWidgets[i] === widgetName) {
        index = i;
        break;
      }
    }

    if (index === -1) {
      toAddWidgets.push(widgetName);
    } else {
      toAddWidgets.splice(index,1);
    }

    // Close the dialogbox
    this.onRequestClose();
  }

  handleWidgetOnSubmit = () => {
    const { rowIndex, columnIndex} = this.state.addWidgetOptions;
    const { layout, toAddWidgets } = this.state;

    let exists = false;
    let newLayout = layout;

    let rows = layout.rows;
    for (let i = 0; i < toAddWidgets.length; i++) {
      let widgetName = toAddWidgets[i];

      for (let row = 0; row < rows.length; row++) {
        let cols = rows[row].columns;
        for (let col = 0; col < cols.length; col++) {
          let widgets = cols[col].widgets;
          for (let widget = 0; widget < widgets.length; widget++) {
            if (widgets[widget] && widgets[widget].key === widgetName) {
              exists = true;
              newLayout.rows[row].columns[col].widgets.splice(widget,1);
            }
          } 
        }
      }

      if (!exists) {
        //TEST
        let columns = newLayout.rows[0].columns;
        let ci = 0;
        if (columns[0].widgets.length > columns[1].widgets.length) {
          ci = 1;
        }
        newLayout = addWidget(newLayout, rowIndex, ci, widgetName);
      }
      exists = false;
    }

    console.log(toAddWidgets);
 
    this.setState({
      toAddWidgets: [],
      layout: newLayout
    })
    this.props.saveLayout(newLayout);
  }



  /**
   * This will be called when user tries to close the modal dialog.
   */
  onRequestClose = () => {
    this.setState({
      isModalOpen: false,
    });
  }
  /**
   * Adds new widget.
   */
  onAdd = (layout, rowIndex, columnIndex) => {
    // Open the AddWidget dialog by seting the 'isModalOpen' to true.
    // Also preserve the details such as the layout, rowIndex, and columnIndex  in 'addWidgetOptions'.
    //  This will be used later when user picks a widget to add.
    this.setState({
      // isModalOpen: true,
      addWidgetOptions: {
        layout,
        rowIndex,
        columnIndex,
      },
    });
  }
  getSelectedWidgets = () => {
    let layout = this.state.layout;
    let selectedWidgets = [];

    let rows = layout.rows;
    for (let row = 0; row < rows.length; row++) {
      let cols = rows[row].columns;
      for (let col = 0; col < cols.length; col++) {
        let widgets = cols[col].widgets;
        for (let widget = 0; widget < widgets.length; widget++) {
          if (widgets[widget] && widgets[widget].key) {
            selectedWidgets.push(widgets[widget].key);
          }
        } 
      }
    }

    return selectedWidgets;

  }

  render() {
    const { modelStore } = this.props;
    return (


      <div> 
        <Addwidgetdialog 
        widgets={this.props.widgets} 
        isModalOpen={this.props.isModalOpen} 
        onRequestClose={this.onRequestClose} 
        onWidgetSelect={this.handleWidgetSelection}
        modelStore={modelStore}
        addWidgetComponentText = {this.props.buttonName}
        selectedWidgets={this.getSelectedWidgets()}
        onSubmit={this.handleWidgetOnSubmit}
        />
        <Dashboard  
        addWidgetComponent={({onClick, text}) => {
          modelStore.onClickAdd = onClick;
          return null;
        }}
        frameComponent = {Customframe}
        widgets = {this.props.widgets} //working
        layout=   {this.state.layout} //working
        editable= {modelStore.editable} //working
        onRemove= {this.onRemove}
        onMove = {this.onMove}
        onAdd={this.onAdd}
      
        />
  
      </div>
    );
  }
}
F4Dashboard.propTypes = {
  // props definition
  loadLayout: PropTypes.func.isRequired,
  saveLayout: PropTypes.func.isRequired,
}

F4Dashboard.defaultProps = {
  // default props
  buttonName: "Configure Dashboard",

 


  layout: {
    rows: [{
      columns: [
        {
        className: 'col-md-7',
        widgets: [],
      },{
        className: 'col-md-5',
        widgets: [],
      },
      // {
      //   className: 'col-md-4',
      //   widgets: [],
      // },
      
      // ,{
      //   className: 'col-md-4',
      //   widgets: [{key: 'WordCounter'}],
      // }
      // ,{
      //   className: 'cSamplol-md-3',
      //   widgets: [{key: 'AddCurrencyWidget'}],
      // }

    ],
    }
  ],
},
isModalOpen: false,
addWidgetOptions: null,

}


export default F4Dashboard;

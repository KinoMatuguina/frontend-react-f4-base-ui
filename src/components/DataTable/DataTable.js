'use strict'
import React, { Component } from 'react';
import {Table} from 'fixed-data-table-2';

class DataTable extends Component {
  
  render() {
    const { rowCount, rowHeight, width, height } = this.props
    return (
      // ..this.props is to expose all props of the fixed data table component
      <Table {...this.props}> 
        {/* content hereg */}
        {this.props.children}
      </Table>
    );
  }

}


export default DataTable;

/**
* F4ListView.js
*/

 /**
 * References:
 * https://react-bootstrap.github.io/components/table/
 * https://github.com/clauderic/react-sortable-hoc
 * 
 * @observable listViewUpdate - listViewUpdate(newData)
 * @observable listViewGetData - listViewGetData()
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import {Table, Column, Cell} from 'fixed-data-table-2';
// import 'fixed-data-table-2/dist/fixed-data-table.css';
import { Table, Button } from 'react-bootstrap';
import {SortableContainer, SortableElement, arrayMove, SortableHandle} from 'react-sortable-hoc';
import classNames from 'classnames';
import { observer } from 'mobx-react';

@observer
class F4ListView extends Component {
  constructor(props) {
    super(props);

    const {data, store} = this.props;
    this.state = {
      data: data,
      holders: this.getEmptyArray(data.length)
    }

    //stores
    if (store) {
      store.listViewUpdate = (data) => {
        this.setState({data});
      }

      store.listViewGetData = () => this.state.data;
      store.listViewAddRow = this.addRow;
      store.listViewGetHolders = this.getHolders;
    }
  }

  getEmptyArray = (size) => {
    let arr = [];
    for (let i = 0; i < size; i++) {
      arr.push({});
    }
    return arr;
  }

  getHolder = (rowIndex) => {
    this.getHolders()[rowIndex];
  }

  updateHolder = (rowIndex, key, data) => {
    let holders = this.state.holders.slice();
    
    holders[rowIndex][key] = data;

    this.setState({holders});
  }

  updateHolders = (rowIndex, dataArr) => {
    let holders = this.state.holders.slice();
    
    if (dataArr) {
      for (let i = 0; i < dataArr.length; i++) {
        let data = dataArr[i];
        holders[rowIndex][data.key] = data.value;
      }
    }

    this.setState({holders});
  }

  getHolders = () => {
    return this.state.holders;
  }

  addRow = (row) => {
    if (!row) return;

    let data = this.state.data;
    data.push(row);
    this.setState({data});
  }

  getTableHeader = () => {
    const {cols, hasArrows, isSortableRow, thClassName, trClassName, hasDeleteButton} = this.props;
    
    return (
      <tr className={classNames("f4ListView_tr", trClassName)}>
        {isSortableRow ? <th className={classNames("f4ListView_th", thClassName)}></th> : null}
        {cols.map((data,key) => {
        return <th className={classNames("f4ListView_th", thClassName)} key={key}>{
          data.headerCell ? data.headerCell(data) : data.title
        }</th>
      })}
      
        {hasArrows ? <th></th> : null}
        {hasDeleteButton ? <th></th> : null}
      </tr>
    );
  }

  getTableRow = (dataData, dk) => {
    let {cols, tdClassName, trClassName, hasArrows, hasDeleteButton, isSortableRow, dragHandleClassName, tdDragHandleClassName, sortableElement} = this.props;
    let {data} = this.state;

    let cellProps = {rowIndex: dk, row:dataData, data, update: (data) => this.setState(data),
      updateHolder: (key, data) => this.updateHolder(dk, key, data), holder: this.getHolder(dk),
      updateHolders: (data) => this.updateHolders(dk, data)};

    if (isSortableRow) {
      return <SortableItem index={dk} key={"sr-" + dk}><tr key={"dk-"+dk} {...sortableElement} className={classNames("f4ListView_tr", trClassName)}>
        <td className={classNames("f4ListView_td", "f4ListView_td_dragHandle", tdClassName, tdDragHandleClassName)}><DragHandle dragHandleClassName={dragHandleClassName}/></td>
        {cols.map((colsData, ck) => {
          return (<td className={classNames("f4ListView_td", colsData.isRightAligned ? "f4ListView_rightAligned" : null, tdClassName)} key={"dk-"+dk+",ck-"+ck}>
            <div style={colsData.cellStyle} className={classNames("f4ListView_td_div", colsData.tdDivClassName)}>
              {
                colsData.cell ? colsData.cell({colIndex: ck, ...cellProps}) : dataData[colsData.dataKey] 
              }
            </div>
          </td>)
        })}

        { hasArrows ? this.getArrows(dk) : null}
        { hasDeleteButton ? this.getDeleteButton(dk) : null}
      </tr></SortableItem>
    } else {
      return <tr key={"dk-"+dk} className={classNames("f4ListView_tr", trClassName)}>
        {cols.map((colsData, ck) => {
          return (<td className={classNames("f4ListView_td", tdClassName)} key={"dk-"+dk+",ck-"+ck}>
            <div style={colsData.cellStyle} className={classNames("f4ListView_td_div", colsData.tdDivClassName)}>
              {
                colsData.cell ? colsData.cell({colIndex: ck, ...cellProps}) : dataData[colsData.dataKey] 
              }
            </div>
          </td>)
        })}
        { hasArrows ? this.getArrows(dk) : null}
        { hasDeleteButton ? this.getDeleteButton(dk) : null}
      </tr>
    }
  
  }

  getTableBody = () => {
    let {isSortableRow} = this.props;
    let {data} = this.state;

    if (!data) return;

    return data.map((dataData, dk) => {
      return (
        this.getTableRow(dataData,dk)
      )
    })
  }

  getDeleteButton = (index) => {
    const {deleteButtonClassName, tdDeleteButtonClassName, tdClassName} = this.props;
    
    return (
      <td className={classNames("f4ListView_td", "f4ListView_td_deleteButton", tdClassName, tdDeleteButtonClassName)}>
        <Button bsStyle="link" className={classNames("f4ListView_deleteButton", deleteButtonClassName)} onClick={() => {
            let data = this.state.data.slice();
            data.splice(index,1);
            
            let holders = this.state.holders.slice();
            holders.splice(index, 1);

            this.setState({data, holders});
          }}><i className="fa fa-times"></i>
        </Button>
      </td>
    );
  }

  getArrows = (index) => {
    const {tdClassName, tdArrowsClassName} = this.props;
    let {data} = this.state;

    return (
      <td className={classNames("f4ListView_td", "f4ListView_td_arrows", tdClassName, tdArrowsClassName)}>
        <div>
          {index < data.length - 1 ? this.getDownArrow(index) : null}
          {index > 0 ? this.getUpArrow(index) : null}
        </div>
      </td>
    );
  }

  getDownArrow = (index) => {
    const {downArrowClassName} = this.props;
    let data = this.state.data.slice();
    let holders = this.state.holders.slice();

    return (
      <Button bsStyle="link" className={classNames("f4ListView_downArrow", downArrowClassName)} onClick={() => {
        let temp = data[index];
        data[index] = data[index+1];
        data[index + 1] = temp;
        
        let temp2 = holders[index];
        holders[index] = holders[index+1];
        holders[index + 1] = temp2;
       
        this.setState({data, holders});
      }}><i className="fa fa-arrow-down"></i></Button>
    );
  }

  getUpArrow = (index) => {
    const {upArrowClassName} = this.props;
    let data = this.state.data.slice();
    let holders = this.state.holders.slice();

    return (
      <Button bsStyle="link" className={classNames("f4ListView_upArrow", upArrowClassName)} onClick={() => {
        let temp = data[index];
        data[index] = data[index - 1];
        data[index - 1] = temp;
        
        let temp2 = holders[index];
        holders[index] = holders[index - 1];
        holders[index - 1] = temp2;
       
        this.setState({data, holders});
      }}><i className="fa fa-arrow-up"></i></Button>
    );
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      data: arrayMove(this.state.data, oldIndex, newIndex),
      holders: arrayMove(this.state.holders, oldIndex, newIndex)
    });
  };

  getTable = () => {
    let { table, cols, tableClassName, theadClassName, tbodyClassName, hasHeader, NoContentComponent } = this.props;
    let { data } = this.state;

    // if (data && data.length !== 0) {
    //   return <Table striped bordered responsive {...table} className={classNames("f4ListView_table", tableClassName)}>
    //   {hasHeader ? <thead className={classNames("f4ListView_thead", theadClassName)}>
    //     {this.getTableHeader()}
    //   </thead> : null}
    //   <tbody className={classNames("f4ListView_tbody", tbodyClassName)}>
    //     {this.getTableBody()}
    //   </tbody>
    // </Table>
    // } else {
    //   if (NoContentComponent) {
    //     return NoContentComponent;
    //   } else return null;
    // }
    return <Table striped bordered responsive {...table} className={classNames("f4ListView_table", tableClassName)}>
      {hasHeader ? <thead className={classNames("f4ListView_thead", theadClassName)}>
        {this.getTableHeader()}
      </thead> : null}
      <tbody className={classNames("f4ListView_tbody", tbodyClassName)}>
        {this.getTableBody()}
      </tbody>
    </Table>
  }

  render() {
    const {isSortableRow, draggedRowClassName, sortableContainer, buttonLabelComponent, addRowData, onAddRow, title} = this.props;
    let holders = this.state.holders.slice();

    return (
      <div>
        { title }
        {
          isSortableRow ? 
          <SortableTable onSortEnd={this.onSortEnd} useDragHandle={true} {...sortableContainer} helperClass={classNames("f4ListView_draggedRow", draggedRowClassName)}>
            {this.getTable()}
          </SortableTable> 
          : this.getTable()
        }
        
        <Button onClick={() => {
          this.addRow(addRowData);
      
          holders.push({});
          this.setState({holders});

          if (onAddRow) onAddRow(addRowData);
        }}>{buttonLabelComponent}</Button>
        {/* <SortableComponent/> */}
      </div>
    );
  }
}

const DragHandle = SortableHandle(({dragHandleClassName}) => <i className={classNames("fa fa-bars", "f4ListView_dragHandle", dragHandleClassName)}></i>);

const SortableTable = SortableContainer(({children}) => {
  return children;
})

const SortableItem = SortableElement(({children}) => {
  return children;
})

F4ListView.propTypes = {
  table: PropTypes.object,
  data: PropTypes.array.isRequired,
  cols: PropTypes.array.isRequired,
  store: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  NoContentComponent: PropTypes.object,
  buttonLabelComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  sortableContainer: PropTypes.object,
  sortableElement: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  onAddRow: PropTypes.func,

  isSortableRow: PropTypes.bool,
  hasArrows: PropTypes.bool,
  hasHeader: PropTypes.bool,
  hasDeleteButton: PropTypes.bool,

  tdDeleteButtonClassName: PropTypes.string,
  deleteButtonClassName: PropTypes.string,
  dragHandleClassName: PropTypes.string,
  upArrowClassName: PropTypes.string,
  downArrowClassName: PropTypes.string,
  tableClassName: PropTypes.string,
  theadClassName: PropTypes.string,
  tbodyClassName: PropTypes.string,
  trClassName: PropTypes.string,
  tdClassName: PropTypes.string,
  thClassName: PropTypes.string,
  draggedRowClassName: PropTypes.string,
  tdDragHandleClassName: PropTypes.string,
  tdArrowsClassName: PropTypes.string
}

F4ListView.defaultProps = {
  hasHeader: true,
  isSortableRow: true,
  hasArrows: true,
  hasDeleteButton: true,
  buttonLabelComponent: "Add Row"
  // default props
}


export default F4ListView;
/*
DATA CELL
AUTHOR: KINO MATUGUINA
*/

"use strict";

// const ExampleImage = require('./ExampleImage');
const { Cell } = require('fixed-data-table-2');
const React = require('react');
const ReactTooltip = require('react-tooltip');

class CollapseCell extends React.PureComponent {
  render() {
    const {data, rowIndex, columnKey, collapsedRows, callback, ...props} = this.props;
    return (
      <Cell {...props}>
        <a onClick={() => callback(rowIndex, data[rowIndex])}>
          {collapsedRows.has(rowIndex) ? '\u25BC' : '\u25BA'}
        </a>
      </Cell>
    );
  }
};

module.exports.CollapseCell = CollapseCell;

class ImageCell extends React.PureComponent {
  render() {
    const {imageClass, src, ...props} = this.props;
    return (
      <div {...props} className={"imageCell " + imageClass} style={{"backgroundImage": "url(" + src + ")"}}></div>
    )
  }
};

module.exports.ImageCell = ImageCell;

class LinkCell extends React.PureComponent {
  render() {
    const {children, link, target, ...props} = this.props;
    return (
      <Cell {...props}>
        <a href={link} target={target}>{children}</a>
      </Cell>
    );
  }
};
module.exports.LinkCell = LinkCell;


class TextCell extends React.PureComponent {
  render() {
    const {data, rowIndex, columnKey, ...props} = this.props;
    return (
      <Cell {...props}>
        {data.getObjectAt(rowIndex)[columnKey]}
      </Cell>
    );
  }
};
module.exports.TextCell = TextCell;

class TooltipCell extends React.PureComponent {
  render() {
    const {data, rowIndex, columnKey, ...props} = this.props;
    const value = data.getObjectAt(rowIndex)[columnKey];
    return (
      <Cell
        {...props}
        onMouseEnter={() => { ReactTooltip.show(); }}
        onMouseLeave={() => { ReactTooltip.hide(); }}
        onClick ={this.props.onClick}
        style={this.props.style}
      >
        <div ref='valueDiv' data-tip={value}>
          {value}
        </div>
      </Cell>
    );
  }
};
module.exports.TooltipCell = TooltipCell;
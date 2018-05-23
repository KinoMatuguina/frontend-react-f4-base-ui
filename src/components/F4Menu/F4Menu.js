/**
 * F4Menu.js
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/lib/Col";
import Row from "react-bootstrap/lib/Row";
import { Panel, ListGroup, ListGroupItem, Breadcrumb } from "react-bootstrap";
import { BaseContext } from "frontend-react-f4-base-commons";
import _ from "underscore";
import classNames from 'classnames';
import Autosuggest from 'react-autosuggest';
import { observer } from 'mobx-react';

const { connect } = BaseContext;

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
    <a href={suggestion.url}>{suggestion.name}</a>
);

const onSuggestionSelected = (event, {suggestion}) => {
  window.location.href=suggestion.url;
}

@observer
class F4Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageHistory: [],
      value: '',
      suggestions: [],
      links: [],
    };
  }

  componentDidMount() {
    const { menuData } = this.props;

    this.addMenuListToLinks(menuData);
  }

  addMenuListToLinks = (array) => {
    for (let i = 0; i < array.length; i++) {
      this.addMenuParentToLinks(array[i]);
    }
  }

  addMenuParentToLinks = (parent) => {
    let links = this.state.links;

    if (parent.children) {
      this.addMenuListToLinks(parent.children);
    } else {
      links.push(parent);
      this.setState({links});
    }
  }

  getChildren = (data, index) => {
    if (data.length && data.length !== 0) return data[index].children;
  };

  createMenuItems = () => {
    const { pageHistory } = this.state;
    const { menuData } = this.props;

    let data = menuData;
    if (pageHistory !== null && pageHistory.length !== 0) {
      for (let i = 0; i < pageHistory.length; i++) {
        data = this.getChildren(data, pageHistory[i]);
      }
    }

    return data
      ? data.map((d, index) => {
          return this.createMenuItem(d, index);
        })
      : null;
  };

  createMenuItem = (d, index) => {
    return (
      <ListGroupItem
        className="listStyle"
        onClick={() => this.showChildren(d, index)}
        key={d.id}
      >
        {d.icon ? (
          <i className="col-xs-1">
            <i className="iconLeft">
              <span className={d.icon} />
            </i>
          </i>
        ) : null}

        <span className="menuName">
          <span className="col-xs-9">{d.name}</span>
        </span>
        {d.children ? (
          <div className="pull-right">
            <i className="iconRight">
              <i className="fa fa-caret-right" />
            </i>
          </div>
        ) : null}
      </ListGroupItem>
    );
  };

  showChildren = (d, index) => {
    if (d.children === null) {
      window.location.href = d.url;
      return;
    }

    this.addHistory(index);
  };

  addHistory = index => {
    const { pageHistory } = this.state;

    let newPageHistory = pageHistory;
    newPageHistory.push(index);
    this.setState({
      pageHistory: newPageHistory
    });
  };

  createBreadcrumbs = () => {
    const { pageHistory } = this.state;

    return pageHistory && pageHistory.length > 0 ? (
      <Breadcrumb>
      <Breadcrumb.Item onClick={this.clearBreadcrumbs}><span className="labelBread">All</span></Breadcrumb.Item>
     {this.createBreadcrumbItems()}
      
    </Breadcrumb>
  ) : null;
  };

  createBreadcrumbItems = () => {
    const { pageHistory } = this.state;
    const { menuData } = this.props;

    let breadcrumbsItem = [];
    if (pageHistory.length > 1) {
      for (let i = 0; i < pageHistory.length - 1; i++) {
        let copyPageHistory = pageHistory;
        let bcData = copyPageHistory.slice(0, i + 1);
        let data = menuData;
        for (let j = 0; j < bcData.length; j++) {
          if (j === bcData.length - 1) {
            data = data[bcData[j]];
          } else {
            data = this.getChildren(data, bcData[j]);
          }
        }

        breadcrumbsItem.push(
          <Breadcrumb.Item key={i} onClick={() => this.jumpTo(bcData.length)}>
              <a className="labelBread">{data.name}</a>
          </Breadcrumb.Item>
        );
      }
    }

    return breadcrumbsItem;
  };

  jumpTo = historyCount => {
    const { pageHistory } = this.state;

    let newPageHistory = pageHistory;
    newPageHistory = newPageHistory.slice(0, historyCount);

    this.setState({
      pageHistory: newPageHistory
    });
  };

  clearBreadcrumbs = () => {
    this.setState({
      pageHistory: []
    });
  };

  //start of auto-suggest
  getSuggestions = value => {
    const { links, suggestions } = this.state;
    const { menuSearchMaxSuggestion } = this.props;

    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
  
    return inputLength === 0 ? [] : links.filter(link =>
      link.name.toLowerCase().slice(0, inputLength) === inputValue
    ).slice(0, menuSearchMaxSuggestion);
  };

  onChange = (event, { newValue, method }) => {

    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
//end of auto-suggest

  render() {
    const { pageHistory } = this.state;
    const { menuData } = this.props;

    let selectedData = menuData;
    for (let j = 0; j < pageHistory.length; j++) {
      if (j === pageHistory.length - 1) {
        selectedData = selectedData[pageHistory[j]];
      } else {
        selectedData = this.getChildren(selectedData, pageHistory[j]);
      }
    }

    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Search Menu',
      value,
      onChange: this.onChange
    };

    return (
      <div className={classNames("f4Menu_parent")}>
        <div>
          <div>
            {this.createBreadcrumbs()}
            <div className ={classNames("input-group", "menuSearch")}>
              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
                onSuggestionSelected={onSuggestionSelected}
                highlightFirstSuggestion={true}
              />
            </div>
            <span className="currentPath">{selectedData.name}</span>
          </div>
          <Panel>
            <ListGroup>{this.createMenuItems()}</ListGroup>

          </Panel>
        </div>
      </div>
    );
  }
}

F4Menu.propTypes = {
  // props definition
  menuData: PropTypes.oneOfType([PropTypes.array.isRequired, PropTypes.object.isRequired]).isRequired,
  menuSearchMaxSuggestion: PropTypes.number,
  // icon: Proptypes.string.isRequired
};
F4Menu.defaultProps = {
  icon: "fa fa-search",
  menuSearchMaxSuggestion: 5
};

export default F4Menu;

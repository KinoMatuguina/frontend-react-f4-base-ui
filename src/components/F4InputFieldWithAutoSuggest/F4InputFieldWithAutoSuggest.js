/**
* F4InputFieldWithAutoSuggest.js
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Autosuggest from 'react-autosuggest';
import _ from 'underscore';

const DefaultGetSuggestions = ({list, value, valueKey, maxSuggestion}) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  
  return inputLength === 0 ? [] : list.filter(data =>
    {
      let toFilter = data[valueKey].toLowerCase().slice(0, inputLength);
      return toFilter == inputValue;
    }
  ).slice(0, maxSuggestion);
};

const DefaultGetSuggestionValue = ({suggestion, valueKey}) => suggestion[valueKey];

// Use your imagination to render suggestions.
const DefaultRenderSuggestion = ({suggestion, valueKey}) => (
    <a>{suggestion[valueKey]}</a>
);

@observer
class F4InputFieldWithAutoSuggest extends Component {
  constructor(props) {
    super(props);
  }

  onSuggestionsFetchRequested = ({ value }) => {
    const { store, getSuggestions, valueKey, maxSuggestion } = this.props;
    store.suggestions = getSuggestions({list: store.list, value, valueKey, maxSuggestion});
  };

  onSuggestionsClearRequested = () => {
    const { store } = this.props;
    store.suggestions = [];
  };

  onChange = (event, { newValue }) => {
    const { store } = this.props;
    store.value = newValue;
  };

  render() {
    const { store, getSuggestionValue, renderSuggestion, placeholder, valueKey,
      inputFieldProps, autoSuggestProps} = this.props;

    const inputProps = {
      placeholder,
      value: store.value,
      onChange: this.onChange,
      ...inputFieldProps
    };

    let suggestions = _.map(store.suggestions, suggestion => suggestion);

    return (
      <div>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={(suggestion) => getSuggestionValue({suggestion, valueKey})}
          renderSuggestion={(suggestion) => renderSuggestion({suggestion, valueKey})}
          inputProps={inputProps}
          {...autoSuggestProps}
        />
      </div>
    );
  }
}

F4InputFieldWithAutoSuggest.propTypes = {
  store: PropTypes.object.isRequired,
  valueKey: PropTypes.string.isRequired,

  maxSuggestion: PropTypes.number,

  getSuggestionValue: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  renderSuggestion: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

  placeholder: PropTypes.string,

  autoSuggestProps: PropTypes.object,
  inputFieldProps: PropTypes.object
  // props definition
}

F4InputFieldWithAutoSuggest.defaultProps = {
  // default props
  placeholder: "Input text",
  getSuggestions: DefaultGetSuggestions,
  getSuggestionValue: DefaultGetSuggestionValue,
  renderSuggestion: DefaultRenderSuggestion,
  maxSuggestion: 5
}

export default F4InputFieldWithAutoSuggest;
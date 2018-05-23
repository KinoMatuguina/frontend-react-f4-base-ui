'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
            * F4BranchLocator
            */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _googleMapReact = require('google-map-react');

var _googleMapReact2 = _interopRequireDefault(_googleMapReact);

var _UUIDUtil = require('../UUIDUtil');

var UUIDUtil = _interopRequireWildcard(_UUIDUtil);

var _F4LocationMarker = require('./F4LocationMarker');

var _F4LocationMarker2 = _interopRequireDefault(_F4LocationMarker);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4BranchLocator = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(F4BranchLocator, _Component);

  function F4BranchLocator(props) {
    _classCallCheck(this, F4BranchLocator);

    var _this = _possibleConstructorReturn(this, (F4BranchLocator.__proto__ || Object.getPrototypeOf(F4BranchLocator)).call(this, props));

    _this.renderBranchMarkers = _this.renderBranchMarkers.bind(_this);
    _this.loadCurrentLocation = _this.loadCurrentLocation.bind(_this);
    _this.handleOnChildClick = _this.handleOnChildClick.bind(_this);
    _this.createMapOptions = _this.createMapOptions.bind(_this);
    _this.calculateAndDisplayRoute = _this.calculateAndDisplayRoute.bind(_this);
    _this.handleTravelModeChange = _this.handleTravelModeChange.bind(_this);
    _this.refreshCurrentLocation = _this.refreshCurrentLocation.bind(_this);

    _this.state = {
      currentLocation: undefined
    };

    _this.directionsService = undefined;
    _this.directionsDisplay = undefined;

    return _this;
  }

  _createClass(F4BranchLocator, [{
    key: 'handleOnChildClick',
    value: function handleOnChildClick(key, childProps) {
      var _props = this.props,
          name = _props.name,
          onChange = _props.onChange;
      var currentLocation = this.state.currentLocation;

      console.log(childProps);
      if (typeof onChange !== 'undefined' && onChange && typeof childProps.value !== 'undefined') {
        onChange(name, childProps.value);

        if (typeof childProps.lat !== 'undefined' && childProps.lat && typeof childProps.lng !== 'undefined' && childProps.lng) {
          this.calculateAndDisplayRoute(this.directionsService, this.directionsDisplay, currentLocation, { lat: childProps.lat, lng: childProps.lng });
        }
      }
    }
  }, {
    key: 'createMapOptions',
    value: function createMapOptions(maps) {
      return {
        zoomControlOptions: {
          position: maps.ControlPosition.RIGHT_CENTER,
          style: maps.ZoomControlStyle.SMALL
        },
        mapTypeControlOptions: {
          position: maps.ControlPosition.TOP_RIGHT
        },
        mapTypeControl: true
      };
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.getElementById(id + '-mode').removeEventListener('change', this.handleTravelModeChange);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {

      if (typeof props.selectedBranch !== 'undefined' && props.selectedBranch) {
        var currentLocation = this.state.currentLocation;


        this.calculateAndDisplayRoute(this.directionsService, this.directionsDisplay, currentLocation, props.selectedBranch.coords);
      }
    }
  }, {
    key: 'calculateAndDisplayRoute',
    value: function calculateAndDisplayRoute(directionsService, directionsDisplay, origin, destination) {
      var id = this.props.id;


      var selectedMode = document.getElementById(id + '-mode').value;
      directionsService.route({
        origin: origin, // Haight.
        destination: destination, // Ocean Beach.
        // Note that Javascript allows us to access the constant
        // using square brackets and a string value as its
        // "property."
        travelMode: google.maps.TravelMode[selectedMode]
      }, function (response, status) {
        if (status == 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    }
  }, {
    key: 'handleTravelModeChange',
    value: function handleTravelModeChange() {
      var selectedBranch = this.props.selectedBranch;
      var currentLocation = this.state.currentLocation;


      this.calculateAndDisplayRoute(this.directionsService, this.directionsDisplay, currentLocation, selectedBranch.coords);
    }
  }, {
    key: 'refreshCurrentLocation',
    value: function refreshCurrentLocation() {
      var _props2 = this.props,
          id = _props2.id,
          selectedBranch = _props2.selectedBranch;

      var self = this;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {

          var currentLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          self.setState({
            currentLocation: currentLocation
          });

          if (typeof selectedBranch !== 'undefined' && selectedBranch) {
            self.calculateAndDisplayRoute(self.directionsService, self.directionsDisplay, currentLocation, selectedBranch.coords);
          }
        }, function () {
          alert('Geolocation service failed.');
        });
      } else {
        alert('Your browser doesn\'t support geolocation.');
      }
    }
  }, {
    key: 'loadCurrentLocation',
    value: function loadCurrentLocation(googleMapObj) {
      var _props3 = this.props,
          id = _props3.id,
          selectedBranch = _props3.selectedBranch;


      var self = this;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {

          var currentLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          self.setState({
            currentLocation: currentLocation
          });

          self.directionsDisplay = new google.maps.DirectionsRenderer();
          self.directionsService = new google.maps.DirectionsService();

          self.directionsDisplay.setMap(googleMapObj.map);

          document.getElementById(id + '-mode').addEventListener('change', self.handleTravelModeChange);

          if (typeof selectedBranch !== 'undefined' && selectedBranch) {
            self.calculateAndDisplayRoute(self.directionsService, self.directionsDisplay, currentLocation, selectedBranch.coords);
          }
        }, function () {
          alert('Geolocation service failed.');
        });
      } else {
        alert('Your browser doesn\'t support geolocation.');
      }
    }
  }, {
    key: 'renderBranchMarkers',
    value: function renderBranchMarkers() {
      var _props4 = this.props,
          branchList = _props4.branchList,
          selectedBranch = _props4.selectedBranch;


      var branchMarkerNodes = [];
      if (typeof branchList !== 'undefined' && branchList && branchList.length > 0) {
        branchMarkerNodes = branchList.map(function (branch) {
          var key = UUIDUtil.get();

          if (selectedBranch && selectedBranch.branch) {
            var isSelected = branch.branch === selectedBranch.branch;
            return _react2.default.createElement(_F4LocationMarker2.default, _extends({ key: key, isSelected: isSelected, icon: 'bank' }, branch.coords, { hintText: branch.branch, value: branch.branch }));
          }
        });
      }

      return branchMarkerNodes;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props5 = this.props,
          apiKey = _props5.apiKey,
          selectedBranch = _props5.selectedBranch,
          id = _props5.id,
          currentLocationHintText = _props5.currentLocationHintText;


      var mapCenter = this.props.center;
      var mapZoom = this.props.zoom;

      if (selectedBranch !== null && typeof selectedBranch !== 'undefined' && typeof selectedBranch.coords !== 'undefined') {

        mapCenter = selectedBranch.coords;
        mapZoom = 16;
      }

      return _react2.default.createElement(
        'div',
        { className: 'f4BranchLocator', style: { width: '100%', height: '400px', marginBottom: '30px' } },
        _react2.default.createElement(
          'div',
          { id: id + '-floating-panel', style: {
              position: 'absolute',
              top: '10px',
              left: '1%',
              zIndex: 5,
              fontSize: '11px',
              padding: '8px',
              boxShadow: 'rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px',
              backgroundColor: 'white',
              backgroundClip: 'padding-box',
              textAlign: 'center',
              lineHeight: '30px',
              borderBottomLeftRadius: '2px',
              borderTopLeftRadius: '2px'
            } },
          _react2.default.createElement(
            'b',
            null,
            'Mode of Travel: '
          ),
          _react2.default.createElement(
            'select',
            { id: id + '-mode' },
            _react2.default.createElement(
              'option',
              { value: 'DRIVING' },
              'Driving'
            ),
            _react2.default.createElement(
              'option',
              { value: 'WALKING' },
              'Walking'
            ),
            _react2.default.createElement(
              'option',
              { value: 'BICYCLING' },
              'Bicycling'
            ),
            _react2.default.createElement(
              'option',
              { value: 'TRANSIT' },
              'Transit'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { id: id + '-currentLocationBtnContainer', style: {
              position: 'absolute',
              width: '30px',
              height: '30px',
              top: '70px',
              left: '1%',
              zIndex: 5,
              fontSize: '11px',
              padding: '4px',
              boxShadow: 'rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px',
              backgroundColor: 'white',
              backgroundClip: 'padding-box',
              textAlign: 'center',
              lineHeight: '30px',
              borderRadius: '2px',
              cursor: 'pointer'
            } },
          _react2.default.createElement(
            'span',
            { title: 'Geolocation', onClick: this.refreshCurrentLocation, style: { color: 'rgb(0, 176, 255)', width: '22px', height: '22px' } },
            _react2.default.createElement(_reactFontawesome2.default, { name: 'crosshairs', size: '2x' })
          )
        ),
        _react2.default.createElement(
          _googleMapReact2.default,
          {
            bootstrapURLKeys: {
              key: apiKey
            },
            defaultCenter: this.props.center,
            defaultZoom: this.props.zoom,
            center: mapCenter,
            zoom: mapZoom,
            options: this.createMapOptions,
            onGoogleApiLoaded: this.loadCurrentLocation,
            onChildClick: this.handleOnChildClick
          },
          this.renderBranchMarkers(),
          typeof this.state.currentLocation !== 'undefined' && this.state.currentLocation && _react2.default.createElement(_F4LocationMarker2.default, _extends({ icon: 'CURRENT' }, this.state.currentLocation, { hintText: currentLocationHintText }))
        )
      );
    }
  }]);

  return F4BranchLocator;
}(_react.Component)) || _class;

exports.default = F4BranchLocator;


F4BranchLocator.propTypes = {
  id: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  apiKey: _propTypes2.default.string.isRequired,
  center: _propTypes2.default.object,
  zoom: _propTypes2.default.number,
  currentLocationHintText: _propTypes2.default.string
};

F4BranchLocator.defaultProps = {
  center: { lat: 11.5575329, lng: 120.0526159 },
  zoom: 6,
  currentLocationHintText: "You are here."
};
module.exports = exports['default'];
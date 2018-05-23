/**
* F4BranchLocator
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { observer } from 'mobx-react';
import FontAwesome from 'react-fontawesome';

import GoogleMap from 'google-map-react';
import * as UUIDUtil from '../UUIDUtil';

import F4LocationMarker from './F4LocationMarker';

@observer
export default class F4BranchLocator extends Component {
  constructor(props) {
    super(props);

    this.renderBranchMarkers = this.renderBranchMarkers.bind(this);
    this.loadCurrentLocation = this.loadCurrentLocation.bind(this);
    this.handleOnChildClick = this.handleOnChildClick.bind(this);
    this.createMapOptions = this.createMapOptions.bind(this);
    this.calculateAndDisplayRoute = this.calculateAndDisplayRoute.bind(this);
    this.handleTravelModeChange = this.handleTravelModeChange.bind(this);
    this.refreshCurrentLocation = this.refreshCurrentLocation.bind(this);

    this.state = {
      currentLocation: undefined
    }

    this.directionsService = undefined;
    this.directionsDisplay = undefined;

  }
  handleOnChildClick(key, childProps) {

    const { name, onChange } = this.props;
    const { currentLocation } = this.state;
    console.log(childProps);
    if (typeof onChange !== 'undefined' && onChange && typeof childProps.value !== 'undefined') {
      onChange(name, childProps.value);

      if (typeof childProps.lat !== 'undefined' && childProps.lat && typeof childProps.lng !== 'undefined' && childProps.lng) {
        this.calculateAndDisplayRoute(this.directionsService, this.directionsDisplay, currentLocation, { lat: childProps.lat, lng: childProps.lng});
      }
    }
  }
  createMapOptions(maps) {
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
  componentWillUnmount() {
    document.getElementById(`${id}-mode`).removeEventListener('change', this.handleTravelModeChange);
  }
  componentWillReceiveProps(props) {

    if (typeof props.selectedBranch !== 'undefined' && props.selectedBranch) {
      const { currentLocation } = this.state;

      this.calculateAndDisplayRoute(this.directionsService, this.directionsDisplay, currentLocation, props.selectedBranch.coords);
    }
  }
  calculateAndDisplayRoute(directionsService, directionsDisplay, origin, destination) {

    const { id } = this.props;

    const selectedMode = document.getElementById(`${id}-mode`).value;
    directionsService.route({
      origin: origin,  // Haight.
      destination: destination,  // Ocean Beach.
      // Note that Javascript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      travelMode: google.maps.TravelMode[selectedMode]
    }, function(response, status) {
      if (status == 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
  handleTravelModeChange() {

    const { selectedBranch } = this.props;
    const { currentLocation } = this.state;

    this.calculateAndDisplayRoute(this.directionsService, this.directionsDisplay, currentLocation, selectedBranch.coords);
  }
  refreshCurrentLocation() {

    const { id, selectedBranch } = this.props;
    const self = this;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {

        const currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        self.setState({
          currentLocation: currentLocation
        });

        if (typeof selectedBranch !== 'undefined' && selectedBranch) {
          self.calculateAndDisplayRoute(self.directionsService, self.directionsDisplay, currentLocation, selectedBranch.coords);
        }


      }, function() {
        alert('Geolocation service failed.');
      });
    } else {
      alert('Your browser doesn\'t support geolocation.')
    }
  }
  loadCurrentLocation(googleMapObj) {

    const { id, selectedBranch } = this.props;

    const self = this;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {

        const currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        self.setState({
          currentLocation: currentLocation
        });

        self.directionsDisplay = new google.maps.DirectionsRenderer;
        self.directionsService = new google.maps.DirectionsService;

        self.directionsDisplay.setMap(googleMapObj.map);

        document.getElementById(`${id}-mode`).addEventListener('change', self.handleTravelModeChange);

        if (typeof selectedBranch !== 'undefined' && selectedBranch) {
          self.calculateAndDisplayRoute(self.directionsService, self.directionsDisplay, currentLocation, selectedBranch.coords);
        }


      }, function() {
        alert('Geolocation service failed.');
      });
    } else {
      alert('Your browser doesn\'t support geolocation.')
    }
  }
  renderBranchMarkers() {

    const { branchList, selectedBranch } = this.props;

    let branchMarkerNodes = [];
    if (typeof branchList !== 'undefined' && branchList && branchList.length > 0) {
      branchMarkerNodes = branchList.map((branch) => {
        let key = UUIDUtil.get();

        if (selectedBranch && selectedBranch.branch) {
          const isSelected = (branch.branch === selectedBranch.branch);
          return (
            <F4LocationMarker key={key} isSelected={isSelected} icon="bank" {...branch.coords} hintText={branch.branch} value={branch.branch}/>
          )
        }
      });
    }

    return branchMarkerNodes;
  }
  render() {

    const { apiKey, selectedBranch, id, currentLocationHintText } = this.props;

    let mapCenter = this.props.center;
    let mapZoom = this.props.zoom;

    if (selectedBranch !== null && typeof selectedBranch !== 'undefined' && typeof selectedBranch.coords !== 'undefined') {

      mapCenter = selectedBranch.coords;
      mapZoom = 16;

    }

    return (
      <div className="f4BranchLocator" style={{width: '100%', height: '400px', marginBottom: '30px'}}>
        <div id={`${id}-floating-panel`} style={{
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
        }}>
          <b>Mode of Travel: </b>
          <select id={`${id}-mode`}>
            <option value="DRIVING">Driving</option>
            <option value="WALKING">Walking</option>
            <option value="BICYCLING">Bicycling</option>
            <option value="TRANSIT">Transit</option>
          </select>
        </div>
        <div id={`${id}-currentLocationBtnContainer`} style={{
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
        }}>
          <span title="Geolocation" onClick={this.refreshCurrentLocation} style={{ color: 'rgb(0, 176, 255)', width: '22px', height: '22px'}}><FontAwesome name="crosshairs" size="2x"/></span>
        </div>
        <GoogleMap
          bootstrapURLKeys={{
            key: apiKey
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          center={mapCenter}
          zoom={mapZoom}
          options={this.createMapOptions}
          onGoogleApiLoaded={this.loadCurrentLocation}
          onChildClick={this.handleOnChildClick}
        >

          { this.renderBranchMarkers() }
          { (typeof this.state.currentLocation !== 'undefined' && this.state.currentLocation) &&
            <F4LocationMarker icon="CURRENT" {...this.state.currentLocation} hintText={currentLocationHintText} />
          }
        </GoogleMap>
      </div>
    )

  }
}

F4BranchLocator.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  apiKey: PropTypes.string.isRequired,
  center: PropTypes.object,
  zoom: PropTypes.number,
  currentLocationHintText: PropTypes.string
};

F4BranchLocator.defaultProps = {
  center: { lat: 11.5575329, lng: 120.0526159 },
  zoom: 6,
  currentLocationHintText: "You are here."
}

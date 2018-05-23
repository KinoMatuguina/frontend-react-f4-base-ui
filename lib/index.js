'use strict';

var _components = require('./components');

var BaseComponents = _interopRequireWildcard(_components);

var _containers = require('./containers');

var BaseContainers = _interopRequireWildcard(_containers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = {
  BaseComponents: BaseComponents,
  BaseContainers: BaseContainers
};
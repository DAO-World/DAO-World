'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-ef426d0f.js');
require('./unsupportedIterableToArray-8a00e599.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
require('./index-b0606964.js');
require('./defineProperty-0921a47c.js');
require('styled-components');
require('./miscellaneous.js');
require('./environment.js');
require('./font.js');
require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
require('./text-styles.js');
var _extends = require('./extends-40571110.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');
require('./index-ecc57c9f.js');
var IconPropTypes = require('./IconPropTypes-086fd371.js');

function IconArrowRight(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties._objectWithoutProperties(_ref, ["size"]);

  var sizeValue = IconPropTypes.useIconSize(size);
  return /*#__PURE__*/React__default.createElement("svg", _extends._extends({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M5.566 12.566h12.869a.566.566 0 000-1.132H5.565a.566.566 0 100 1.132z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M17.634 12l-4.426 4.426a.566.566 0 00.8.8l4.826-4.826a.566.566 0 000-.8l-4.826-4.826a.564.564 0 00-.8 0 .566.566 0 000 .8L17.634 12z"
  }));
}

IconArrowRight.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconArrowRight;
//# sourceMappingURL=IconArrowRight.js.map

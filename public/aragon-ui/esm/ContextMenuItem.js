import './slicedToArray-19bf668e.js';
import './unsupportedIterableToArray-fbb818bf.js';
import React from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import './index-097535f1.js';
import './defineProperty-a0480c32.js';
import './toConsumableArray-261b678d.js';
import _styled from 'styled-components';
import './getPrototypeOf-5905040a.js';
import './color.js';
import './components.js';
import './contains-component.js';
import { unselectable } from './css.js';
import './dayjs.min-04cb64ac.js';
import './date.js';
import './miscellaneous.js';
import './environment.js';
import './font.js';
import './math-934b2e15.js';
import './characters.js';
import './format.js';
import './keycodes.js';
import './url.js';
import './web3.js';
import './constants.js';
import './breakpoints.js';
import './springs.js';
import { textStyle } from './text-styles.js';
import './theme-dark.js';
import './theme-light.js';
import { useTheme } from './Theme.js';
import { _ as _extends } from './extends-db4f0c26.js';
import './objectWithoutProperties-234758e1.js';
import './FocusVisible.js';
import ButtonBase from './ButtonBase.js';

var _StyledButtonBase = _styled(ButtonBase).withConfig({
  displayName: "ContextMenuItem___StyledButtonBase",
  componentId: "sc-6mg7lj-0"
})(["display:flex;align-items:center;padding:5px 16px 5px 10px;cursor:pointer;white-space:nowrap;width:100%;", " ", ";&:active{background:", ";}"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

var ContextMenuItem = /*#__PURE__*/React.memo(function ContextMenuItem(props) {
  var theme = useTheme();
  return /*#__PURE__*/React.createElement(_StyledButtonBase, _extends({}, props, {
    _css: textStyle('body2'),
    _css2: unselectable(),
    _css3: theme.surfacePressed
  }));
});

export default ContextMenuItem;
//# sourceMappingURL=ContextMenuItem.js.map

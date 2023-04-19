"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SitesConfig = void 0;
var _react = _interopRequireDefault(require("react"));
var _Abstract = require("../../Abstract");
var SitesConfig = function SitesConfig(_ref) {
  var actions = _ref.actions,
    useSitesConfig = _ref.useSitesConfig;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Abstract.Step, {
    step: "3",
    title: "Configuraci\xF3n del sitio",
    buttonReturnTitle: "Atr\xE1s",
    buttonReturnStyles: {
      backgroundColor: '#c12429'
    },
    buttonReturnProps: {
      onClick: actions.onSites
    },
    buttonNextTitle: "Siguiente",
    buttonNextProps: {
      onClick: actions.nextConfigSite,
      id: 'buttonNextConfigSite'
    }
  }), /*#__PURE__*/_react["default"].createElement(_Abstract.SiteConfig, {
    useSitesConfig: useSitesConfig
  }));
};
exports.SitesConfig = SitesConfig;
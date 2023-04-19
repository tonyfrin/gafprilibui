"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SitesInfo = void 0;
var _react = _interopRequireDefault(require("react"));
var _Abstract = require("../../Abstract");
var SitesInfo = function SitesInfo(_ref) {
  var actions = _ref.actions,
    useSites = _ref.useSites;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Abstract.Step, {
    step: "2",
    title: "Informaci\xF3n del sitio",
    buttonReturnTitle: "Atr\xE1s",
    buttonReturnStyles: {
      backgroundColor: '#c12429'
    },
    buttonReturnProps: {
      onClick: actions.onConfig
    },
    buttonNextTitle: "Siguiente",
    buttonNextProps: {
      onClick: actions.nextInfoSite,
      id: 'buttonNextInfoSite'
    }
  }), /*#__PURE__*/_react["default"].createElement(_Abstract.SiteInfo, {
    useSites: useSites
  }));
};
exports.SitesInfo = SitesInfo;
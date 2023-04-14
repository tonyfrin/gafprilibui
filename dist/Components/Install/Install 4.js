"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Install = void 0;
var _react = _interopRequireDefault(require("react"));
var _Abstract = require("../../Abstract");
var _states = require("../../states");
var _index = require("../index");
var _SitesInfo = require("./SitesInfo");
var _SitesConfig = require("./SitesConfig");
var _TypesDocument = require("./TypesDocument");
var _Users = require("./Users");
var _Category = require("./Category");
var _Projects = require("./Projects");
var Install = function Install(_ref) {
  var mainActions = _ref.mainActions,
    mainState = _ref.mainState;
  var useGafpri = {
    actions: mainActions,
    states: mainState
  };
  var _useGafpriInstall = (0, _states.useGafpriInstall)(useGafpri),
    states = _useGafpriInstall.states,
    actions = _useGafpriInstall.actions,
    useSites = _useGafpriInstall.useSites,
    useCurrency = _useGafpriInstall.useCurrency,
    useSitesConfig = _useGafpriInstall.useSitesConfig,
    useTypeDocument = _useGafpriInstall.useTypeDocument,
    useUser = _useGafpriInstall.useUser,
    useCategory = _useGafpriInstall.useCategory,
    useProjects = _useGafpriInstall.useProjects;
  return /*#__PURE__*/_react["default"].createElement(_Abstract.Box1, null, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Abstract.Title1, {
    title: "Configuraci\xF3n"
  }), /*#__PURE__*/_react["default"].createElement(_Abstract.Title2, {
    title: "Nueva tienda Gafpri"
  }), states.isConfig ? /*#__PURE__*/_react["default"].createElement(_index.Curriencies, {
    states: states,
    actions: actions,
    useCurrency: useCurrency
  }) : '', states.isSites ? /*#__PURE__*/_react["default"].createElement(_SitesInfo.SitesInfo, {
    actions: actions,
    useSites: useSites
  }) : '', states.isConfigSite ? /*#__PURE__*/_react["default"].createElement(_SitesConfig.SitesConfig, {
    actions: actions,
    useSitesConfig: useSitesConfig
  }) : '', states.isTypeDucument ? /*#__PURE__*/_react["default"].createElement(_TypesDocument.TypesDocument, {
    actions: actions,
    useTypeDocument: useTypeDocument
  }) : '', states.isUser ? /*#__PURE__*/_react["default"].createElement(_Users.Users, {
    actions: actions,
    useUser: useUser
  }) : '', states.isCategory ? /*#__PURE__*/_react["default"].createElement(_Category.Category, {
    actions: actions,
    useCategory: useCategory
  }) : '', states.isProjects ? /*#__PURE__*/_react["default"].createElement(_Projects.Projects, {
    actions: actions,
    useProjects: useProjects
  }) : '', states.isFinal ? /*#__PURE__*/_react["default"].createElement("h1", null, "Se instalado la tienda") : ''));
};
exports.Install = Install;
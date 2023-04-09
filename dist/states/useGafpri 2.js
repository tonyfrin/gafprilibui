"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpri = useGafpri;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _helpers = require("../helpers");
var _reducerObject;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var initialState = function initialState() {
  return {
    source: {
      api: 'http://localhost:4000',
      url: 'https://prueba.tiendasgafpri.com'
    },
    isInstalled: true,
    isFetching: false
  };
};
var actionTypes = {
  isInstalled: 'INSTALLED',
  isFetching: 'FETCHING',
  notInstalled: 'NOT_INSTALLED'
};
var reducerObject = (_reducerObject = {}, (0, _defineProperty2["default"])(_reducerObject, actionTypes.isInstalled, function (state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    isInstalled: true,
    isFetching: false
  });
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.isFetching, function (state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    isInstalled: false,
    isFetching: true
  });
}), (0, _defineProperty2["default"])(_reducerObject, actionTypes.notInstalled, function (state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    isInstalled: false,
    isFetching: false
  });
}), _reducerObject);
var reducer = function reducer(state, action) {
  return reducerObject[action.type](state, action.payload) || state;
};
function useGafpri() {
  var _React$useReducer = _react["default"].useReducer(reducer, initialState()),
    _React$useReducer2 = (0, _slicedToArray2["default"])(_React$useReducer, 2),
    state = _React$useReducer2[0],
    dispatch = _React$useReducer2[1];
  var source = state.source,
    isInstalled = state.isInstalled,
    isFetching = state.isFetching;

  /**
   * CURRENCY
   *
   *
   */
  var onInstalled = function onInstalled() {
    return dispatch({
      type: actionTypes.isInstalled
    });
  };
  var onFetching = function onFetching() {
    return dispatch({
      type: actionTypes.isFetching
    });
  };
  var notInstalled = function notInstalled() {
    return dispatch({
      type: actionTypes.notInstalled
    });
  };
  var successCheck = function successCheck(data) {
    if (data.success) {
      notInstalled();
    } else {
      onInstalled();
    }
  };
  var check = function check() {
    (0, _helpers.gafpriFetch)({
      initMethod: 'GET',
      initApi: 'http://localhost:4000',
      initRoute: 'api/v1/install/check',
      functionFetching: onFetching,
      functionSuccess: successCheck,
      functionError: successCheck
    });
  };
  _react["default"].useEffect(function () {
    check();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  /**
   * Export
   *
   *
   */
  var states = {
    isInstalled: isInstalled,
    isFetching: isFetching,
    source: source
  };
  var actions = {
    onInstalled: onInstalled,
    onFetching: onFetching
  };
  return {
    states: states,
    actions: actions
  };
}
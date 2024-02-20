"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriApiBudget = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _constants = require("../../../constants");
var _helpers = require("../../../helpers");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var useGafpriApiBudget = function useGafpriApiBudget(_ref) {
  var usePages = _ref.usePages,
    useAttributes = _ref.useAttributes,
    useProductItems = _ref.useProductItems,
    useError = _ref.useError,
    token = _ref.token;
  var newError = function newError(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: usePages.actions.onSales
    });
  };
  var newErrorUpdate = function newErrorUpdate(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: usePages.actions.returnInit
    });
  };
  var add = function add() {
    if (useAttributes.states.customerIdValid && useAttributes.states.referredIdValid && useProductItems.actions.calculateTotal() > 0 && token) {
      var payload = {
        customerId: useAttributes.states.customerId,
        note: useAttributes.states.note,
        orderItems: useProductItems.states.shoppingCart,
        posts: {
          visibility: 'public'
        }
      };
      var updatedPayload = _objectSpread(_objectSpread({}, payload), useAttributes.states.referredId !== 0 ? {
        referredId: useAttributes.states.referredId
      } : {
        referredId: null
      });
      (0, _helpers.gafpriFetch)({
        initMethod: 'POST',
        initRoute: _constants.BUDGET_ROUTE,
        initCredentials: updatedPayload,
        initToken: {
          token: token
        },
        functionFetching: usePages.actions.onFetching,
        functionSuccess: usePages.actions.returnInit,
        functionError: newError
      });
    }
  };
  var update = function update() {
    if (useAttributes.states.customerIdValid && useAttributes.states.referredIdValid && useProductItems.actions.calculateTotal() > 0 && token) {
      var payload = {
        customerId: useAttributes.states.customerId,
        referredId: useAttributes.states.referredId,
        note: useAttributes.states.note,
        orderItems: useProductItems.states.shoppingCart
      };
      (0, _helpers.gafpriFetch)({
        initMethod: 'PATCH',
        initRoute: "".concat(_constants.BUDGET_ROUTE, "/").concat(useAttributes.states.currentId),
        initCredentials: payload,
        initToken: {
          token: token
        },
        functionFetching: usePages.actions.onFetching,
        functionSuccess: usePages.actions.returnInit,
        functionError: newErrorUpdate
      });
    }
  };

  // Define las acciones necesarias para los atributos de Site
  var actions = {
    newError: newError,
    newErrorUpdate: newErrorUpdate,
    add: add,
    update: update
  };
  return {
    actions: actions
  };
};
exports.useGafpriApiBudget = useGafpriApiBudget;
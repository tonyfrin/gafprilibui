"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAttributesBudgetItems = useGafpriAttributesBudgetItems;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function useGafpriAttributesBudgetItems(_ref) {
  var useError = _ref.useError;
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    subTotal = _useState2[0],
    setSubTotal = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    subTotalTax = _useState4[0],
    setSubTotalTax = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    total = _useState6[0],
    setTotal = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    type = _useState8[0],
    setType = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    taxClass = _useState10[0],
    setTaxClass = _useState10[1];
  var _useState11 = (0, _react.useState)([]),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    shoppingCart = _useState12[0],
    setShoppingCart = _useState12[1];
  var infoReset = function infoReset() {
    setSubTotal('');
    setSubTotalTax('');
    setTotal('');
    setType('');
    setTaxClass('');
    setShoppingCart([]);
  };

  // Validation Functions
  var validationShoppingCart = function validationShoppingCart(value) {
    return value.length <= 20;
  };

  // Funciones de Change

  var changeShoppingCart = function changeShoppingCart(value) {
    var valid = validationShoppingCart([].concat((0, _toConsumableArray2["default"])(shoppingCart), [value]));
    if (valid) {
      setShoppingCart(function (prevCart) {
        return [].concat((0, _toConsumableArray2["default"])(prevCart), [value]);
      });
    } else {
      useError.actions.changeError(['No se pueden agregar más de 20 productos al carrito']);
    }
  };
  var voidShoppingCart = function voidShoppingCart() {
    setShoppingCart([]);
  };
  var updateShoppingCartItem = function updateShoppingCartItem(index, updatedItem) {
    setShoppingCart(function (prevCart) {
      var updatedCart = (0, _toConsumableArray2["default"])(prevCart);
      if (index >= 0 && index < updatedCart.length) {
        updatedCart[index] = updatedItem;
      }
      return updatedCart;
    });
  };
  var removeShoppingCartItem = function removeShoppingCartItem(index) {
    setShoppingCart(function (prevCart) {
      var updatedCart = (0, _toConsumableArray2["default"])(prevCart);
      if (index >= 0 && index < updatedCart.length) {
        updatedCart.splice(index, 1);
      }
      return updatedCart;
    });
  };
  var calculateSubTotal = function calculateSubTotal() {
    return shoppingCart.reduce(function (acc, item) {
      var newSubTotal = item.qty * item.price;
      return acc + newSubTotal;
    }, 0);
  };
  var calculateSubTotalTax = function calculateSubTotalTax() {
    return shoppingCart.reduce(function (acc, item) {
      var newSubTotalTax = item.qty * item.price * 0;
      return acc + newSubTotalTax;
    }, 0);
  };
  var calculateTotal = function calculateTotal() {
    var newSubTotal = calculateSubTotal();
    setSubTotal("".concat(newSubTotal));
    var newSubTotalTax = calculateSubTotalTax();
    setSubTotalTax("".concat(newSubTotalTax));
    var newTotal = newSubTotal + newSubTotalTax;
    setTotal("".concat(newTotal));
    return newTotal;
  };
  var addItemToCart = function addItemToCart(product) {
    var _parseFloat;
    var item = {
      productsPostsId: product.postsId,
      sku: product.sku,
      name: product.name,
      cost: (_parseFloat = parseFloat("".concat(product.cost))) !== null && _parseFloat !== void 0 ? _parseFloat : 0,
      qty: 1,
      price: parseFloat("".concat(product.salesPrice)),
      type: product.type,
      taxClass: product.taxClass || ''
    };
    var valid = validationShoppingCart([].concat((0, _toConsumableArray2["default"])(shoppingCart), [item]));
    if (valid) {
      setShoppingCart(function (prevCart) {
        return [].concat((0, _toConsumableArray2["default"])(prevCart), [item]);
      });
    } else {
      useError.actions.changeError(['No se pueden agregar más de 20 productos al carrito']);
    }
  };
  var updateQtyItemCart = function updateQtyItemCart(index, value) {
    setShoppingCart(function (prevCartItems) {
      return prevCartItems.map(function (product, i) {
        if (index === i) {
          var newValue = value === '' ? 0 : parseFloat(value);
          if (newValue >= 0) {
            return _objectSpread(_objectSpread({}, product), {}, {
              qty: newValue
            });
          }
          return product;
        }
        return product;
      });
    });
  };
  var updatePriceItemCart = function updatePriceItemCart(index, value) {
    setShoppingCart(function (prevCartItems) {
      return prevCartItems.map(function (product, i) {
        if (index === i) {
          var newValue = value === '' ? 0 : parseFloat(value);
          if (newValue >= 0) {
            return _objectSpread(_objectSpread({}, product), {}, {
              price: newValue
            });
          }
          return product;
        }
        return product;
      });
    });
  };
  _react["default"].useEffect(function () {
    calculateTotal();
  }, [shoppingCart]); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Export
   *
   *
   */
  var states = {
    subTotal: subTotal,
    subTotalTax: subTotalTax,
    total: total,
    type: type,
    taxClass: taxClass,
    shoppingCart: shoppingCart
  };
  var actions = {
    validationShoppingCart: validationShoppingCart,
    changeShoppingCart: changeShoppingCart,
    voidShoppingCart: voidShoppingCart,
    updateShoppingCartItem: updateShoppingCartItem,
    removeShoppingCartItem: removeShoppingCartItem,
    infoReset: infoReset,
    calculateSubTotal: calculateSubTotal,
    calculateSubTotalTax: calculateSubTotalTax,
    calculateTotal: calculateTotal,
    addItemToCart: addItemToCart,
    updateQtyItemCart: updateQtyItemCart,
    updatePriceItemCart: updatePriceItemCart
  };
  return {
    states: states,
    actions: actions
  };
}
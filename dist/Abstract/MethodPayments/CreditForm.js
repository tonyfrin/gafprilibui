"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreditForm = void 0;
var _react = _interopRequireDefault(require("react"));
var _Input = require("../Input");
var _Containers = require("../Containers");
var _Form = require("../Form");
var _Span = require("../Span");
var _Components = require("src/Components");
var CreditForm = exports.CreditForm = function CreditForm(_ref) {
  var _order$orderCustomer$, _order$orderCustomer$2;
  var useError = _ref.useError,
    siteOptions = _ref.siteOptions,
    useOrder = _ref.useOrder,
    currentPaymentInfo = _ref.currentPaymentInfo,
    usePayment = _ref.usePayment,
    useCurrencies = _ref.useCurrencies;
  var siteCurrency = useCurrencies.actions.getById(siteOptions.currencyId);
  var order = useOrder.data.actions.getById(currentPaymentInfo.orderPostsId);
  if (!order) return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Components.Loading, null));
  var setChange = function setChange(e) {
    var value = e.target.value;
    usePayment.useGeneralPaymentMethods.useCreditOpening.actions.setAmount(parseFloat(value));
    usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setAmount(parseFloat(value));
    usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setChange(parseFloat(value));
  };
  _react["default"].useEffect(function () {
    usePayment.useGeneralPaymentMethods.useCreditOpening.actions.setAmount(currentPaymentInfo.difference);
    usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setAmount(currentPaymentInfo.difference);
    usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setChange(currentPaymentInfo.difference);
  }, []);
  var title1Text = 'Modulo de pago';
  var title2Text = 'Agrega un nuevo credito';
  var buttonTitle = 'Procesar';
  var buttonAction = currentPaymentInfo.add;
  var buttonReturn = function buttonReturn() {
    currentPaymentInfo.infoReset();
    currentPaymentInfo.returnInit();
  };
  var handleActions = function handleActions(action, value) {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        buttonReturn();
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_Form.ModelForm, {
    titles: {
      title1: title1Text,
      title2: title2Text
    },
    buttonTitles: {
      mainButton: buttonTitle,
      returnButton: 'Volver'
    },
    handleActions: handleActions,
    error: useError.states.error,
    buttonNextId: currentPaymentInfo.buttonNextId,
    boxProps: {
      styles: {
        height: 'auto',
        width: 'auto',
        padding: '20px'
      }
    },
    returnButtonConatinerStyle: "padding-button: 0px;"
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      custom: "\n              margin: 20px 0px;\n              padding-left: 5%;\n            "
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
    value: "Cliente: ",
    containerStyles: {
      margin: '0px 15px 0px 0px',
      custom: "\n                  font-weight: 700;\n                  font-size: 20px;\n                "
    }
  }), /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
    containerStyles: {
      margin: '0',
      custom: "\n                  font-weight: 700;\n                  font-size: 20px;\n                "
    },
    value: (_order$orderCustomer$ = order.orderCustomer[0]) !== null && _order$orderCustomer$ !== void 0 && _order$orderCustomer$.lastName ? "".concat(order.orderCustomer[0].name, " ").concat((_order$orderCustomer$2 = order.orderCustomer[0]) === null || _order$orderCustomer$2 === void 0 ? void 0 : _order$orderCustomer$2.lastName) : "".concat(order.orderCustomer[0].name)
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, siteCurrency && /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    inputProps: {
      onChange: function onChange(e) {
        return setChange(e);
      },
      title: "Monto en ".concat(siteCurrency.name, " ").concat(siteCurrency.symbol),
      type: 'number',
      step: '0.01',
      defaultValue: "".concat(currentPaymentInfo.amount)
    },
    styles: {
      width: '100%'
    }
  })))));
};
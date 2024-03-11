"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpensesCrForm = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _Input = require("../Input");
var _Containers = require("../Containers");
var _Form = require("../Form");
var _Span = require("../Span");
var _helpers = require("../../helpers");
var ExpensesCrForm = exports.ExpensesCrForm = function ExpensesCrForm(_ref) {
  var _use$attributes$state, _use$attributes$state2, _use$attributes$state3, _use$attributes$state4, _use$attributes$state5;
  var use = _ref.use,
    siteOptions = _ref.siteOptions,
    useCurrencies = _ref.useCurrencies;
  var _React$useState = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    InputProjects = _React$useState2[0],
    setInputProjects = _React$useState2[1];
  var _React$useState3 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    InputExpensesType = _React$useState4[0],
    setInputExpensesType = _React$useState4[1];
  var _React$useState5 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    InputCurrencies = _React$useState6[0],
    setInputCurrencies = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(null),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    currentCurrency = _React$useState8[0],
    setCurrentCurrency = _React$useState8[1];
  var supplierName = (_use$attributes$state = use.attributes.states) !== null && _use$attributes$state !== void 0 && _use$attributes$state.entity ? (_use$attributes$state2 = use.attributes.states.entity) !== null && _use$attributes$state2 !== void 0 && _use$attributes$state2.lastName ? "".concat((_use$attributes$state3 = use.attributes.states.entity) === null || _use$attributes$state3 === void 0 ? void 0 : _use$attributes$state3.name, " ").concat((_use$attributes$state4 = use.attributes.states.entity) === null || _use$attributes$state4 === void 0 ? void 0 : _use$attributes$state4.lastName) : (_use$attributes$state5 = use.attributes.states.entity) === null || _use$attributes$state5 === void 0 ? void 0 : _use$attributes$state5.name : '';
  var siteCurrency = useCurrencies.actions.getById(siteOptions.currencyId);
  var changeAmount = function changeAmount(e) {
    var value = e.target.value;
    if (siteOptions.currencyId === use.attributes.states.currencyId) {
      //cashTransactions
      use.attributes.usePayment.useGeneralPaymentMethods.useCashTransactions.actions.setAmount(parseFloat(value));
      use.attributes.usePayment.useGeneralPaymentMethods.useCashTransactions.actions.setChange(parseFloat(value));

      //paymentMethods
      use.attributes.usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setAmount(parseFloat(value));
      use.attributes.usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setChange(parseFloat(value));

      //Payment
      use.attributes.usePayment.actions.setTotal(value);
    }
    if (siteOptions.currencyId !== use.attributes.states.currencyId) {
      //cashTransactions
      use.attributes.usePayment.useGeneralPaymentMethods.useCashTransactions.actions.setAmount(parseFloat(value));

      //paymentMethods
      use.attributes.usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setAmount(parseFloat(value));
    }
  };
  var setChange = function setChange(e) {
    var value = e.target.value;
    if (siteOptions.currencyId !== use.attributes.states.currencyId) {
      //cashTransactions
      use.attributes.usePayment.useGeneralPaymentMethods.useCashTransactions.actions.setChange(parseFloat(value));

      //paymentMethods
      use.attributes.usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setChange(parseFloat(value));

      //Payment
      use.attributes.usePayment.actions.setTotal(value);
    }
  };
  var add = function add() {
    use.attributes.actions.addCashTransaction();
    use.api.actions.add();
  };
  _react["default"].useEffect(function () {
    if (use.attributes.states.currencyId !== 0) {
      setCurrentCurrency(useCurrencies.actions.getById(use.attributes.states.currencyId));
    }
  }, [use.attributes.states.currencyId]);
  _react["default"].useEffect(function () {
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.supplierIdValid, use.attributes.states.expensesTypeIdValid, use.attributes.states.projectsPostsIdValid, use.attributes.states.currencyIdValid]);
  _react["default"].useEffect(function () {
    setInputProjects(function () {
      return /*#__PURE__*/_react["default"].createElement(_Input.SelectProjectId, {
        change: function change(e) {
          return use.attributes.actions.changeProjectsPostsId(e);
        },
        props: {
          options: use.attributes.states.projectsPostsIdOptions,
          defaultValue: use.attributes.states.projectsPostsIdDefault,
          styles: {
            width: '100%'
          }
        }
      });
    });
    setInputExpensesType(function () {
      return /*#__PURE__*/_react["default"].createElement(_Input.SelectExpensesType, {
        change: function change(e) {
          return use.attributes.actions.changeExpensesTypeId(e);
        },
        props: {
          options: use.attributes.states.expensesTypeIdOptions,
          defaultValue: use.attributes.states.expensesTypeIdDefault,
          styles: {
            width: '100%'
          }
        }
      });
    });
    setInputCurrencies(function () {
      return /*#__PURE__*/_react["default"].createElement(_Input.SelectCurrencies, {
        changeCurrencies: function changeCurrencies(e) {
          return use.attributes.actions.changeCurrencyIdCr(e);
        },
        props: {
          options: use.attributes.states.currencyIdOptions,
          defaultValue: use.attributes.states.currencyIdDefault,
          title: 'Moneda',
          styles: {
            width: '100%'
          }
        }
      });
    });
  }, []);
  var title1Text = 'Nuevo Egreso';
  var title2Text = 'Agrega un nuevo engreso';
  var buttonTitle = 'Procesar';
  var buttonAction = add;
  var handleActions = function handleActions(action, value) {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        use.pages.actions.returnInit();
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
    error: use.error.states.error
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    inputProps: {
      readOnly: true,
      value: supplierName,
      title: 'Proveedor'
    },
    styles: {
      width: '100%'
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputProjects)), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputExpensesType)), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputNote, {
    change: function change(e) {
      return use.attributes.actions.changeNote(e);
    },
    props: {
      inputProps: {
        placeholder: 'Motivo del gasto',
        title: 'Motivo del gasto'
      },
      styles: {
        width: '100%'
      }
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputInvoice, {
    change: function change(e) {
      return use.attributes.actions.changeInvoice(e);
    },
    props: {
      styles: {
        width: '100%'
      }
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    inputProps: {
      onChange: function onChange(e) {
        return use.attributes.actions.changeSubTotal(e.target.value);
      },
      title: 'Sub-Total',
      placeholder: 'Sub-Total',
      type: 'number',
      step: '0.01'
    },
    styles: {
      width: '100%'
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    inputProps: {
      onChange: function onChange(e) {
        return use.attributes.actions.changeSubTotalTax(e.target.value);
      },
      title: 'Impuestos',
      placeholder: 'Impuestos',
      type: 'number',
      step: '0.01'
    },
    styles: {
      width: '100%'
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      custom: "\n              margin: 20px 0px;\n              padding-left: 4%;\n            "
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
    value: "Total: ",
    containerStyles: {
      margin: '0px 15px 0px 0px',
      custom: "\n                  font-weight: 700;\n                  font-size: 20px;\n                "
    }
  }), /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
    containerStyles: {
      margin: '0',
      custom: "\n                  font-weight: 700;\n                  font-size: 20px;\n                "
    },
    value: (0, _helpers.decimalFormatPriceConverter)(use.attributes.states.total, siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION, siteOptions.CURRENCY_FORMAT)
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputCurrencies)), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, currentCurrency && /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    inputProps: {
      onChange: function onChange(e) {
        return changeAmount(e);
      },
      title: "Monto en ".concat(currentCurrency.name, " ").concat(currentCurrency.symbol),
      type: 'number',
      step: '0.01'
    },
    styles: {
      width: '100%'
    }
  }), currentCurrency && siteCurrency && currentCurrency.id !== siteCurrency.id && /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    inputProps: {
      onChange: function onChange(e) {
        return setChange(e);
      },
      title: "Monto en ".concat(siteCurrency.name, " ").concat(siteCurrency.symbol),
      type: 'number',
      step: '0.01'
    },
    styles: {
      width: '100%'
    }
  })))));
};
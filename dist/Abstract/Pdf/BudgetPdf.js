"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BudgetPdf = void 0;
var _react = _interopRequireDefault(require("react"));
var _renderer = require("@react-pdf/renderer");
var _helpers = require("../../helpers");
var _constants = require("../../constants");
function truncarTexto(texto) {
  var longitudMaxima = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 65;
  if (texto.length <= longitudMaxima) {
    return texto;
  } else {
    return texto.substring(0, longitudMaxima - 3) + '...';
  }
}
var BudgetPdf = exports.BudgetPdf = function BudgetPdf(_ref) {
  var _budget$budgetCustome, _budget$budgetCustome2, _StatesCountries$0$bu, _budget$budgetCustome3, _StatesCountries$0$si;
  var budget = _ref.budget,
    logo = _ref.logo,
    siteOptions = _ref.siteOptions;
  var state = ((_budget$budgetCustome = budget.budgetCustomer.address[0]) === null || _budget$budgetCustome === void 0 ? void 0 : _budget$budgetCustome.country) && ((_budget$budgetCustome2 = budget.budgetCustomer.address[0]) === null || _budget$budgetCustome2 === void 0 ? void 0 : _budget$budgetCustome2.state) && ((_StatesCountries$0$bu = _constants.StatesCountries[0][budget.budgetCustomer.address[0].country]) === null || _StatesCountries$0$bu === void 0 || (_StatesCountries$0$bu = _StatesCountries$0$bu[0]) === null || _StatesCountries$0$bu === void 0 ? void 0 : _StatesCountries$0$bu[budget.budgetCustomer.address[0].state]) || '';
  var country = ((_budget$budgetCustome3 = budget.budgetCustomer.address[0]) === null || _budget$budgetCustome3 === void 0 ? void 0 : _budget$budgetCustome3.country) && _constants.Countries[0][budget.budgetCustomer.address[0].country] || '';
  var stateSite = siteOptions.country && siteOptions.state && ((_StatesCountries$0$si = _constants.StatesCountries[0][siteOptions.country]) === null || _StatesCountries$0$si === void 0 || (_StatesCountries$0$si = _StatesCountries$0$si[0]) === null || _StatesCountries$0$si === void 0 ? void 0 : _StatesCountries$0$si[siteOptions.state]) || '';
  var countrySite = siteOptions.country && _constants.Countries[0][siteOptions.country] || '';
  var dig = siteOptions.DECIMAL_NUMBERS;
  var currencySymbol = siteOptions.CURRENCY_SYMBOL;
  var currencyLocation = siteOptions.CURRENCY_LOCATION;
  var CURRENCY_FORMAT = siteOptions.CURRENCY_FORMAT;
  var customer = budget.budgetCustomer || {};
  var documentIndex = customer.documentIndex ? "".concat(customer.documentIndex, "-") : '';
  var address = customer.address && customer.address[0] || {};
  return /*#__PURE__*/_react["default"].createElement(_renderer.Document, null, /*#__PURE__*/_react["default"].createElement(_renderer.Page, {
    style: styles.document,
    size: "A4"
  }, /*#__PURE__*/_react["default"].createElement(_renderer.View, {
    style: styles.header
  }, /*#__PURE__*/_react["default"].createElement(_renderer.View, {
    style: styles.containerLogo
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Image, {
    src: logo,
    style: styles.logo
  })), /*#__PURE__*/_react["default"].createElement(_renderer.View, {
    style: styles.containerCompanyInfo
  }, /*#__PURE__*/_react["default"].createElement(_renderer.View, {
    style: styles.companyInfo
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, siteOptions.name), /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, siteOptions.address1), /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, siteOptions.city, ", ", stateSite, ", ", countrySite), /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, siteOptions.phone), /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, siteOptions.email), /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, siteOptions.host)))), /*#__PURE__*/_react["default"].createElement(_renderer.View, {
    style: styles.TitleContainer
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, "PRESUPUESTO ", budget.postsId)), /*#__PURE__*/_react["default"].createElement(_renderer.View, {
    style: styles.customerInfo
  }, /*#__PURE__*/_react["default"].createElement(_renderer.View, {
    style: styles.customerData
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.line
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.bold
  }, customer.name, " ", customer.lastName && customer.lastName)), /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.line
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, "".concat(customer.documentType, ": ").concat(documentIndex).concat(customer.documentDigit))), /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.line
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, address.address1 || '')), address.address2 && /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.line
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, address.address2)), /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.line
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, "".concat(address.city || '', ", ").concat(state || '', ", ").concat(country || ''))), customer.phone && /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.line
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, customer.phone)), customer.email && /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.line
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, customer.email))), /*#__PURE__*/_react["default"].createElement(_renderer.View, {
    style: styles.orderData
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.line
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.bold
  }, "Fecha:"), ' ', (0, _helpers.formatDate)("".concat(budget.posts.createdAt)))), /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.line
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.bold
  }, "Pedido:"), " ", budget.postsId)), /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.line
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.bold
  }, "Valido por:"), " Pendiente de pago")))), /*#__PURE__*/_react["default"].createElement(_renderer.View, {
    style: styles.itemTable
  }, /*#__PURE__*/_react["default"].createElement(_renderer.View, {
    style: styles.tableHeader
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.col1
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.bold
  }, "SKU")), /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.col8
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.bold
  }, "Nombre del Producto")), /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.col1
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.bold
  }, "Qty")), /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.col2
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.bold
  }, "Precio")), /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.col2
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.bold
  }, "Total"))), /*#__PURE__*/_react["default"].createElement(_renderer.View, {
    style: styles.containerTableRow
  }, budget.budgetItems.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_renderer.View, {
      key: item.id,
      style: styles.tableRow
    }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
      style: styles.col1
    }, item.sku), /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
      style: styles.col8
    }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
      style: styles.tableCol
    }, truncarTexto(item.name))), /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
      style: styles.col1
    }, parseFloat("".concat(item.qty)).toFixed(2)), /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
      style: styles.col2
    }, (0, _helpers.decimalFormatPriceConverter)(item.price, dig, currencySymbol, currencyLocation, CURRENCY_FORMAT)), /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
      style: styles.col2
    }, (0, _helpers.decimalFormatPriceConverter)(item.total || 0, dig, currencySymbol, currencyLocation, CURRENCY_FORMAT)));
  }))), /*#__PURE__*/_react["default"].createElement(_renderer.View, {
    style: styles.finalSection
  }, /*#__PURE__*/_react["default"].createElement(_renderer.View, {
    style: styles.noteSection
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.line
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.bold
  }, "Nota:"), " ", budget.note))), /*#__PURE__*/_react["default"].createElement(_renderer.View, {
    style: styles.totalSection
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.line
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.bold
  }, "Subtotal:"), ' ', /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, (0, _helpers.decimalFormatPriceConverter)(budget.subTotal, dig, currencySymbol, currencyLocation, CURRENCY_FORMAT)))), /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.line
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.bold
  }, "Total Impuestos:"), ' ', (0, _helpers.decimalFormatPriceConverter)(budget.subTotalTax, dig, currencySymbol, currencyLocation, CURRENCY_FORMAT))), /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.line
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.bold
  }, "Total del Presupuesto:"), ' ', (0, _helpers.decimalFormatPriceConverter)(budget.total, dig, currencySymbol, currencyLocation, CURRENCY_FORMAT))))), /*#__PURE__*/_react["default"].createElement(_renderer.View, {
    style: styles.footer
  }, siteOptions.footerBudget.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, item);
  }))));
};
var styles = _renderer.StyleSheet.create({
  // Estilos para el componente, puedes ajustar según tus necesidades
  document: {
    fontFamily: 'Courier',
    fontSize: 8,
    fontStyle: 'normal',
    width: '100%',
    maxWidth: 650,
    margin: '0 auto',
    padding: 20,
    color: '#000000'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    border: 1,
    borderColor: '#ababab',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  containerLogo: {
    textAlign: 'left',
    justifyContent: 'flex-start',
    width: '50%',
    margin: 'auto 0'
  },
  logo: {
    width: 120
  },
  containerCompanyInfo: {
    // fontFamily: 'Arial',
    textAlign: 'left',
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  companyInfo: {
    marginLeft: 100,
    fontFamily: 'Courier-Bold',
    fontSize: 10
  },
  bold: {
    fontFamily: 'Courier-Bold',
    marginRight: 10,
    paddingRight: 10
  },
  TitleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    fontFamily: 'Courier-Bold',
    fontSize: 20,
    border: 1,
    borderColor: '#ababab',
    borderRadius: 5,
    padding: 10
  },
  customerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    border: 1,
    borderColor: '#ababab',
    borderRadius: 5,
    padding: 10
  },
  customerData: {
    width: '50%'
  },
  orderData: {
    width: '50%',
    justifyContent: 'flex-start',
    alignContent: 'flex-start'
  },
  itemTable: {
    marginBottom: 5,
    textAlign: 'center'
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: 1,
    paddingBottom: 5,
    border: 1,
    borderColor: '#ababab',
    borderRadius: 5,
    padding: 5,
    marginBottom: 5
  },
  containerTableRow: {
    border: 1,
    borderColor: '#ababab',
    borderRadius: 5,
    padding: 5
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 7,
    overflow: 'hidden'
  },
  tableCol: {
    textAlign: 'left',
    paddingLeft: 5
  },
  totalSection: {
    width: '50%',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    textAlign: 'right',
    paddingRight: 17,
    fontSize: 12
  },
  noteSection: {
    width: '50%'
  },
  line: {
    marginBottom: 7
  },
  col1: {
    width: '8.3333333%'
  },
  col2: {
    width: '16.6666667%'
  },
  col3: {
    width: '25%'
  },
  col4: {
    width: '33.3333333%'
  },
  col5: {
    width: '41.6666667%'
  },
  col6: {
    width: '50%'
  },
  col7: {
    width: '58.3333333%'
  },
  col8: {
    width: '66.6666667%'
  },
  col9: {
    width: '75%'
  },
  col10: {
    width: '83.3333333%'
  },
  col11: {
    width: '91.6666667%'
  },
  col12: {
    width: '100%'
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 50,
    right: 50,
    textAlign: 'center',
    fontSize: 10,
    color: '#333',
    borderTop: 1,
    borderColor: '#ababab',
    paddingTop: 10
  },
  finalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    border: 1,
    borderColor: '#ababab',
    borderRadius: 5,
    padding: 10
  }
});
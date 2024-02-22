"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderPdf = void 0;
var _react = _interopRequireDefault(require("react"));
var _renderer = require("@react-pdf/renderer");
var _helpers = require("../../helpers");
var _constants = require("src/constants");
_renderer.Font.register({
  family: 'Poppins',
  src: 'http://fonts.gstatic.com/s/poppins/v1/TDTjCH39JjVycIF24TlO-Q.ttf'
});
function truncarTexto(texto) {
  var longitudMaxima = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 65;
  if (texto.length <= longitudMaxima) {
    return texto;
  } else {
    return texto.substring(0, longitudMaxima - 3) + '...';
  }
}
var OrderPdf = exports.OrderPdf = function OrderPdf(_ref) {
  var order = _ref.order,
    logo = _ref.logo;
  var state = _constants.StatesCountries[0][order.customer.address[0].country][0][order.customer.address[0].state] || '';
  var country = _constants.Countries[0][order.customer.address[0].country] || '';
  var dig = 2;
  var currencySymbol = '$';
  var currencyLocation = 'left';
  var formatOptions = {
    miles: ',',
    decimal: '.'
  };
  var THOUSANDS_SEPARATOR = ',';
  var DECIMAL_SEPARATOR = '.';
  var CURRENCY_FORMAT = {
    miles: THOUSANDS_SEPARATOR,
    decimal: DECIMAL_SEPARATOR
  };
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
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, "Gafpri Corp"), /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, "951 Shotdund Dr."), /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, "Sunrise, Fl, Usa"), /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, "33326"), /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, "www.gafpri.com")))), /*#__PURE__*/_react["default"].createElement(_renderer.View, {
    style: styles.TitleContainer
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, "PEDIDO ", order.postsId)), /*#__PURE__*/_react["default"].createElement(_renderer.View, {
    style: styles.customerInfo
  }, /*#__PURE__*/_react["default"].createElement(_renderer.View, {
    style: styles.customerData
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.line
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.bold
  }, order.customer.name, ' ', order.customer.lastName && order.customer.lastName)), /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.line
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, "".concat(order.customer.documentId[0].index, "-").concat(order.customer.documentId[0].digit))), /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.line
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, order.customer.address[0].address1)), order.customer.address[0].address2 && /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.line
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, order.customer.address[0].address2)), /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.line
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, "".concat(order.customer.address[0].city, ", ").concat(state, ", ").concat(country))), order.customer.phone && /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.line
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, order.customer.phone)), order.customer.email && /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.line
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, order.customer.email))), /*#__PURE__*/_react["default"].createElement(_renderer.View, {
    style: styles.orderData
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.line
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.bold
  }, "Fecha:"), ' ', (0, _helpers.formatDate)("".concat(order.posts.createdAt)))), /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.line
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.bold
  }, "Pedido:"), " ", order.postsId)), /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.line
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.bold
  }, "Metodo de pago:"), " Pendiente de pago")))), /*#__PURE__*/_react["default"].createElement(_renderer.View, {
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
  }, order.orderItems.map(function (item) {
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
    }, item.qty.toFixed(2)), /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
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
  }, "Nota:"), " ", order.note))), /*#__PURE__*/_react["default"].createElement(_renderer.View, {
    style: styles.totalSection
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.line
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.bold
  }, "Subtotal:"), ' ', /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, (0, _helpers.decimalFormatPriceConverter)(order.subTotal, dig, currencySymbol, currencyLocation, CURRENCY_FORMAT)))), /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.line
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.bold
  }, "Total Impuestos:"), ' ', (0, _helpers.decimalFormatPriceConverter)(order.subTotalTax, dig, currencySymbol, currencyLocation, CURRENCY_FORMAT))), /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.line
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: styles.bold
  }, "Total del Pedido:"), ' ', (0, _helpers.decimalFormatPriceConverter)(order.total, dig, currencySymbol, currencyLocation, CURRENCY_FORMAT))))), /*#__PURE__*/_react["default"].createElement(_renderer.View, {
    style: styles.footer
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, null, "Gafpri la marca preferida por los t\xE9cnicos en refrigeraci\xF3n"))));
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
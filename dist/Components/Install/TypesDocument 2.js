"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypesDocument = void 0;
var _react = _interopRequireDefault(require("react"));
var _Abstract = require("../../Abstract");
var TypesDocument = function TypesDocument(_ref) {
  var actions = _ref.actions,
    useTypeDocument = _ref.useTypeDocument;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Abstract.Step, {
    step: "4",
    title: "Agregar Tipo de Documento",
    buttonReturnTitle: "Atr\xE1s",
    buttonReturnStyles: {
      backgroundColor: '#c12429'
    },
    buttonReturnProps: {
      onClick: actions.onConfigSite
    },
    buttonNextTitle: "Siguiente",
    buttonNextProps: {
      onClick: actions.nextTypeDocument,
      id: 'buttonNextTypeDocument'
    }
  }), /*#__PURE__*/_react["default"].createElement(_Abstract.TypeDocument, {
    useTypeDocument: useTypeDocument
  }));
};
exports.TypesDocument = TypesDocument;
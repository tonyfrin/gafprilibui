"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Category = void 0;
var _react = _interopRequireDefault(require("react"));
var _Abstract = require("../../Abstract");
var Category = function Category(_ref) {
  var actions = _ref.actions,
    useCategory = _ref.useCategory;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Abstract.Step, {
    step: "6",
    title: "Agregar Categor\xEDa de Producto",
    buttonReturnTitle: "Atr\xE1s",
    buttonReturnStyles: {
      backgroundColor: '#c12429'
    },
    buttonReturnProps: {
      onClick: actions.onUser
    },
    buttonNextTitle: "Siguiente",
    buttonNextProps: {
      onClick: actions.nextCategory,
      id: 'buttonNextCategory'
    }
  }), /*#__PURE__*/_react["default"].createElement(_Abstract.AddCategoryProjects, {
    use: useCategory,
    type: 'Category'
  }));
};
exports.Category = Category;
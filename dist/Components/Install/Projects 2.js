"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Projects = void 0;
var _react = _interopRequireDefault(require("react"));
var _Abstract = require("../../Abstract");
var Projects = function Projects(_ref) {
  var actions = _ref.actions,
    useProjects = _ref.useProjects;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Abstract.Step, {
    step: "7",
    title: "Agregar Proyecto",
    buttonReturnTitle: "Atr\xE1s",
    buttonReturnStyles: {
      backgroundColor: '#c12429'
    },
    buttonReturnProps: {
      onClick: actions.onCategory
    },
    buttonNextTitle: "Instalar",
    buttonNextProps: {
      onClick: actions.install,
      id: 'buttonNextCategory'
    }
  }), /*#__PURE__*/_react["default"].createElement(_Abstract.AddCategoryProjects, {
    use: useProjects,
    type: 'Projects'
  }));
};
exports.Projects = Projects;
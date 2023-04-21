"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddCategoryProjects = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("./../index");
var AddCategoryProjects = function AddCategoryProjects(_ref) {
  var use = _ref.use,
    type = _ref.type;
  _react["default"].useEffect(function () {
    use.actions.validationName(use.states.name);
    use.actions.validationDescription(use.states.description);
  }, [use.states.name, use.states.description]);
  _react["default"].useEffect(function () {
    use.actions.validationButtonNext();
  }, [use.states.nameValid, use.states.descriptionValid]);
  return /*#__PURE__*/_react["default"].createElement(_index.ContainerForm, null, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_index.Input, {
    inputProps: {
      placeholder: 'Nombre',
      type: 'text',
      id: "name".concat(type),
      onKeyUp: function onKeyUp(event) {
        return use.actions.changeName(event.target.value);
      },
      defaultValue: use.states.name
    }
  }), /*#__PURE__*/_react["default"].createElement(_index.Input, {
    inputProps: {
      placeholder: 'Descripción',
      type: 'text',
      id: "description".concat(type),
      onKeyUp: function onKeyUp(event) {
        return use.actions.changeDescription(event.target.value);
      },
      defaultValue: use.states.description
    }
  })));
};
exports.AddCategoryProjects = AddCategoryProjects;
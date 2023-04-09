"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Users = void 0;
var _react = _interopRequireDefault(require("react"));
var _Abstract = require("../../Abstract");
var Users = function Users(_ref) {
  var actions = _ref.actions,
    useUser = _ref.useUser;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Abstract.Step, {
    step: "5",
    title: "Agregar Usuario",
    buttonReturnTitle: "Atr\xE1s",
    buttonReturnStyles: {
      backgroundColor: '#c12429'
    },
    buttonReturnProps: {
      onClick: actions.onTypeDucument
    },
    buttonNextTitle: "Siguiente",
    buttonNextProps: {
      onClick: actions.nextUser,
      id: 'buttonNextUser'
    }
  }), /*#__PURE__*/_react["default"].createElement(_Abstract.User, {
    useUser: useUser
  }));
};
exports.Users = Users;
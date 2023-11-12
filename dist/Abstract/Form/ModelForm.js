"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelForm = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _Box = require("../Box");
var _Containers = require("../Containers");
var _Title = require("../Title");
var _Button = require("../Button");
var _Error = require("../Error");
var _css = require("@emotion/css");
var _templateObject, _templateObject2, _templateObject3;
var defaultTitleContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 22px;\n  padding-left: 38px;\n  margin-bottom: 30px;\n"])));
var defaultActionButtonContainerStyle = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  margin-bottom: 0px;\n  justify-content: flex-end;\n  margin-top: 22px;\n  width: 85%;\n"])));
var defaultReturnButtonConatinerStyle = (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  border-top: 0.1rem solid rgb(227, 223, 218);\n  padding: 1rem;\n  margin-top: 1rem;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  box-sizing: border-box;\n  padding-bottom: 100px;\n"])));
var defaultReturnButtonStyle = {
  backgroundColor: '#c12429'
};
var ModelForm = function ModelForm(_ref) {
  var boxProps = _ref.boxProps,
    titles = _ref.titles,
    title1Props = _ref.title1Props,
    title2Props = _ref.title2Props,
    handleActions = _ref.handleActions,
    buttonTitles = _ref.buttonTitles,
    mainButtonProps = _ref.mainButtonProps,
    _ref$returnButtonStyl = _ref.returnButtonStyle,
    returnButtonStyle = _ref$returnButtonStyl === void 0 ? defaultReturnButtonStyle : _ref$returnButtonStyl,
    returnButtonProps = _ref.returnButtonProps,
    children = _ref.children,
    error = _ref.error,
    errorProps = _ref.errorProps,
    childrenContainerProps = _ref.childrenContainerProps,
    _ref$titleContainerSt = _ref.titleContainerStyle,
    titleContainerStyle = _ref$titleContainerSt === void 0 ? defaultTitleContainerStyle : _ref$titleContainerSt,
    _ref$actionButtonCont = _ref.actionButtonContainerStyle,
    actionButtonContainerStyle = _ref$actionButtonCont === void 0 ? defaultActionButtonContainerStyle : _ref$actionButtonCont,
    _ref$returnButtonCona = _ref.returnButtonConatinerStyle,
    returnButtonConatinerStyle = _ref$returnButtonCona === void 0 ? defaultReturnButtonConatinerStyle : _ref$returnButtonCona;
  return /*#__PURE__*/_react["default"].createElement(_Box.Box1, boxProps, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(titleContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Title.Title1, (0, _extends2["default"])({
    title: titles.title1
  }, title1Props)), /*#__PURE__*/_react["default"].createElement(_Title.Title2, (0, _extends2["default"])({
    title: titles.title2
  }, title2Props))), /*#__PURE__*/_react["default"].createElement(_Error.Error, (0, _extends2["default"])({
    error: error
  }, errorProps)), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerForm, childrenContainerProps, children), (buttonTitles === null || buttonTitles === void 0 ? void 0 : buttonTitles.mainButton) && /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(actionButtonContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, (0, _extends2["default"])({
    title: buttonTitles.mainButton,
    buttonProps: {
      onClick: function onClick() {
        return handleActions('submit', {});
      },
      id: 'buttonNext'
    }
  }, mainButtonProps))), (buttonTitles === null || buttonTitles === void 0 ? void 0 : buttonTitles.returnButton) !== '' && /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(returnButtonConatinerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, (0, _extends2["default"])({
    title: buttonTitles.returnButton,
    styles: returnButtonStyle,
    buttonProps: {
      onClick: function onClick() {
        return handleActions('return', {});
      }
    }
  }, returnButtonProps)))));
};
exports.ModelForm = ModelForm;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhotoEntity = void 0;
var _react = _interopRequireDefault(require("react"));
var _PhotoForm = require("./PhotoForm");
var _Constans = require("../../Constans");
var PhotoEntity = function PhotoEntity(_ref) {
  var photo = _ref.photo,
    changePhoto = _ref.changePhoto,
    submitting = _ref.submitting,
    changeError = _ref.changeError,
    setSubmitting = _ref.setSubmitting,
    props = _ref.props;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_PhotoForm.PhotoForm, {
    formId: _Constans.PHOTO_ENTITY_INPUT,
    photo: photo,
    imageFormConatinerStyle: props === null || props === void 0 ? void 0 : props.imageFormConatinerStyle,
    changePhoto: changePhoto,
    changePhotoButtonProps: props === null || props === void 0 ? void 0 : props.changePhotoButtonProps,
    submitting: submitting,
    loadingContainerStyle: props === null || props === void 0 ? void 0 : props.loadingContainerStyle,
    loadingProps: props === null || props === void 0 ? void 0 : props.loadingProps,
    imageStyle: props === null || props === void 0 ? void 0 : props.imageStyle,
    changeError: changeError,
    setSubmitting: setSubmitting
  }));
};
exports.PhotoEntity = PhotoEntity;
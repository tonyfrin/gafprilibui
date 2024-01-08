"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getApiUrl = exports.UPLOAD_PHOTO_ROUTE = void 0;
var getApiUrl = function getApiUrl() {
  return process.env.API_URL;
};
exports.getApiUrl = getApiUrl;
var UPLOAD_PHOTO_ROUTE = "".concat(getApiUrl(), "/upload-photo");
exports.UPLOAD_PHOTO_ROUTE = UPLOAD_PHOTO_ROUTE;
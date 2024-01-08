"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getApiUrl = exports.UPLOAD_PHOTO_ROUTE = exports.API_URL = void 0;
var getApiUrl = function getApiUrl() {
  return process.env.API_URL;
};
exports.getApiUrl = getApiUrl;
var API_URL = getApiUrl();
exports.API_URL = API_URL;
var UPLOAD_PHOTO_ROUTE = "".concat(getApiUrl(), "//upload-file");
exports.UPLOAD_PHOTO_ROUTE = UPLOAD_PHOTO_ROUTE;
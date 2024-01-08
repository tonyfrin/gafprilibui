"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UPLOAD_PHOTO_ROUTE = exports.API_URL = void 0;
var getApiUrl = function getApiUrl() {
  return process.env.API_URL;
};
var API_URL = getApiUrl();
exports.API_URL = API_URL;
var UPLOAD_PHOTO_ROUTE = "".concat(getApiUrl(), "/upload-photo");
exports.UPLOAD_PHOTO_ROUTE = UPLOAD_PHOTO_ROUTE;
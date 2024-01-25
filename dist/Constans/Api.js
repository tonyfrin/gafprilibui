"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getApiUrl = exports.UPLOAD_PHOTO_ROUTE = exports.ROLES_ROUTE = exports.ENTITY_ROUTE = exports.CURRENCIES_ROUTE = exports.CATEGORY_ROUTE = exports.API_URL = void 0;
var getApiUrl = function getApiUrl() {
  return process.env.API_URL;
};
exports.getApiUrl = getApiUrl;
var API_URL = getApiUrl();
exports.API_URL = API_URL;
var UPLOAD_PHOTO_ROUTE = "".concat(getApiUrl(), "//upload-file");
exports.UPLOAD_PHOTO_ROUTE = UPLOAD_PHOTO_ROUTE;
var CATEGORY_ROUTE = '/category';
exports.CATEGORY_ROUTE = CATEGORY_ROUTE;
var CURRENCIES_ROUTE = '/currencies';
exports.CURRENCIES_ROUTE = CURRENCIES_ROUTE;
var ENTITY_ROUTE = '/entity';
exports.ENTITY_ROUTE = ENTITY_ROUTE;
var ROLES_ROUTE = '/roles';
exports.ROLES_ROUTE = ROLES_ROUTE;
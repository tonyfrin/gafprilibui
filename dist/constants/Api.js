"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getApiUrl = exports.USERS_ROUTE = exports.UPLOAD_PHOTO_ROUTE = exports.TYPE_DOCUMENT_ID_ROUTE = exports.TAX_RATES_ROUTER = exports.TAX_CLASSES_ROUTER = exports.SITES_ROUTE = exports.ROLES_ROUTE = exports.PRODUCTS_ROUTER = exports.ORDER_ROUTE = exports.ENTITY_ROUTE = exports.CURRENCIES_ROUTE = exports.CATEGORY_ROUTE = exports.API_URL = void 0;
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
var SITES_ROUTE = '/sites';
exports.SITES_ROUTE = SITES_ROUTE;
var TYPE_DOCUMENT_ID_ROUTE = '/type-document-id';
exports.TYPE_DOCUMENT_ID_ROUTE = TYPE_DOCUMENT_ID_ROUTE;
var USERS_ROUTE = '/users';
exports.USERS_ROUTE = USERS_ROUTE;
var ORDER_ROUTE = '/order';
exports.ORDER_ROUTE = ORDER_ROUTE;
var PRODUCTS_ROUTER = '/products';
exports.PRODUCTS_ROUTER = PRODUCTS_ROUTER;
var TAX_CLASSES_ROUTER = '/tax-classes';
exports.TAX_CLASSES_ROUTER = TAX_CLASSES_ROUTER;
var TAX_RATES_ROUTER = '/tax-rates';
exports.TAX_RATES_ROUTER = TAX_RATES_ROUTER;
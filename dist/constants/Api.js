"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getApiUrl = exports.USERS_ROUTE = exports.UPLOAD_PHOTO_ROUTE = exports.TYPE_DOCUMENT_ID_ROUTE = exports.TAX_RATES_ROUTE = exports.TAX_CLASSES_ROUTE = exports.STORAGE_ROUTE = exports.SITES_ROUTE = exports.SHIPPING_METHODS_ROUTE = exports.SHIPPING_AREAS_ROUTE = exports.ROLES_ROUTE = exports.PROJECTS_ROUTE = exports.PRODUCTS_ROUTE = exports.ORDER_ROUTE = exports.EXPENSES_TYPE_ROUTE = exports.ENTITY_ROUTE = exports.CURRENCIES_ROUTE = exports.CATEGORY_ROUTE = exports.CASH_REGISTER_TYPE_ROUTE = exports.BUDGET_ROUTE = exports.API_URL = void 0;
var getApiUrl = exports.getApiUrl = function getApiUrl() {
  return process.env.API_URL;
};
var API_URL = exports.API_URL = getApiUrl();
var UPLOAD_PHOTO_ROUTE = exports.UPLOAD_PHOTO_ROUTE = "".concat(getApiUrl(), "//upload-file");
var CATEGORY_ROUTE = exports.CATEGORY_ROUTE = '/category';
var CURRENCIES_ROUTE = exports.CURRENCIES_ROUTE = '/currencies';
var ENTITY_ROUTE = exports.ENTITY_ROUTE = '/entity';
var ROLES_ROUTE = exports.ROLES_ROUTE = '/roles';
var SITES_ROUTE = exports.SITES_ROUTE = '/sites';
var TYPE_DOCUMENT_ID_ROUTE = exports.TYPE_DOCUMENT_ID_ROUTE = '/type-document-id';
var USERS_ROUTE = exports.USERS_ROUTE = '/users';
var ORDER_ROUTE = exports.ORDER_ROUTE = '/orders';
var PRODUCTS_ROUTE = exports.PRODUCTS_ROUTE = '/products';
var TAX_CLASSES_ROUTE = exports.TAX_CLASSES_ROUTE = '/tax-classes';
var TAX_RATES_ROUTE = exports.TAX_RATES_ROUTE = '/tax-rates';
var BUDGET_ROUTE = exports.BUDGET_ROUTE = '/budgets';
var SHIPPING_METHODS_ROUTE = exports.SHIPPING_METHODS_ROUTE = '/shipping-methods';
var SHIPPING_AREAS_ROUTE = exports.SHIPPING_AREAS_ROUTE = '/shipping-areas';
var PROJECTS_ROUTE = exports.PROJECTS_ROUTE = '/projects';
var STORAGE_ROUTE = exports.STORAGE_ROUTE = '/storage';
var CASH_REGISTER_TYPE_ROUTE = exports.CASH_REGISTER_TYPE_ROUTE = '/cash-register-type';
var EXPENSES_TYPE_ROUTE = exports.EXPENSES_TYPE_ROUTE = '/expenses-type';
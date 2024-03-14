"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriApiBankType = useGafpriApiBankType;
var _helpers = require("../../../helpers");
var _constants = require("../../../constants");
function useGafpriApiBankType(_ref) {
  var token = _ref.token,
    useError = _ref.useError,
    pages = _ref.pages,
    attributes = _ref.attributes;
  var newErrorAdd = function newErrorAdd(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: pages.actions.onAdd
    });
  };
  var add = function add() {
    if (attributes.states.nameValid && attributes.states.sitesIdValid && attributes.states.bankNameValid && attributes.states.accountValid && attributes.states.accountTypeValid && attributes.states.currencyValid && attributes.states.settingsValid && token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'POST',
        initRoute: _constants.BANK_TYPE_ROUTE,
        initCredentials: {
          sitesId: attributes.states.sitesId,
          name: attributes.states.name,
          bankName: attributes.states.bankName,
          account: attributes.states.account,
          accountType: attributes.states.accountType,
          currenciesId: attributes.states.currency,
          settings: attributes.states.settings,
          posts: {
            visibility: 'public'
          }
        },
        initToken: {
          token: token
        },
        functionFetching: pages.actions.onFetching,
        functionSuccess: pages.actions.returnInit,
        functionError: newErrorAdd
      });
    }
  };
  var newErrorUpdate = function newErrorUpdate(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: pages.actions.onUpdate
    });
  };
  var update = function update() {
    if (attributes.states.nameValid && attributes.states.bankNameValid && attributes.states.accountValid && attributes.states.accountTypeValid && attributes.states.currencyValid && attributes.states.settingsValid && token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'PATCH',
        initRoute: "".concat(_constants.BANK_TYPE_ROUTE, "/").concat(attributes.states.currentId),
        initCredentials: {
          name: attributes.states.name,
          bankName: attributes.states.bankName,
          account: attributes.states.account,
          accountType: attributes.states.accountType,
          currenciesId: attributes.states.currency,
          settings: attributes.states.settings,
          posts: {
            visibility: 'public'
          }
        },
        initToken: {
          token: token
        },
        functionFetching: pages.actions.onFetching,
        functionSuccess: pages.actions.returnInit,
        functionError: newErrorUpdate
      });
    }
  };
  var newErrorDelete = function newErrorDelete(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: pages.actions.returnInit
    });
  };
  var erase = function erase(id) {
    if (token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'DELETE',
        initRoute: "".concat(_constants.BANK_TYPE_ROUTE, "/").concat(id),
        initToken: {
          token: token
        },
        functionFetching: pages.actions.onFetching,
        functionSuccess: pages.actions.returnInit,
        functionError: newErrorDelete
      });
    }
  };

  /**
   * Export
   *
   *
   */

  var actions = {
    update: update,
    add: add,
    erase: erase
  };
  return {
    actions: actions
  };
}
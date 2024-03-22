"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriPayment = useGafpriPayment;
var _useGafpriError = require("./useGafpriError");
var _Abstract = require("../Abstract");
function useGafpriPayment(_ref) {
  var currencies = _ref.currencies,
    useBankType = _ref.useBankType,
    useOrder = _ref.useOrder;
  var error = (0, _useGafpriError.useGafpriError)();
  var attributes = (0, _Abstract.useGafpriAttributesPayment)({
    currencies: currencies,
    useBankType: useBankType
  });
  var subPagesDeposit = (0, _Abstract.useGafpriSubPagesDepositPayment)({
    useOrder: useOrder
  });
  var pages = (0, _Abstract.useGafpriPagesPayment)({
    attributes: attributes,
    subPagesDeposit: subPagesDeposit
  });
  return {
    attributes: attributes,
    pages: pages,
    subPagesDeposit: subPagesDeposit,
    error: error
  };
}
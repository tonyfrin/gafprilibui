"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAttributesExpenses = useGafpriAttributesExpenses;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _Validations = require("../../../Validations");
var _Changes = require("../../../Changes");
var _payment = require("../payment");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function useGafpriAttributesExpenses() {
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    supplierId = _useState2[0],
    setSupplierId = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    supplierIdValid = _useState4[0],
    setSupplierIdValid = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    expensesTypeId = _useState6[0],
    setExpensesTypeId = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    expensesTypeIdValid = _useState8[0],
    setExpensesTypeIdValid = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    invoice = _useState10[0],
    setInvoice = _useState10[1];
  var _useState11 = (0, _react.useState)(0),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    projectsPostsId = _useState12[0],
    setProjectsPostsId = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    projectsPostsIdValid = _useState14[0],
    setProjectsPostsIdValid = _useState14[1];
  var _useState15 = (0, _react.useState)(''),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
    note = _useState16[0],
    setNote = _useState16[1];
  var _useState17 = (0, _react.useState)(''),
    _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
    subTotal = _useState18[0],
    setSubTotal = _useState18[1];
  var _useState19 = (0, _react.useState)(''),
    _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
    subTotalTax = _useState20[0],
    setSubTotalTax = _useState20[1];
  var _useState21 = (0, _react.useState)(''),
    _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
    total = _useState22[0],
    setTotal = _useState22[1];
  var _useState23 = (0, _react.useState)(0),
    _useState24 = (0, _slicedToArray2["default"])(_useState23, 2),
    currentId = _useState24[0],
    setCurrentId = _useState24[1];
  var _useState25 = (0, _react.useState)(null),
    _useState26 = (0, _slicedToArray2["default"])(_useState25, 2),
    entity = _useState26[0],
    setEntity = _useState26[1];
  var usePayment = (0, _payment.useGafpriAttributesPayment)();
  var infoReset = function infoReset() {
    setSupplierId(0);
    setSupplierIdValid(false);
    setExpensesTypeId(0);
    setExpensesTypeIdValid(false);
    setInvoice('');
    setProjectsPostsId(0);
    setProjectsPostsIdValid(false);
    setNote('');
    setSubTotal('');
    setSubTotalTax('');
    setTotal('');
    setCurrentId(0);
    setEntity(null);
    usePayment.actions.infoReset();
  };

  // Funciones de Validacion
  var validationSupplierId = function validationSupplierId(value) {
    (0, _Validations.generalValidationSupplierId)({
      value: value,
      setValid: setSupplierIdValid,
      currentValid: supplierIdValid
    });
    return true;
  };
  var validationExpensesTypeId = function validationExpensesTypeId(value) {
    (0, _Validations.generalValidationExpensesTypeId)({
      value: value,
      setValid: setExpensesTypeIdValid,
      currentValid: expensesTypeIdValid
    });
    return true;
  };
  var validationProjectsPostsId = function validationProjectsPostsId(value) {
    (0, _Validations.generalValidationProjectsId)({
      value: value,
      setValid: setProjectsPostsIdValid,
      currentValid: projectsPostsIdValid
    });
    return true;
  };

  // Funciones de Change
  var changeSupplierId = function changeSupplierId(value) {
    (0, _Changes.generalChangeSupplierId)({
      value: value,
      validation: validationSupplierId,
      setValue: setSupplierId
    });
  };
  var changeExpensesTypeId = function changeExpensesTypeId(value) {
    (0, _Changes.generalChangeExpensesTypeId)({
      value: value,
      validation: validationExpensesTypeId,
      setValue: setExpensesTypeId
    });
  };
  var changeProjectsPostsId = function changeProjectsPostsId(value) {
    (0, _Changes.generalChangeProjectsId)({
      value: value,
      validation: validationProjectsPostsId,
      setValue: setProjectsPostsId
    });
  };
  var changeNote = function changeNote(value) {
    (0, _Changes.generalChangeNote)({
      value: value,
      setValue: setNote
    });
  };
  var changeInvoice = function changeInvoice(value) {
    setInvoice(value);
  };
  var changeSubTotal = function changeSubTotal(value) {
    setSubTotal(value);
  };
  var changeSubTotalTax = function changeSubTotalTax(value) {
    setSubTotalTax(value);
  };
  var changeTotal = function changeTotal() {
    var newTotal = parseFloat(subTotal) + parseFloat(subTotalTax);
    setTotal("".concat(newTotal));
  };

  /**
   * Effects
   *
   *
   */

  _react["default"].useEffect(function () {
    changeTotal();
  }, [subTotal, subTotalTax]); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Export
   *
   *
   */
  var states = {
    supplierId: supplierId,
    supplierIdValid: supplierIdValid,
    expensesTypeId: expensesTypeId,
    expensesTypeIdValid: expensesTypeIdValid,
    invoice: invoice,
    projectsPostsId: projectsPostsId,
    projectsPostsIdValid: projectsPostsIdValid,
    note: note,
    subTotal: subTotal,
    subTotalTax: subTotalTax,
    total: total,
    currentId: currentId,
    entity: entity
  };
  var actions = {
    infoReset: infoReset,
    validationSupplierId: validationSupplierId,
    validationExpensesTypeId: validationExpensesTypeId,
    validationProjectsPostsId: validationProjectsPostsId,
    changeSupplierId: changeSupplierId,
    changeExpensesTypeId: changeExpensesTypeId,
    changeProjectsPostsId: changeProjectsPostsId,
    changeNote: changeNote,
    changeInvoice: changeInvoice,
    changeSubTotal: changeSubTotal,
    changeSubTotalTax: changeSubTotalTax,
    changeTotal: changeTotal,
    setEntity: setEntity
  };
  return {
    states: states,
    actions: actions,
    usePayment: usePayment
  };
}
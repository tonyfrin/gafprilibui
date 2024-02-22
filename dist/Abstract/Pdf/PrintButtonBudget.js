"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrintButtonBudget = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireWildcard(require("react"));
var _css = require("@emotion/css");
var _renderer = require("@react-pdf/renderer");
var _Button = require("../Button");
var _Pdf = require("../Pdf");
var _Components = require("../../Components");
var _templateObject;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var printButtonStylesContainer = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-evenly;\n"])));
var PrintButtonBudget = exports.PrintButtonBudget = function PrintButtonBudget(_ref) {
  var id = _ref.id,
    useBudget = _ref.useBudget,
    siteOptions = _ref.siteOptions,
    logoPdf = _ref.logoPdf;
  var _useState = (0, _react.useState)( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    RenderButton = _useState2[0],
    setRenderButton = _useState2[1];
  var budget = useBudget.data.actions.getById(id);
  (0, _react.useEffect)(function () {
    setRenderButton(function () {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _css.css)(printButtonStylesContainer)
      }, budget && /*#__PURE__*/_react["default"].createElement(_renderer.PDFDownloadLink, {
        document: /*#__PURE__*/_react["default"].createElement(_Pdf.BudgetPdf, {
          budget: budget,
          logo: logoPdf,
          siteOptions: siteOptions
        }),
        fileName: "presupuesto".concat(budget.postsId, ".pdf")
      }, function (_ref2) {
        var blob = _ref2.blob,
          url = _ref2.url,
          loading = _ref2.loading,
          error = _ref2.error;
        return loading ? /*#__PURE__*/_react["default"].createElement(_Components.Loading, {
          mainStyles: {
            padding: '0px'
          },
          divStyle: {
            border: '3px solid #eee',
            borderTop: '3px solid #077bb4',
            width: '20px',
            height: '20px'
          }
        }) : /*#__PURE__*/_react["default"].createElement(_Button.Button, {
          title: "Imprimir",
          styles: {
            fontSize: '10px'
          }
        });
      }));
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return RenderButton;
};
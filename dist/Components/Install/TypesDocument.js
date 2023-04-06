"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypesDocument = void 0;
var react_1 = __importDefault(require("react"));
var Abstract_1 = require("../../Abstract");
var TypesDocument = function (_a) {
    var actions = _a.actions, useTypeDocument = _a.useTypeDocument;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Abstract_1.Step, { step: "4", title: "Agregar Tipo de Documento", buttonReturnTitle: "Atr\u00E1s", buttonReturnStyles: {
                backgroundColor: '#c12429',
            }, buttonReturnProps: {
                onClick: actions.onConfigSite,
            }, buttonNextTitle: "Siguiente", buttonNextProps: {
                onClick: actions.nextTypeDocument,
                id: 'buttonNextTypeDocument',
            } }),
        react_1.default.createElement(Abstract_1.TypeDocument, { useTypeDocument: useTypeDocument })));
};
exports.TypesDocument = TypesDocument;
//# sourceMappingURL=TypesDocument.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeDocument = void 0;
var react_1 = __importDefault(require("react"));
var index_1 = require("./../index");
var TypeDocument = function (_a) {
    var useTypeDocument = _a.useTypeDocument;
    var _b = react_1.default.useState(react_1.default.createElement(react_1.default.Fragment, null)), InputCountry = _b[0], setInputCountry = _b[1];
    react_1.default.useEffect(function () {
        setInputCountry(function () {
            return (react_1.default.createElement(index_1.GsSelect, { id: "countryTypeDocument", onChange: function (event) { return useTypeDocument.actions.changeCountry(event); }, options: useTypeDocument.states.countryOptions, defaultValue: useTypeDocument.states.countryDefault }));
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    react_1.default.useEffect(function () {
        useTypeDocument.actions.validationCountry(useTypeDocument.states.country);
        useTypeDocument.actions.validationName(useTypeDocument.states.name);
    }, [InputCountry]);
    react_1.default.useEffect(function () {
        useTypeDocument.actions.validationButtonNext();
    }, [useTypeDocument.states.countryValid, useTypeDocument.states.nameValid]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(index_1.ContainerForm, null,
            react_1.default.createElement(react_1.default.Fragment, null,
                InputCountry,
                react_1.default.createElement(index_1.Input, { inputProps: {
                        placeholder: 'Nombre del tipo de Documento',
                        type: 'text',
                        id: 'nameTypeDocument',
                        onKeyUp: function (event) {
                            return useTypeDocument.actions.changeName(event.target.value);
                        },
                        defaultValue: useTypeDocument.states.name,
                    } })))));
};
exports.TypeDocument = TypeDocument;
//# sourceMappingURL=TypeDocument.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curriencies = void 0;
var react_1 = __importDefault(require("react"));
var Abstract_1 = require("../../Abstract");
var Abstract_2 = require("../../Abstract");
var Abstract_3 = require("../../Abstract");
var Curriencies = function (_a) {
    var actions = _a.actions, useCurrency = _a.useCurrency;
    react_1.default.useEffect(function () {
        useCurrency.actions.validationCurrencyValue(useCurrency.states.currenciesDefault.value);
        useCurrency.actions.validationButtonCurrency(useCurrency.states.validationCurrency);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Abstract_2.Step, { step: "1", title: "Tipo de Moneda Principal", buttonNextTitle: "Siguiente", buttonNextProps: {
                onClick: actions.nextCurrency,
                id: 'nextCurrency',
            } }),
        react_1.default.createElement(Abstract_1.ContainerForm, null,
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Abstract_3.GsSelect, { id: "currencyName", onChange: function (event) { return useCurrency.actions.currencyChange(event); }, options: useCurrency.states.currenciesOptions, defaultValue: useCurrency.states.currenciesDefault })))));
};
exports.Curriencies = Curriencies;
//# sourceMappingURL=Currencies.js.map
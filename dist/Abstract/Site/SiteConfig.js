"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiteConfig = void 0;
var react_1 = __importDefault(require("react"));
var index_1 = require("./../index");
var SiteConfig = function (_a) {
    var useSitesConfig = _a.useSitesConfig;
    var _b = react_1.default.useState(react_1.default.createElement(react_1.default.Fragment, null)), InputCurrency = _b[0], setInputCurrency = _b[1];
    var _c = react_1.default.useState(react_1.default.createElement(react_1.default.Fragment, null)), InputCurrencyLocation = _c[0], setInputCurrencyLocation = _c[1];
    var _d = react_1.default.useState(react_1.default.createElement(react_1.default.Fragment, null)), InputSeparator = _d[0], setInputSeparator = _d[1];
    var _e = react_1.default.useState(react_1.default.createElement(react_1.default.Fragment, null)), InputDecimalNumbers = _e[0], setInputDecimalNumbers = _e[1];
    var _f = react_1.default.useState(react_1.default.createElement(react_1.default.Fragment, null)), InputTaxes = _f[0], setInputTaxes = _f[1];
    react_1.default.useEffect(function () {
        setInputCurrency(function () {
            return (react_1.default.createElement(index_1.GsSelect, { id: "currencySite", onChange: function (event) { return useSitesConfig.actions.changeCurrency(event); }, options: useSitesConfig.states.currencyOptions, defaultValue: useSitesConfig.states.currencyDefault, styles: {
                    width: '90%',
                } }));
        });
        setInputCurrencyLocation(function () {
            return (react_1.default.createElement(index_1.GsSelect, { id: "currencyLocationSite", onChange: function (event) {
                    return useSitesConfig.actions.changeCurrencyLocation(event);
                }, options: useSitesConfig.states.currencyLocationOptions, defaultValue: useSitesConfig.states.currencyLocationDefault, styles: {
                    width: '90%',
                } }));
        });
        setInputSeparator(function () {
            return (react_1.default.createElement(index_1.GsSelect, { id: "separatorSite", onChange: function (event) { return useSitesConfig.actions.changeSeparator(event); }, options: useSitesConfig.states.separatorOptions, defaultValue: useSitesConfig.states.separatorDefault, styles: {
                    width: '90%',
                } }));
        });
        setInputDecimalNumbers(function () {
            return (react_1.default.createElement(index_1.GsSelect, { id: "decimalNumbersSite", onChange: function (event) {
                    return useSitesConfig.actions.changeDecimalNumbers(event);
                }, options: useSitesConfig.states.decimalNumbersOptions, defaultValue: useSitesConfig.states.decimalNumbersDefault, styles: {
                    width: '90%',
                } }));
        });
        setInputTaxes(function () {
            return (react_1.default.createElement(index_1.GsSelect, { id: "taxesSite", onChange: function (event) { return useSitesConfig.actions.changeTaxes(event); }, options: useSitesConfig.states.taxesOptions, defaultValue: useSitesConfig.states.taxesDefault, styles: {
                    width: '90%',
                } }));
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    react_1.default.useEffect(function () {
        useSitesConfig.actions.validationCurrency(useSitesConfig.states.currency);
        useSitesConfig.actions.validationCurrencyLocation(useSitesConfig.states.currencyLocation);
        useSitesConfig.actions.validationSeparator(useSitesConfig.states.thousandsSeparator);
        useSitesConfig.actions.validationSeparator(useSitesConfig.states.decimalSeparator);
        useSitesConfig.actions.validationDecimalNumbers(useSitesConfig.states.decimalNumbers);
        useSitesConfig.actions.validationTaxes(useSitesConfig.states.taxes);
        useSitesConfig.actions.validationHost(useSitesConfig.states.host);
    }, [
        InputCurrency,
        InputCurrencyLocation,
        InputDecimalNumbers,
        InputSeparator,
        InputTaxes,
    ]);
    react_1.default.useEffect(function () {
        useSitesConfig.actions.validationButtonNext();
    }, [
        useSitesConfig.states.currencyValid,
        useSitesConfig.states.currencyLocationValid,
        useSitesConfig.states.separatorValid,
        useSitesConfig.states.decimalNumbersValid,
        useSitesConfig.states.taxesValid,
        useSitesConfig.states.hostValid,
    ]); // eslint-disable-line react-hooks/exhaustive-deps
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(index_1.ContainerForm, null,
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(index_1.ContainerButton, { styles: {
                        width: '96.5%',
                    } },
                    react_1.default.createElement(react_1.default.Fragment, null,
                        InputCurrency,
                        InputCurrencyLocation)),
                react_1.default.createElement(index_1.ContainerButton, { styles: {
                        width: '96.5%',
                    } },
                    react_1.default.createElement(react_1.default.Fragment, null,
                        InputSeparator,
                        InputDecimalNumbers)),
                react_1.default.createElement(index_1.ContainerButton, { styles: {
                        width: '96.5%',
                    } },
                    react_1.default.createElement(react_1.default.Fragment, null,
                        InputTaxes,
                        react_1.default.createElement(index_1.Input, { inputProps: {
                                placeholder: 'Host',
                                type: 'text',
                                id: 'hostSite',
                                onKeyUp: function (event) {
                                    return useSitesConfig.actions.changeHost(event.target.value);
                                },
                                defaultValue: useSitesConfig.states.host,
                            }, styles: {
                                padding: '10px 19px',
                                width: '90%',
                            } })))))));
};
exports.SiteConfig = SiteConfig;
//# sourceMappingURL=SiteConfig.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiteInfo = void 0;
var react_1 = __importDefault(require("react"));
var index_1 = require("./../index");
var SiteInfo = function (_a) {
    var useSites = _a.useSites;
    var _b = react_1.default.useState(react_1.default.createElement(react_1.default.Fragment, null)), InputTypeDocument = _b[0], setInputTypeDocument = _b[1];
    var _c = react_1.default.useState(react_1.default.createElement(react_1.default.Fragment, null)), InputCity = _c[0], setInputCity = _c[1];
    var _d = react_1.default.useState(react_1.default.createElement(react_1.default.Fragment, null)), InputState = _d[0], setInputState = _d[1];
    var _e = react_1.default.useState(react_1.default.createElement(react_1.default.Fragment, null)), InputCountry = _e[0], setInputCountry = _e[1];
    react_1.default.useEffect(function () {
        setInputTypeDocument(function () {
            return (react_1.default.createElement(index_1.GsSelect, { id: "siteDocumentIndex", onChange: function (event) { return useSites.actions.changeSiteDocumentIndex(event); }, options: useSites.states.siteDocumentIndexOptions, defaultValue: useSites.states.siteDocumentIndexDefault, styles: {
                    width: '90%',
                } }));
        });
        setInputCountry(function () {
            return (react_1.default.createElement(index_1.GsSelect, { id: "countrySite", onChange: function (event) { return useSites.actions.changeCountry(event); }, options: useSites.states.countryOptions, defaultValue: useSites.states.countryDefault, styles: {
                    width: '90%',
                } }));
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    react_1.default.useEffect(function () {
        if (useSites.states.stateCountryOptions.length > 0) {
            setInputState(function () {
                return (react_1.default.createElement(index_1.GsSelect, { id: "stateCountrySite", onChange: function (event) { return useSites.actions.changeStateCountry(event); }, options: useSites.states.stateCountryOptions, defaultValue: useSites.states.stateCountryDefault, styles: {
                        width: '90%',
                    } }));
            });
        }
        else {
            setInputState(function () {
                return (react_1.default.createElement(index_1.Input, { inputProps: {
                        placeholder: 'Estado',
                        type: 'text',
                        id: 'stateCountrySite',
                        onKeyUp: function (event) {
                            return useSites.actions.changeStateCountry({
                                label: event.target.value,
                                value: event.target.value,
                            });
                        },
                        defaultValue: useSites.states.stateCountry,
                    }, styles: {
                        padding: '10px 19px',
                        width: '90%',
                    } }));
            });
        }
        if (useSites.states.cityOptions.length > 0) {
            setInputCity(function () {
                return (react_1.default.createElement(index_1.GsSelect, { id: "citySite", onChange: function (event) { return useSites.actions.changeCity(event); }, options: useSites.states.cityOptions, defaultValue: useSites.states.cityDefault, styles: {
                        width: '90%',
                    } }));
            });
        }
        else {
            setInputCity(function () {
                return (react_1.default.createElement(index_1.Input, { inputProps: {
                        placeholder: 'Ciudad',
                        type: 'text',
                        id: 'citySite',
                        onKeyUp: function (event) {
                            return useSites.actions.changeCity({
                                label: event.target.value,
                                value: event.target.value,
                            });
                        },
                        defaultValue: useSites.states.city,
                    }, styles: {
                        padding: '10px 19px',
                        width: '90%',
                    } }));
            });
        }
    }, [
        useSites.states.country,
        useSites.states.stateCountryOptions,
        useSites.states.cityOptions,
    ]);
    react_1.default.useEffect(function () {
        useSites.actions.validationSiteName(useSites.states.siteName);
        useSites.actions.validationSiteDocumentIndex(useSites.states.siteDocumentIndex);
        useSites.actions.validationDocument(useSites.states.document);
        useSites.actions.validationAddress1(useSites.states.address1);
        useSites.actions.validationCity(useSites.states.city);
        useSites.actions.validationStateCountry(useSites.states.stateCountry);
        useSites.actions.validationCountry(useSites.states.country);
        useSites.actions.validationPostcode(useSites.states.postcode);
        useSites.actions.validationPhone(useSites.states.phone);
        useSites.actions.validationEmail(useSites.states.email);
    }, [
        InputCountry,
        InputState,
        InputCity,
        useSites.states.country,
        useSites.states.stateCountry,
        useSites.states.city,
    ]);
    react_1.default.useEffect(function () {
        useSites.actions.validationButtonNext();
    }, [
        useSites.states.validSiteName,
        useSites.states.validSiteDocumentIndex,
        useSites.states.validDocument,
        useSites.states.validAddress1,
        useSites.states.validAddress2,
        useSites.states.validCity,
        useSites.states.validStateCountry,
        useSites.states.validCountry,
        useSites.states.validPostcode,
        useSites.states.validPhone,
        useSites.states.validEmail,
    ]); // eslint-disable-line react-hooks/exhaustive-deps
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(index_1.ContainerForm, null,
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(index_1.Input, { inputProps: {
                        placeholder: 'Nombre del sitio',
                        type: 'text',
                        id: 'siteName',
                        onKeyUp: function (event) {
                            return useSites.actions.changeSiteName(event.target.value);
                        },
                        defaultValue: useSites.states.siteName,
                    } }),
                react_1.default.createElement(index_1.ContainerButton, { styles: {
                        width: '96.5%',
                    } },
                    react_1.default.createElement(react_1.default.Fragment, null,
                        InputTypeDocument,
                        react_1.default.createElement(index_1.Input, { inputProps: {
                                placeholder: 'Numero de documento legal',
                                type: 'text',
                                id: 'siteDocument',
                                onKeyUp: function (event) {
                                    return useSites.actions.changeDocument(event.target.value);
                                },
                                defaultValue: useSites.states.document,
                            }, styles: {
                                padding: '10px 19px',
                                width: '90%',
                            } }))),
                react_1.default.createElement(index_1.ContainerButton, { styles: {
                        width: '96.5%',
                    } },
                    react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(index_1.Input, { inputProps: {
                                placeholder: 'Dirección 1',
                                type: 'text',
                                id: 'address1',
                                onKeyUp: function (event) {
                                    return useSites.actions.changeAddres1(event.target.value);
                                },
                                defaultValue: useSites.states.address1,
                            }, styles: {
                                width: '90%',
                            } }),
                        react_1.default.createElement(index_1.Input, { inputProps: {
                                placeholder: 'Dirección 2',
                                type: 'text',
                                id: 'address2',
                                onKeyUp: function (event) {
                                    return useSites.actions.changeAddres2(event.target.value);
                                },
                                defaultValue: useSites.states.address2,
                            }, styles: {
                                width: '90%',
                            } }))),
                react_1.default.createElement(index_1.ContainerButton, { styles: {
                        width: '96.5%',
                    } },
                    react_1.default.createElement(react_1.default.Fragment, null,
                        InputCity,
                        InputState)),
                react_1.default.createElement(index_1.ContainerButton, { styles: {
                        width: '96.5%',
                    } },
                    react_1.default.createElement(react_1.default.Fragment, null,
                        InputCountry,
                        react_1.default.createElement(index_1.Input, { inputProps: {
                                placeholder: 'Código Postal',
                                type: 'text',
                                id: 'postcodeSite',
                                onKeyUp: function (event) {
                                    return useSites.actions.changePostcode(event.target.value);
                                },
                                defaultValue: useSites.states.postcode,
                            }, styles: {
                                padding: '10px 19px',
                                width: '90%',
                            } }))),
                react_1.default.createElement(index_1.ContainerButton, { styles: {
                        width: '96.5%',
                    } },
                    react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(index_1.Input, { inputProps: {
                                placeholder: 'Teléfono',
                                type: 'phone',
                                id: 'phoneSite',
                                onKeyUp: function (event) {
                                    return useSites.actions.changePhone(event.target.value);
                                },
                                defaultValue: useSites.states.phone,
                            }, styles: {
                                padding: '10px 19px',
                                width: '90%',
                            } }),
                        react_1.default.createElement(index_1.Input, { inputProps: {
                                placeholder: 'Email',
                                type: 'email',
                                id: 'emailSite',
                                onKeyUp: function (event) {
                                    return useSites.actions.changeEmail(event.target.value);
                                },
                                defaultValue: useSites.states.email,
                            }, styles: {
                                padding: '10px 19px',
                                width: '90%',
                            } })))))));
};
exports.SiteInfo = SiteInfo;
//# sourceMappingURL=SiteInfo.js.map
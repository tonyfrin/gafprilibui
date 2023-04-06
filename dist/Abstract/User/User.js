"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var react_1 = __importDefault(require("react"));
var index_1 = require("./../index");
var User = function (_a) {
    var useUser = _a.useUser;
    var _b = react_1.default.useState(react_1.default.createElement(react_1.default.Fragment, null)), InputTypeDocument = _b[0], setInputTypeDocument = _b[1];
    var _c = react_1.default.useState(react_1.default.createElement(react_1.default.Fragment, null)), InputCity = _c[0], setInputCity = _c[1];
    var _d = react_1.default.useState(react_1.default.createElement(react_1.default.Fragment, null)), InputState = _d[0], setInputState = _d[1];
    var _e = react_1.default.useState(react_1.default.createElement(react_1.default.Fragment, null)), InputCountry = _e[0], setInputCountry = _e[1];
    react_1.default.useEffect(function () {
        setInputCountry(function () {
            return (react_1.default.createElement(index_1.GsSelect, { id: "countryUser", onChange: function (event) { return useUser.actions.changeCountry(event); }, options: useUser.states.countryOptions, defaultValue: useUser.states.countryDefault, styles: {
                    width: '85%',
                } }));
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    react_1.default.useEffect(function () {
        if (useUser.states.stateCountryOptions.length > 0) {
            setInputState(function () {
                return (react_1.default.createElement(index_1.GsSelect, { id: "stateCountryUser", onChange: function (event) { return useUser.actions.changeStateCountry(event); }, options: useUser.states.stateCountryOptions, defaultValue: useUser.states.stateCountryDefault, styles: {
                        width: '85%',
                    } }));
            });
        }
        else {
            setInputState(function () {
                return (react_1.default.createElement(index_1.Input, { inputProps: {
                        placeholder: 'Estado',
                        type: 'text',
                        id: 'stateCountryUser',
                        onKeyUp: function (event) {
                            return useUser.actions.changeStateCountry({
                                label: event.target.value,
                                value: event.target.value,
                            });
                        },
                        defaultValue: useUser.states.stateCountry,
                    }, styles: {
                        padding: '10px 19px',
                        width: '85%',
                    } }));
            });
        }
    }, [useUser.states.country, useUser.states.stateCountryOptions]);
    react_1.default.useEffect(function () {
        if (useUser.states.cityOptions.length > 0) {
            setInputCity(function () {
                return (react_1.default.createElement(index_1.GsSelect, { id: "cityUser", onChange: function (event) { return useUser.actions.changeCity(event); }, options: useUser.states.cityOptions, defaultValue: useUser.states.cityDefault, styles: {
                        width: '85%',
                    } }));
            });
        }
        else {
            setInputCity(function () {
                return (react_1.default.createElement(index_1.Input, { inputProps: {
                        placeholder: 'Ciudad',
                        type: 'text',
                        id: 'cityUser',
                        onKeyUp: function (event) {
                            return useUser.actions.changeCity({
                                label: event.target.value,
                                value: event.target.value,
                            });
                        },
                        defaultValue: useUser.states.city,
                    }, styles: {
                        padding: '10px 19px',
                        width: '85%',
                    } }));
            });
        }
    }, [
        useUser.states.country,
        useUser.states.stateCountryOptions,
        useUser.states.cityOptions,
    ]);
    react_1.default.useEffect(function () {
        if (useUser.states.documentIndexOptions.length > 0) {
            setInputTypeDocument(function () {
                return (react_1.default.createElement(index_1.GsSelect, { id: "typeDocumentUser", onChange: function (event) { return useUser.actions.changeDocumentIndex(event); }, options: useUser.states.documentIndexOptions, defaultValue: useUser.states.documentIndexDefault, styles: {
                        width: '90%',
                    } }));
            });
        }
        else {
            setInputTypeDocument(function () {
                return (react_1.default.createElement(index_1.Input, { inputProps: {
                        placeholder: 'Tipo de documento',
                        type: 'text',
                        id: 'typeDocumentUser',
                        onKeyUp: function (event) {
                            return useUser.actions.changeDocumentIndex({
                                label: event.target.value,
                                value: event.target.value,
                            });
                        },
                        defaultValue: useUser.states.documentIndex,
                    }, styles: {
                        padding: '10px 19px',
                        width: '90%',
                    } }));
            });
        }
    }, [useUser.states.country, useUser.states.documentIndexOptions]);
    react_1.default.useEffect(function () {
        useUser.actions.validationName(useUser.states.name);
        useUser.actions.validationLastName(useUser.states.lastName);
        useUser.actions.validationRole(useUser.states.role);
        useUser.actions.validationDocumentIndex(useUser.states.documentIndex);
        useUser.actions.validationDocument(useUser.states.document);
        useUser.actions.validationAddress1(useUser.states.address1);
        useUser.actions.validationAddress2(useUser.states.address2);
        useUser.actions.validationCity(useUser.states.city);
        useUser.actions.validationStateCountry(useUser.states.stateCountry);
        useUser.actions.validationCountry(useUser.states.country);
        useUser.actions.validationPostcode(useUser.states.postcode);
        useUser.actions.validationPhone(useUser.states.phone);
        useUser.actions.validationEmail(useUser.states.email);
        useUser.actions.validationPassword(useUser.states.password);
    }, [InputCountry, InputTypeDocument, InputCity, InputState]);
    react_1.default.useEffect(function () {
        useUser.actions.validationButtonNext();
    }, [
        useUser.states.nameValid,
        useUser.states.lastNameValid,
        useUser.states.roleValid,
        useUser.states.documentIndexValid,
        useUser.states.documentValid,
        useUser.states.address1Valid,
        useUser.states.address2Valid,
        useUser.states.cityValid,
        useUser.states.stateCountryValid,
        useUser.states.countryValid,
        useUser.states.postcodeValid,
        useUser.states.phoneValid,
        useUser.states.emailValid,
        useUser.states.passwordValid,
    ]);
    return (react_1.default.createElement(index_1.ContainerForm, null,
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(index_1.ContainerButton, { styles: {
                    width: '96.5%',
                } },
                react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(index_1.Input, { inputProps: {
                            placeholder: 'Nombre',
                            type: 'text',
                            id: 'nameUser',
                            onKeyUp: function (event) {
                                return useUser.actions.changeName(event.target.value);
                            },
                            defaultValue: useUser.states.name,
                        }, styles: {
                            width: '85%',
                        } }),
                    react_1.default.createElement(index_1.Input, { inputProps: {
                            placeholder: 'Apellido',
                            type: 'text',
                            id: 'lastNameUser',
                            onKeyUp: function (event) {
                                return useUser.actions.changeLastName(event.target.value);
                            },
                            defaultValue: useUser.states.lastName,
                        }, styles: {
                            width: '85%',
                        } }),
                    react_1.default.createElement(index_1.Input, { inputProps: {
                            placeholder: 'Rol',
                            type: 'text',
                            id: 'roleUser',
                            onKeyUp: function (event) {
                                return useUser.actions.changeRole(event.target.value);
                            },
                            defaultValue: useUser.states.role,
                        }, styles: {
                            width: '85%',
                        } }))),
            react_1.default.createElement(index_1.ContainerButton, { styles: {
                    width: '96.5%',
                } },
                react_1.default.createElement(react_1.default.Fragment, null,
                    InputTypeDocument,
                    react_1.default.createElement(index_1.Input, { inputProps: {
                            placeholder: 'Número de documento',
                            type: 'text',
                            id: 'documentUser',
                            onKeyUp: function (event) {
                                return useUser.actions.changeDocument(event.target.value);
                            },
                            defaultValue: useUser.states.document,
                        }, styles: {
                            padding: '10px 19px',
                            width: '90%',
                        } }))),
            react_1.default.createElement(index_1.ContainerButton, { styles: {
                    width: '96.5%',
                } },
                react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(index_1.Input, { inputProps: {
                            placeholder: 'Dirección',
                            type: 'text',
                            id: 'address1User',
                            onKeyUp: function (event) {
                                return useUser.actions.changeAddress1(event.target.value);
                            },
                            defaultValue: useUser.states.address1,
                        }, styles: {
                            padding: '10px 19px',
                            width: '90%',
                        } }),
                    react_1.default.createElement(index_1.Input, { inputProps: {
                            placeholder: 'Dirección 2',
                            type: 'text',
                            id: 'address2User',
                            onKeyUp: function (event) {
                                return useUser.actions.changeAddress2(event.target.value);
                            },
                            defaultValue: useUser.states.address2,
                        }, styles: {
                            padding: '10px 19px',
                            width: '90%',
                        } }))),
            react_1.default.createElement(index_1.ContainerButton, { styles: {
                    width: '96.5%',
                } },
                react_1.default.createElement(react_1.default.Fragment, null,
                    InputCity,
                    InputState,
                    InputCountry)),
            react_1.default.createElement(index_1.ContainerButton, { styles: {
                    width: '96.5%',
                } },
                react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(index_1.Input, { inputProps: {
                            placeholder: 'Código Postal',
                            type: 'text',
                            id: 'postcodeUser',
                            onKeyUp: function (event) {
                                return useUser.actions.changePostcode(event.target.value);
                            },
                            defaultValue: useUser.states.postcode,
                        }, styles: {
                            padding: '10px 19px',
                            width: '90%',
                        } }),
                    react_1.default.createElement(index_1.Input, { inputProps: {
                            placeholder: 'Teléfono',
                            type: 'text',
                            id: 'phoneUser',
                            onKeyUp: function (event) {
                                return useUser.actions.changePhone(event.target.value);
                            },
                            defaultValue: useUser.states.phone,
                        }, styles: {
                            padding: '10px 19px',
                            width: '90%',
                        } }))),
            react_1.default.createElement(index_1.ContainerButton, { styles: {
                    width: '96.5%',
                } },
                react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(index_1.Input, { inputProps: {
                            placeholder: 'Email',
                            type: 'text',
                            id: 'emailUser',
                            onKeyUp: function (event) {
                                return useUser.actions.changeEmail(event.target.value);
                            },
                            defaultValue: useUser.states.email,
                        }, styles: {
                            padding: '10px 19px',
                            width: '90%',
                        } }),
                    react_1.default.createElement(index_1.Input, { inputProps: {
                            placeholder: 'Contraceña',
                            type: 'text',
                            id: 'passwordUser',
                            onKeyUp: function (event) {
                                return useUser.actions.changePassword(event.target.value);
                            },
                            defaultValue: useUser.states.password,
                        }, styles: {
                            padding: '10px 19px',
                            width: '90%',
                        } }))))));
};
exports.User = User;
//# sourceMappingURL=User.js.map
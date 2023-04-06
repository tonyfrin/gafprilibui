"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGafpriUser = void 0;
var react_1 = __importDefault(require("react"));
var helpers_1 = require("../helpers");
var Constans_1 = require("../Constans");
var optionsCountry = [];
Constans_1.Countries.forEach(function (item) {
    Object.keys(item).forEach(function (key) {
        optionsCountry.push({ value: key, label: item[key] });
    });
});
var actionTypes = {
    name: 'NAME',
    nameValid: 'NAME_VALID',
    lastName: 'LAST_NAME',
    lastNameValid: 'LAST_NAME_VALID',
    role: 'ROLE',
    roleValid: 'ROLE_VALID',
    documentIndex: 'DOCUMENT_INDEX',
    documentIndexValid: 'DOCUMENT_INDEX_VALID',
    documentIndexOptions: 'DOCUMENT_INDEX_OPTIONS',
    documentIndexDefault: 'DOCUMENT_INDEX_DEFAULT',
    document: 'DOCUMENT',
    documentValid: 'DOCUMENT_VALID',
    address1: 'ADDRESS_1',
    address1Valid: 'ADDRESS_1_VALID',
    address2: 'ADDRESS_2',
    address2Valid: 'ADDRESS_2_VALID',
    city: 'CITY',
    cityValid: 'CITY_VALID',
    cityOptions: 'CITY_OPTIONS',
    cityDefault: 'CITY_DEFAULT',
    stateCountry: 'STATE_COUNTRY',
    stateCountryValid: 'STATE_COUNTRY_VALID',
    stateCountryOptions: 'STATE_COUNTRY_OPTIONS',
    stateCountryDefault: 'STATE_COUNTRY_DEFAULT',
    country: 'COUNTRY',
    countryValid: 'COUNTRY_VALID',
    countryDefault: 'COUNTREY_DEFAULT',
    postcode: 'POSTCODE',
    postcodeValid: 'POSTCODE_VALID',
    email: 'EMAIL',
    emailValid: 'EMAIL_VALID',
    phone: 'PHONE',
    phoneValid: 'PHONE_VALID',
    password: 'PASSWORD',
    passwordValid: 'PASSWORD_VALID',
};
var reducerObject = (_a = {},
    _a[actionTypes.name] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { name: payload });
        }
        return state;
    },
    _a[actionTypes.nameValid] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { nameValid: payload });
        }
        return state;
    },
    _a[actionTypes.lastName] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { lastName: payload });
        }
        return state;
    },
    _a[actionTypes.lastNameValid] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { lastNameValid: payload });
        }
        return state;
    },
    _a[actionTypes.role] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { role: payload });
        }
        return state;
    },
    _a[actionTypes.roleValid] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { roleValid: payload });
        }
        return state;
    },
    _a[actionTypes.documentIndex] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { documentIndex: payload });
        }
        return state;
    },
    _a[actionTypes.documentIndexValid] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { documentIndexValid: payload });
        }
        return state;
    },
    _a[actionTypes.documentIndexOptions] = function (state, payload) {
        if ((0, helpers_1.isSelectDefaultArray)(payload)) {
            return __assign(__assign({}, state), { documentIndexOptions: payload });
        }
        return state;
    },
    _a[actionTypes.documentIndexDefault] = function (state, payload) {
        if ((0, helpers_1.isSelectDefault)(payload)) {
            return __assign(__assign({}, state), { cityDefault: payload });
        }
        return state;
    },
    _a[actionTypes.document] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { document: payload });
        }
        return state;
    },
    _a[actionTypes.documentValid] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { documentValid: payload });
        }
        return state;
    },
    _a[actionTypes.address1] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { address1: payload });
        }
        return state;
    },
    _a[actionTypes.address1Valid] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { address1Valid: payload });
        }
        return state;
    },
    _a[actionTypes.address2] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { address2: payload });
        }
        return state;
    },
    _a[actionTypes.address2Valid] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { address2Valid: payload });
        }
        return state;
    },
    _a[actionTypes.city] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { city: payload });
        }
        return state;
    },
    _a[actionTypes.cityValid] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { cityValid: payload });
        }
        return state;
    },
    _a[actionTypes.cityOptions] = function (state, payload) {
        if ((0, helpers_1.isSelectDefaultArray)(payload)) {
            return __assign(__assign({}, state), { cityOptions: payload });
        }
        return state;
    },
    _a[actionTypes.cityDefault] = function (state, payload) {
        if ((0, helpers_1.isSelectDefault)(payload)) {
            return __assign(__assign({}, state), { cityDefault: payload });
        }
        return state;
    },
    _a[actionTypes.stateCountry] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { stateCountry: payload });
        }
        return state;
    },
    _a[actionTypes.stateCountryValid] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { stateCountryValid: payload });
        }
        return state;
    },
    _a[actionTypes.stateCountryOptions] = function (state, payload) {
        if ((0, helpers_1.isSelectDefaultArray)(payload)) {
            return __assign(__assign({}, state), { stateCountryOptions: payload });
        }
        return state;
    },
    _a[actionTypes.stateCountryDefault] = function (state, payload) {
        if ((0, helpers_1.isSelectDefault)(payload)) {
            return __assign(__assign({}, state), { stateCountryDefault: payload });
        }
        return state;
    },
    _a[actionTypes.country] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { country: payload });
        }
        return state;
    },
    _a[actionTypes.countryValid] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { countryValid: payload });
        }
        return state;
    },
    _a[actionTypes.countryDefault] = function (state, payload) {
        if ((0, helpers_1.isSelectDefault)(payload)) {
            return __assign(__assign({}, state), { countryDefault: payload });
        }
        return state;
    },
    _a[actionTypes.postcode] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { postcode: payload });
        }
        return state;
    },
    _a[actionTypes.postcodeValid] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { postcodeValid: payload });
        }
        return state;
    },
    _a[actionTypes.email] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { email: payload });
        }
        return state;
    },
    _a[actionTypes.emailValid] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { emailValid: payload });
        }
        return state;
    },
    _a[actionTypes.phone] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { phone: payload });
        }
        return state;
    },
    _a[actionTypes.phoneValid] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { phoneValid: payload });
        }
        return state;
    },
    _a[actionTypes.password] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { password: payload });
        }
        return state;
    },
    _a[actionTypes.passwordValid] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { passwordValid: payload });
        }
        return state;
    },
    _a);
var reducer = function (state, action) {
    var handler = reducerObject[action.type];
    if (handler && action.payload !== undefined) {
        return handler(state, action.payload);
    }
    return state;
};
var initialState = function () { return ({
    name: '',
    nameValid: false,
    lastName: '',
    lastNameValid: false,
    role: '',
    roleValid: false,
    documentIndex: '',
    documentIndexValid: false,
    documentIndexOptions: [],
    documentIndexDefault: {
        label: 'Tipo de Documento',
        value: '',
    },
    document: '',
    documentValid: false,
    address1: '',
    address1Valid: false,
    address2: '',
    address2Valid: true,
    city: '',
    cityValid: false,
    cityOptions: [],
    cityDefault: { label: 'Ciudad', value: '' },
    stateCountry: '',
    stateCountryValid: false,
    stateCountryOptions: [],
    stateCountryDefault: { label: 'Estado', value: '' },
    country: '',
    countryValid: false,
    countryOptions: optionsCountry,
    countryDefault: {
        label: 'País',
        value: '',
    },
    postcode: '',
    postcodeValid: true,
    email: '',
    emailValid: false,
    phone: '',
    phoneValid: false,
    password: '',
    passwordValid: false,
}); };
function useGafpriUser() {
    var _a = react_1.default.useReducer(reducer, initialState()), state = _a[0], dispatch = _a[1];
    var name = state.name, nameValid = state.nameValid, lastName = state.lastName, lastNameValid = state.lastNameValid, role = state.role, roleValid = state.roleValid, documentIndex = state.documentIndex, documentIndexValid = state.documentIndexValid, documentIndexOptions = state.documentIndexOptions, documentIndexDefault = state.documentIndexDefault, document = state.document, documentValid = state.documentValid, address1 = state.address1, address1Valid = state.address1Valid, address2 = state.address2, address2Valid = state.address2Valid, city = state.city, cityValid = state.cityValid, cityOptions = state.cityOptions, cityDefault = state.cityDefault, stateCountry = state.stateCountry, stateCountryValid = state.stateCountryValid, stateCountryOptions = state.stateCountryOptions, stateCountryDefault = state.stateCountryDefault, country = state.country, countryValid = state.countryValid, countryOptions = state.countryOptions, countryDefault = state.countryDefault, postcode = state.postcode, postcodeValid = state.postcodeValid, email = state.email, emailValid = state.emailValid, phone = state.phone, phoneValid = state.phoneValid, password = state.password, passwordValid = state.passwordValid;
    // Setear valores de sitio
    var setName = function (value) {
        return dispatch({
            type: actionTypes.name,
            payload: value,
        });
    };
    var setNameValid = function (value) {
        return dispatch({
            type: actionTypes.nameValid,
            payload: value,
        });
    };
    var setLastName = function (value) {
        return dispatch({
            type: actionTypes.lastName,
            payload: value,
        });
    };
    var setLastNameValid = function (value) {
        return dispatch({
            type: actionTypes.lastNameValid,
            payload: value,
        });
    };
    var setRole = function (value) {
        return dispatch({
            type: actionTypes.role,
            payload: value,
        });
    };
    var setRoleValid = function (value) {
        return dispatch({
            type: actionTypes.roleValid,
            payload: value,
        });
    };
    var setDocumentIndex = function (value) {
        return dispatch({
            type: actionTypes.documentIndex,
            payload: value,
        });
    };
    var setDocumentIndexValid = function (value) {
        return dispatch({
            type: actionTypes.documentIndexValid,
            payload: value,
        });
    };
    var setDocumentIndexOptions = function (value) {
        return dispatch({
            type: actionTypes.documentIndexOptions,
            payload: value,
        });
    };
    var setDocumentIndexDefault = function (value) {
        return dispatch({
            type: actionTypes.documentIndexDefault,
            payload: value,
        });
    };
    var setDocument = function (value) {
        return dispatch({
            type: actionTypes.document,
            payload: value,
        });
    };
    var setDocumentValid = function (value) {
        return dispatch({
            type: actionTypes.documentValid,
            payload: value,
        });
    };
    var setAddress1 = function (value) {
        return dispatch({
            type: actionTypes.address1,
            payload: value,
        });
    };
    var setAddress1Valid = function (value) {
        return dispatch({
            type: actionTypes.address1Valid,
            payload: value,
        });
    };
    var setAddress2 = function (value) {
        return dispatch({
            type: actionTypes.address2,
            payload: value,
        });
    };
    var setAddress2Valid = function (value) {
        return dispatch({
            type: actionTypes.address2Valid,
            payload: value,
        });
    };
    var setCity = function (value) {
        return dispatch({
            type: actionTypes.city,
            payload: value,
        });
    };
    var setCityValid = function (value) {
        return dispatch({
            type: actionTypes.cityValid,
            payload: value,
        });
    };
    var setCityOptions = function (value) {
        return dispatch({
            type: actionTypes.cityOptions,
            payload: value,
        });
    };
    var setCityDefault = function (value) {
        return dispatch({
            type: actionTypes.cityDefault,
            payload: value,
        });
    };
    var setStateCountry = function (value) {
        return dispatch({
            type: actionTypes.stateCountry,
            payload: value,
        });
    };
    var setStateCountryValid = function (value) {
        return dispatch({
            type: actionTypes.stateCountryValid,
            payload: value,
        });
    };
    var setStateCountryOptions = function (value) {
        return dispatch({
            type: actionTypes.stateCountryOptions,
            payload: value,
        });
    };
    var setStateCountryDefault = function (value) {
        return dispatch({
            type: actionTypes.stateCountryDefault,
            payload: value,
        });
    };
    var setCountry = function (value) {
        return dispatch({
            type: actionTypes.country,
            payload: value,
        });
    };
    var setCountryValid = function (value) {
        return dispatch({
            type: actionTypes.countryValid,
            payload: value,
        });
    };
    var setCountryDefault = function (value) {
        return dispatch({
            type: actionTypes.countryDefault,
            payload: value,
        });
    };
    var setPostcode = function (value) {
        return dispatch({
            type: actionTypes.postcode,
            payload: value,
        });
    };
    var setPostcodeValid = function (value) {
        return dispatch({
            type: actionTypes.postcodeValid,
            payload: value,
        });
    };
    var setEmail = function (value) {
        return dispatch({
            type: actionTypes.email,
            payload: value,
        });
    };
    var setEmailValid = function (value) {
        return dispatch({
            type: actionTypes.emailValid,
            payload: value,
        });
    };
    var setPhone = function (value) {
        return dispatch({
            type: actionTypes.phone,
            payload: value,
        });
    };
    var setPhoneValid = function (value) {
        return dispatch({
            type: actionTypes.phoneValid,
            payload: value,
        });
    };
    var setPassword = function (value) {
        return dispatch({
            type: actionTypes.password,
            payload: value,
        });
    };
    var setPasswordValid = function (value) {
        return dispatch({
            type: actionTypes.passwordValid,
            payload: value,
        });
    };
    // Funciones de Validacion
    var validationName = function (value) {
        return (0, helpers_1.validationInputName)({
            name: value,
            inputId: 'nameUser',
            setValid: setNameValid,
        });
    };
    var validationLastName = function (value) {
        return (0, helpers_1.validationInputName)({
            name: value,
            inputId: 'lastNameUser',
            setValid: setLastNameValid,
        });
    };
    var validationRole = function (value) {
        return (0, helpers_1.validationInputName)({
            name: value,
            inputId: 'roleUser',
            setValid: setRoleValid,
        });
    };
    var validationDocumentIndex = function (value) {
        var validation = (0, helpers_1.validationSelect)(value, 'typeDocumentUser', 'gs-input-alert');
        setDocumentIndexValid(validation);
        return validation;
    };
    var validationDocument = function (value) {
        var valid = (0, helpers_1.validationInput)(value, /^\d{1,12}(-\d{1,12})?$/, 'documentUser', 'gs-input-alert', true);
        setDocumentValid(valid);
        return valid;
    };
    var validationAddress1 = function (newValue) {
        return (0, helpers_1.validationInputAddress)({
            value: newValue,
            inputId: 'address1User',
            setValid: setAddress1Valid,
        });
    };
    var validationAddress2 = function (newValue) {
        return (0, helpers_1.validationInputAddress)({
            value: newValue,
            inputId: 'address2User',
            setValid: setAddress2Valid,
        });
    };
    var validationCity = function (value) {
        var validation = (0, helpers_1.validationSelect)(value, 'cityUser', 'gs-input-alert');
        setCityValid(validation);
        return validation;
    };
    var validationStateCountry = function (value) {
        var validation = (0, helpers_1.validationSelect)(value, 'stateCountryUser', 'gs-input-alert');
        setStateCountryValid(validation);
        return validation;
    };
    var validationCountry = function (value) {
        var validation = (0, helpers_1.validationSelect)(value, 'countryUser', 'gs-input-alert');
        setCountryValid(validation);
        return validation;
    };
    var validationPostcode = function (newValue) {
        return (0, helpers_1.validationInputPostcode)({
            value: newValue,
            inputId: 'postcodeUser',
            setValid: setPostcodeValid,
        });
    };
    var validationEmail = function (newValue) {
        return (0, helpers_1.validationInputEmail)({
            value: newValue,
            inputId: 'emailUser',
            setValid: setEmailValid,
        });
    };
    var validationPhone = function (newValue) {
        return (0, helpers_1.validationInputPhone)({
            value: newValue,
            inputId: 'phoneUser',
            setValid: setPhoneValid,
        });
    };
    var validationPassword = function (newValue) {
        return (0, helpers_1.validationInputPassword)({
            value: newValue,
            inputId: 'passwordUser',
            setValid: setPasswordValid,
        });
    };
    var validationButtonNext = function () {
        if (nameValid &&
            lastNameValid &&
            roleValid &&
            documentIndexValid &&
            documentValid &&
            address1Valid &&
            address2Valid &&
            cityValid &&
            stateCountryValid &&
            countryValid &&
            postcodeValid &&
            emailValid &&
            phoneValid &&
            passwordValid) {
            (0, helpers_1.removeClass)('buttonNextUser', 'gs-disabled');
        }
        else {
            (0, helpers_1.addClass)('buttonNextUser', 'gs-disabled');
        }
    };
    // Funciones de cambios
    var changeName = function (value) {
        var newName = (0, helpers_1.toTitleCase)(value);
        (0, helpers_1.changeInputText)({
            value: newName,
            validation: validationName,
            setValue: setName,
        });
    };
    var changeLastName = function (value) {
        var newLastName = (0, helpers_1.toTitleCase)(value);
        (0, helpers_1.changeInputText)({
            value: newLastName,
            validation: validationLastName,
            setValue: setLastName,
        });
    };
    var changeRole = function (value) {
        var newRole = (0, helpers_1.toTitleCase)(value);
        (0, helpers_1.changeInputText)({
            value: newRole,
            validation: validationRole,
            setValue: setRole,
        });
    };
    var changeDocumentIndex = function (options) {
        (0, helpers_1.changeSelect)({
            newValue: options,
            validation: validationDocumentIndex,
            setDefault: setDocumentIndexDefault,
            setValue: setDocumentIndex,
        });
    };
    var changeDocument = function (newValue) {
        (0, helpers_1.changeInputText)({
            value: newValue,
            validation: validationDocument,
            setValue: setDocument,
        });
    };
    var changeAddress1 = function (value) {
        var newValue = (0, helpers_1.toTitleCase)(value);
        (0, helpers_1.changeInputText)({
            value: newValue,
            validation: validationAddress1,
            setValue: setAddress1,
        });
    };
    var changeAddress2 = function (value) {
        var newValue = (0, helpers_1.toTitleCase)(value);
        (0, helpers_1.changeInputText)({
            value: newValue,
            validation: validationAddress2,
            setValue: setAddress2,
        });
    };
    var changeCity = function (options) {
        (0, helpers_1.changeSelect)({
            newValue: options,
            validation: validationCity,
            setDefault: setCityDefault,
            setValue: setCity,
        });
    };
    var changeStateCountry = function (options) {
        (0, helpers_1.changeSelect)({
            newValue: options,
            validation: validationStateCountry,
            setDefault: setStateCountryDefault,
            setValue: setStateCountry,
        });
    };
    var changeCountry = function (options) {
        (0, helpers_1.changeSelect)({
            newValue: options,
            validation: validationCountry,
            setDefault: setCountryDefault,
            setValue: setCountry,
        });
    };
    var changePostcode = function (newValue) {
        (0, helpers_1.changeInputText)({
            value: newValue,
            validation: validationPostcode,
            setValue: setPostcode,
        });
    };
    var changeEmail = function (newValue) {
        var newEmail = newValue.toLocaleLowerCase();
        (0, helpers_1.changeInputText)({
            value: newEmail,
            validation: validationEmail,
            setValue: setEmail,
        });
    };
    var changePhone = function (newValue) {
        (0, helpers_1.changeInputText)({
            value: newValue,
            validation: validationPhone,
            setValue: setPhone,
        });
    };
    var changePassword = function (newValue) {
        (0, helpers_1.changeInputText)({
            value: newValue,
            validation: validationPassword,
            setValue: setPassword,
        });
    };
    var changeDocumentIndexOptions = react_1.default.useCallback(function () {
        var newValue = [];
        if (country &&
            Constans_1.DocumentsIndex[country] &&
            Constans_1.DocumentsIndex[country].length > 0) {
            Constans_1.DocumentsIndex[country].forEach(function (item) {
                newValue.push({ value: item.value, label: item.label });
            });
        }
        setDocumentIndexDefault({ label: 'Tipo Documento', value: '' });
        setDocumentIndex('');
        setDocumentIndexOptions(newValue);
    }, [country]);
    var changeCityOptions = react_1.default.useCallback(function () {
        var newValueCity = [];
        if (Constans_1.Cities[0][country]) {
            if (Array.isArray(Constans_1.Cities[0][country][0][stateCountry])) {
                Constans_1.Cities[0][country][0][stateCountry].forEach(function (item) {
                    Object.keys(item).forEach(function (key) {
                        newValueCity.push({ value: item[key], label: item[key] });
                    });
                });
            }
        }
        setCityDefault({ label: 'Ciudad', value: '' });
        setCity('');
        setCityOptions(newValueCity);
    }, [country, stateCountry]);
    var changeStateCountryOptions = react_1.default.useCallback(function () {
        var newValueState = [];
        if (country && Constans_1.StatesCountries[0][country].length > 0) {
            Constans_1.StatesCountries[0][country].forEach(function (item) {
                Object.keys(item).forEach(function (key) {
                    newValueState.push({ value: key, label: item[key] });
                });
            });
        }
        setStateCountryDefault({ label: 'Estado', value: '' });
        setStateCountry('');
        setStateCountryOptions(newValueState);
    }, [country]);
    /**
     * EFFECT
     *
     *
     */
    react_1.default.useEffect(function () {
        changeDocumentIndexOptions();
    }, [changeDocumentIndexOptions]);
    react_1.default.useEffect(function () {
        changeStateCountryOptions();
    }, [changeStateCountryOptions]);
    react_1.default.useEffect(function () {
        changeCityOptions();
    }, [changeCityOptions]);
    /**
     * Export
     *
     *
     */
    var states = {
        name: name,
        nameValid: nameValid,
        lastName: lastName,
        lastNameValid: lastNameValid,
        role: role,
        roleValid: roleValid,
        documentIndex: documentIndex,
        documentIndexValid: documentIndexValid,
        documentIndexOptions: documentIndexOptions,
        documentIndexDefault: documentIndexDefault,
        document: document,
        documentValid: documentValid,
        address1: address1,
        address1Valid: address1Valid,
        address2: address2,
        address2Valid: address2Valid,
        city: city,
        cityValid: cityValid,
        cityOptions: cityOptions,
        cityDefault: cityDefault,
        stateCountry: stateCountry,
        stateCountryValid: stateCountryValid,
        stateCountryOptions: stateCountryOptions,
        stateCountryDefault: stateCountryDefault,
        country: country,
        countryValid: countryValid,
        countryOptions: countryOptions,
        countryDefault: countryDefault,
        postcode: postcode,
        postcodeValid: postcodeValid,
        email: email,
        emailValid: emailValid,
        phone: phone,
        phoneValid: phoneValid,
        password: password,
        passwordValid: passwordValid,
    };
    var actions = {
        changeName: changeName,
        validationName: validationName,
        changeLastName: changeLastName,
        validationLastName: validationLastName,
        changeRole: changeRole,
        validationRole: validationRole,
        changeDocumentIndex: changeDocumentIndex,
        validationDocumentIndex: validationDocumentIndex,
        changeDocumentIndexOptions: changeDocumentIndexOptions,
        changeDocument: changeDocument,
        validationDocument: validationDocument,
        changeAddress1: changeAddress1,
        validationAddress1: validationAddress1,
        changeAddress2: changeAddress2,
        validationAddress2: validationAddress2,
        changeCity: changeCity,
        validationCity: validationCity,
        changeCityOptions: changeCityOptions,
        changeStateCountry: changeStateCountry,
        validationStateCountry: validationStateCountry,
        changeStateCountryOptions: changeStateCountryOptions,
        changeCountry: changeCountry,
        validationCountry: validationCountry,
        changePostcode: changePostcode,
        validationPostcode: validationPostcode,
        changeEmail: changeEmail,
        validationEmail: validationEmail,
        changePhone: changePhone,
        validationPhone: validationPhone,
        changePassword: changePassword,
        validationPassword: validationPassword,
        validationButtonNext: validationButtonNext,
    };
    return {
        states: states,
        actions: actions,
    };
}
exports.useGafpriUser = useGafpriUser;
//# sourceMappingURL=useGafpriUser.js.map
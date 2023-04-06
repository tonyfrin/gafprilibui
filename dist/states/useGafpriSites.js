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
exports.useGafpriSites = void 0;
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
    siteName: 'SITE_NAME',
    validSiteName: 'VALID_SITE_NAME',
    siteDocumentIndex: 'SITE_DOCUMENT_NAME',
    validSiteDocumentIndex: 'VALID_SITE_DOCUMENT_INDEX',
    siteDocumentIndexDefault: 'SITE_DOCUMENT_INDEX_DEFAULT',
    document: 'DOCUMENT',
    validDocument: 'VALID_DOCUMENT',
    address1: 'ADDRESS_1',
    validAddress1: 'VALID_ADDRESS_1',
    address2: 'ADDRESS_2',
    validAddress2: 'VALID_ADDRESS_2',
    city: 'CITY',
    validCity: 'VALID_CITY',
    cityOptions: 'CITY_OPTIONS',
    cityDefault: 'CITY_DEFOULT',
    stateCountry: 'STATE_COUNTRY',
    validStateCountry: 'VALID_STATE_COUNTRY',
    stateCountryOptions: 'STATE_COUNTRY_OPTIONS',
    stateCountryDefault: 'STATE_COUNTRY_DEFAULT',
    country: 'COUNTRY',
    validCountry: 'VALID_COUNTRY',
    countryDefault: 'COUNTRY_DEFAULT',
    postcode: 'POSTCODE',
    validPostcode: 'VALID_POSTCODE',
    phone: 'PHONE',
    validPhone: 'VALID_PHONE',
    email: 'EMAIL',
    validEmail: 'VALID_EMAIL',
};
var reducerObject = (_a = {},
    _a[actionTypes.siteName] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { siteName: payload });
        }
        return state;
    },
    _a[actionTypes.validSiteName] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { validSiteName: payload });
        }
        return state;
    },
    _a[actionTypes.siteDocumentIndex] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { siteDocumentIndex: payload });
        }
        return state;
    },
    _a[actionTypes.validSiteDocumentIndex] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { validSiteDocumentIndex: payload });
        }
        return state;
    },
    _a[actionTypes.siteDocumentIndexDefault] = function (state, payload) {
        if ((0, helpers_1.isSelectDefault)(payload)) {
            return __assign(__assign({}, state), { siteDocumentIndexDefault: payload });
        }
        return state;
    },
    _a[actionTypes.document] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { document: payload });
        }
        return state;
    },
    _a[actionTypes.validDocument] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { validSiteDocumentIndex: payload });
        }
        return state;
    },
    _a[actionTypes.address1] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { address1: payload });
        }
        return state;
    },
    _a[actionTypes.validAddress1] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { validAddress1: payload });
        }
        return state;
    },
    _a[actionTypes.address2] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { address2: payload });
        }
        return state;
    },
    _a[actionTypes.validAddress2] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { validAddress2: payload });
        }
        return state;
    },
    _a[actionTypes.city] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { city: payload });
        }
        return state;
    },
    _a[actionTypes.validCity] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { validCity: payload });
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
    _a[actionTypes.validStateCountry] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { validStateCountry: payload });
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
    _a[actionTypes.validCountry] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { validCountry: payload });
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
    _a[actionTypes.validPostcode] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { validPostcode: payload });
        }
        return state;
    },
    _a[actionTypes.phone] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { phone: payload });
        }
        return state;
    },
    _a[actionTypes.validPhone] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { validPhone: payload });
        }
        return state;
    },
    _a[actionTypes.email] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { email: payload });
        }
        return state;
    },
    _a[actionTypes.validEmail] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { validEmail: payload });
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
    siteName: '',
    validSiteName: false,
    siteDocumentIndex: '',
    validSiteDocumentIndex: false,
    siteDocumentIndexOptions: [
        { label: 'J', value: 'J' },
        { label: 'V', value: 'V' },
        { label: 'G', value: 'G' },
        { label: 'No Aplica', value: 'null' },
    ],
    siteDocumentIndexDefault: { label: 'Elija el tipo de Documento', value: '' },
    document: '',
    validDocument: false,
    address1: '',
    validAddress1: false,
    address2: '',
    validAddress2: true,
    city: '',
    validCity: false,
    cityOptions: [],
    cityDefault: { label: 'Elija la Ciudad', value: '' },
    stateCountry: '',
    validStateCountry: false,
    stateCountryOptions: [],
    stateCountryDefault: { label: 'Elija el Estado', value: '' },
    country: '',
    validCountry: false,
    countryOptions: optionsCountry,
    countryDefault: { label: 'Elija el país', value: '' },
    postcode: '',
    validPostcode: true,
    phone: '',
    validPhone: true,
    email: '',
    validEmail: true,
}); };
function useGafpriSites() {
    var _a = react_1.default.useReducer(reducer, initialState()), state = _a[0], dispatch = _a[1];
    var siteName = state.siteName, validSiteName = state.validSiteName, siteDocumentIndex = state.siteDocumentIndex, validSiteDocumentIndex = state.validSiteDocumentIndex, siteDocumentIndexOptions = state.siteDocumentIndexOptions, siteDocumentIndexDefault = state.siteDocumentIndexDefault, document = state.document, validDocument = state.validDocument, address1 = state.address1, validAddress1 = state.validAddress1, address2 = state.address2, validAddress2 = state.validAddress2, city = state.city, validCity = state.validCity, cityOptions = state.cityOptions, cityDefault = state.cityDefault, stateCountry = state.stateCountry, validStateCountry = state.validStateCountry, stateCountryOptions = state.stateCountryOptions, stateCountryDefault = state.stateCountryDefault, country = state.country, validCountry = state.validCountry, countryOptions = state.countryOptions, countryDefault = state.countryDefault, postcode = state.postcode, validPostcode = state.validPostcode, phone = state.phone, validPhone = state.validPhone, email = state.email, validEmail = state.validEmail;
    /**
     * SITES
     *
     *
     */
    // Setear valores de sitio
    var setSiteName = function (value) {
        return dispatch({
            type: actionTypes.siteName,
            payload: value,
        });
    };
    var setValidSiteName = function (value) {
        return dispatch({
            type: actionTypes.validSiteName,
            payload: value,
        });
    };
    var setSiteDocumentIndex = function (value) {
        return dispatch({
            type: actionTypes.siteDocumentIndex,
            payload: value,
        });
    };
    var setValidSiteDocumentIndex = function (value) {
        return dispatch({
            type: actionTypes.validSiteDocumentIndex,
            payload: value,
        });
    };
    var setSiteDocumentIndexDefault = function (value) {
        return dispatch({
            type: actionTypes.siteDocumentIndexDefault,
            payload: value,
        });
    };
    var setDocument = function (value) {
        return dispatch({
            type: actionTypes.document,
            payload: value,
        });
    };
    var setValidDocument = function (value) {
        return dispatch({
            type: actionTypes.validDocument,
            payload: value,
        });
    };
    var setAddress1 = function (value) {
        return dispatch({
            type: actionTypes.address1,
            payload: value,
        });
    };
    var setValidAddress1 = function (value) {
        return dispatch({
            type: actionTypes.validAddress1,
            payload: value,
        });
    };
    var setAddress2 = function (value) {
        return dispatch({
            type: actionTypes.address2,
            payload: value,
        });
    };
    var setValidAddress2 = function (value) {
        return dispatch({
            type: actionTypes.validAddress2,
            payload: value,
        });
    };
    var setCity = function (value) {
        return dispatch({
            type: actionTypes.city,
            payload: value,
        });
    };
    var setValidCity = function (value) {
        return dispatch({
            type: actionTypes.validCity,
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
    var setValidStateCountry = function (value) {
        return dispatch({
            type: actionTypes.validStateCountry,
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
    var setValidCountry = function (value) {
        return dispatch({
            type: actionTypes.validCountry,
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
    var setValidPostcode = function (value) {
        return dispatch({
            type: actionTypes.validPostcode,
            payload: value,
        });
    };
    var setPhone = function (value) {
        return dispatch({
            type: actionTypes.phone,
            payload: value,
        });
    };
    var setValidPhone = function (value) {
        return dispatch({
            type: actionTypes.validPhone,
            payload: value,
        });
    };
    var setEmail = function (value) {
        return dispatch({
            type: actionTypes.email,
            payload: value,
        });
    };
    var setValidEmail = function (value) {
        return dispatch({
            type: actionTypes.validEmail,
            payload: value,
        });
    };
    // Funciones de Validacion
    var validationButtonNext = function () {
        if (validSiteName &&
            validSiteDocumentIndex &&
            validDocument &&
            validAddress1 &&
            validAddress2 &&
            validCity &&
            validStateCountry &&
            validCountry &&
            validPostcode &&
            validPhone &&
            validEmail) {
            (0, helpers_1.removeClass)('buttonNextInfoSite', 'gs-disabled');
        }
        else {
            (0, helpers_1.addClass)('buttonNextInfoSite', 'gs-disabled');
        }
    };
    var validationSiteName = function (value) {
        return (0, helpers_1.validationInputName)({
            name: value,
            inputId: 'siteName',
            setValid: setValidSiteName,
        });
    };
    var validationSiteDocumentIndex = function (value) {
        var validation = (0, helpers_1.validationSelect)(value, 'siteDocumentIndex', 'gs-input-alert');
        setValidSiteDocumentIndex(validation);
        validationButtonNext();
        return validation;
    };
    var validationDocument = function (value) {
        var valid = (0, helpers_1.validationInput)(value, /^\d{1,12}(-\d{1,12})?$/, 'siteDocument', 'gs-input-alert', true);
        setValidDocument(valid);
        validationButtonNext();
        return valid;
    };
    var validationAddress1 = function (value) {
        var valid = (0, helpers_1.validationInput)(value, /^[a-zA-Z0-9]+[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_#'()\-.,\s]+$/, 'address1', 'gs-input-alert', true);
        setValidAddress1(valid);
        validationButtonNext();
        return valid;
    };
    var validationAddress2 = function (value) {
        var valid = (0, helpers_1.validationInput)(value, /^[a-zA-Z0-9]+[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_#'()\-.,\s]+$/, 'address2', 'gs-input-alert');
        setValidAddress2(valid);
        validationButtonNext();
        return valid;
    };
    var validationCity = function (value) {
        var validation = (0, helpers_1.validationSelect)(value, 'citySite', 'gs-input-alert');
        setValidCity(validation);
        validationButtonNext();
        return validation;
    };
    var validationStateCountry = function (value) {
        var validation = (0, helpers_1.validationSelect)(value, 'stateCountrySite', 'gs-input-alert');
        setValidStateCountry(validation);
        validationButtonNext();
        return validation;
    };
    var validationCountry = function (value) {
        var validation = (0, helpers_1.validationSelect)(value, 'countrySite', 'gs-input-alert');
        setValidCountry(validation);
        validationButtonNext();
        return validation;
    };
    var validationPostcode = function (value) {
        var valid = (0, helpers_1.validationInput)(value, /^[a-zA-Z0-9]+[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_#()\-.\s]+$/, 'postcodeSite', 'gs-input-alert');
        setValidPostcode(valid);
        validationButtonNext();
        return valid;
    };
    var validationPhone = function (value) {
        var valid = (0, helpers_1.validationInput)(value, /^[0-9]{10,20}/, 'phoneSite', 'gs-input-alert');
        setValidPhone(valid);
        validationButtonNext();
        return valid;
    };
    var validationEmail = function (value) {
        var valid = (0, helpers_1.validationInput)(value, /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/, 'emailSite', 'gs-input-alert');
        setValidEmail(valid);
        validationButtonNext();
        return valid;
    };
    // Funciones de cambios
    var changeSiteName = function (value) {
        var name = (0, helpers_1.toTitleCase)(value);
        (0, helpers_1.changeInputText)({
            value: name,
            validation: validationSiteName,
            setValue: setSiteName,
        });
    };
    var changeSiteDocumentIndex = function (options) {
        (0, helpers_1.changeSelect)({
            newValue: options,
            validation: validationSiteDocumentIndex,
            setDefault: setSiteDocumentIndexDefault,
            setValue: setSiteDocumentIndex,
        });
    };
    var changeDocument = function (newDocument) {
        (0, helpers_1.changeInputText)({
            value: newDocument,
            validation: validationDocument,
            setValue: setDocument,
        });
    };
    var changeAddres1 = function (value) {
        var address = (0, helpers_1.toTitleCase)(value);
        (0, helpers_1.changeInputText)({
            value: address,
            validation: validationAddress1,
            setValue: setAddress1,
        });
    };
    var changeAddres2 = function (value) {
        var address = (0, helpers_1.toTitleCase)(value);
        (0, helpers_1.changeInputText)({
            value: address,
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
    var changeStateCountryOptions = react_1.default.useCallback(function () {
        var newValueState = [];
        if (country && Constans_1.StatesCountries[0][country].length > 0) {
            Constans_1.StatesCountries[0][country].forEach(function (item) {
                Object.keys(item).forEach(function (key) {
                    newValueState.push({ value: key, label: item[key] });
                });
            });
        }
        setStateCountryDefault({ label: 'Elija el Estado', value: '' });
        setStateCountry('');
        setStateCountryOptions(newValueState);
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
        setCityDefault({ label: 'Elija la ciudad', value: '' });
        setCity('');
        setCityOptions(newValueCity);
    }, [country, stateCountry]);
    var changeCountry = function (options) {
        changeStateCountryOptions();
        (0, helpers_1.changeSelect)({
            newValue: options,
            validation: validationCountry,
            setDefault: setCountryDefault,
            setValue: setCountry,
        });
    };
    var changePostcode = function (newPostcode) {
        (0, helpers_1.changeInputText)({
            value: newPostcode,
            validation: validationPostcode,
            setValue: setPostcode,
        });
    };
    var changePhone = function (newPhone) {
        (0, helpers_1.changeInputText)({
            value: newPhone,
            validation: validationPhone,
            setValue: setPhone,
        });
    };
    var changeEmail = function (inputValue) {
        var newEmail = inputValue.toLocaleLowerCase();
        (0, helpers_1.changeInputText)({
            value: newEmail,
            validation: validationEmail,
            setValue: setEmail,
        });
    };
    // Efects
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
        siteName: siteName,
        validSiteName: validSiteName,
        siteDocumentIndex: siteDocumentIndex,
        validSiteDocumentIndex: validSiteDocumentIndex,
        siteDocumentIndexOptions: siteDocumentIndexOptions,
        siteDocumentIndexDefault: siteDocumentIndexDefault,
        document: document,
        validDocument: validDocument,
        address1: address1,
        validAddress1: validAddress1,
        address2: address2,
        validAddress2: validAddress2,
        city: city,
        validCity: validCity,
        cityOptions: cityOptions,
        cityDefault: cityDefault,
        stateCountry: stateCountry,
        validStateCountry: validStateCountry,
        stateCountryOptions: stateCountryOptions,
        stateCountryDefault: stateCountryDefault,
        country: country,
        validCountry: validCountry,
        countryOptions: countryOptions,
        countryDefault: countryDefault,
        postcode: postcode,
        validPostcode: validPostcode,
        phone: phone,
        validPhone: validPhone,
        email: email,
        validEmail: validEmail,
    };
    var actions = {
        changeSiteName: changeSiteName,
        validationSiteName: validationSiteName,
        changeSiteDocumentIndex: changeSiteDocumentIndex,
        validationSiteDocumentIndex: validationSiteDocumentIndex,
        changeDocument: changeDocument,
        validationDocument: validationDocument,
        changeAddres1: changeAddres1,
        validationAddress1: validationAddress1,
        changeAddres2: changeAddres2,
        validationAddress2: validationAddress2,
        changeCity: changeCity,
        validationCity: validationCity,
        changeStateCountry: changeStateCountry,
        validationStateCountry: validationStateCountry,
        changeCountry: changeCountry,
        validationCountry: validationCountry,
        changePostcode: changePostcode,
        validationPostcode: validationPostcode,
        changePhone: changePhone,
        validationPhone: validationPhone,
        changeEmail: changeEmail,
        validationEmail: validationEmail,
        validationButtonNext: validationButtonNext,
    };
    return {
        states: states,
        actions: actions,
    };
}
exports.useGafpriSites = useGafpriSites;
//# sourceMappingURL=useGafpriSites.js.map
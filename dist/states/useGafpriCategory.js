"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriCategory = useGafpriCategory;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _axios = _interopRequireDefault(require("axios"));
var _helpers = require("../helpers");
var _Context = require("../Context");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function useGafpriCategory(_ref) {
  var _category$data;
  var token = _ref.token,
    useError = _ref.useError;
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    name = _useState2[0],
    setName = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    nameValid = _useState4[0],
    setNameValid = _useState4[1];
  var _useState5 = (0, _react.useState)({
      data: {
        items: (0, _Context.getItem)('GS_CATEGORY_V2', null)
      }
    }),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    category = _useState6[0],
    setCategory = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    parentId = _useState8[0],
    setParentId = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    parentIdValid = _useState10[0],
    setParentIdValid = _useState10[1];
  var _useState11 = (0, _react.useState)({
      value: 'null',
      label: 'Sin categoría padre'
    }),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    parentIdDefault = _useState12[0],
    setParentIdDefault = _useState12[1];
  var _useState13 = (0, _react.useState)([]),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    parentIdOptions = _useState14[0],
    setParentIdOptions = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
    childrenFetching = _useState16[0],
    setChildrenFetching = _useState16[1];
  var _useState17 = (0, _react.useState)(''),
    _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
    description = _useState18[0],
    setDescription = _useState18[1];
  var _useState19 = (0, _react.useState)(true),
    _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
    descriptionValid = _useState20[0],
    setDescriptionValid = _useState20[1];
  var _useState21 = (0, _react.useState)('https://categorygafpri.s3.us-east-2.amazonaws.com/gafpri-placeholder.png'),
    _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
    photo = _useState22[0],
    setPhoto = _useState22[1];
  var _useState23 = (0, _react.useState)(false),
    _useState24 = (0, _slicedToArray2["default"])(_useState23, 2),
    photoValid = _useState24[0],
    setPhotoValid = _useState24[1];
  var _useState25 = (0, _react.useState)(false),
    _useState26 = (0, _slicedToArray2["default"])(_useState25, 2),
    submitting = _useState26[0],
    setSubmitting = _useState26[1];
  var _useState27 = (0, _react.useState)('active'),
    _useState28 = (0, _slicedToArray2["default"])(_useState27, 2),
    status = _useState28[0],
    setStatus = _useState28[1];
  var _useState29 = (0, _react.useState)(false),
    _useState30 = (0, _slicedToArray2["default"])(_useState29, 2),
    statusValid = _useState30[0],
    setStatusValid = _useState30[1];
  var _useState31 = (0, _react.useState)({
      value: 'active',
      label: 'Activo'
    }),
    _useState32 = (0, _slicedToArray2["default"])(_useState31, 2),
    statusDefault = _useState32[0],
    setStatusDefault = _useState32[1];
  var statusOptions = [{
    value: 'active',
    label: 'Activo'
  }, {
    value: 'disabled',
    label: 'Desactivo'
  }];
  var _useState33 = (0, _react.useState)(false),
    _useState34 = (0, _slicedToArray2["default"])(_useState33, 2),
    isReady = _useState34[0],
    setIsReady = _useState34[1];
  var _useState35 = (0, _react.useState)(false),
    _useState36 = (0, _slicedToArray2["default"])(_useState35, 2),
    isFetching = _useState36[0],
    setIsFetching = _useState36[1];
  var _useState37 = (0, _react.useState)(true),
    _useState38 = (0, _slicedToArray2["default"])(_useState37, 2),
    isInit = _useState38[0],
    setIsInit = _useState38[1];
  var _useState39 = (0, _react.useState)(false),
    _useState40 = (0, _slicedToArray2["default"])(_useState39, 2),
    isAdd = _useState40[0],
    setIsAdd = _useState40[1];
  var _useState41 = (0, _react.useState)(false),
    _useState42 = (0, _slicedToArray2["default"])(_useState41, 2),
    isUpdate = _useState42[0],
    setIsUpdate = _useState42[1];
  var error = useError.states.error;
  var changeError = useError.actions.changeError;
  var _useState43 = (0, _react.useState)(0),
    _useState44 = (0, _slicedToArray2["default"])(_useState43, 2),
    currentId = _useState44[0],
    setCurrentId = _useState44[1];
  var _useState45 = (0, _react.useState)('asc'),
    _useState46 = (0, _slicedToArray2["default"])(_useState45, 2),
    orderList = _useState46[0],
    setOrderList = _useState46[1];
  var _useState47 = (0, _react.useState)(''),
    _useState48 = (0, _slicedToArray2["default"])(_useState47, 2),
    searchTerm = _useState48[0],
    setSearchTerm = _useState48[1];
  var _useState49 = (0, _react.useState)(1),
    _useState50 = (0, _slicedToArray2["default"])(_useState49, 2),
    currentPage = _useState50[0],
    setCurrentPage = _useState50[1];
  var itemsPerPage = 6;
  var infoReset = function infoReset() {
    setName('');
    setNameValid(false);
    setParentId(null);
    setParentIdValid(false);
    setDescription('');
    setDescriptionValid(true);
    setPhoto('https://categorygafpri.s3.us-east-2.amazonaws.com/gafpri-placeholder.png');
    setPhotoValid(false);
    setStatus('active');
    setStatusValid(false);
    setCurrentId(0);
    useError.actions.resetError();
  };
  var onFetching = function onFetching() {
    setIsFetching(true);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
  };
  var onInit = function onInit() {
    setIsFetching(false);
    setIsInit(true);
    setIsAdd(false);
    setIsUpdate(false);
  };
  var onAdd = function onAdd() {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(true);
    setIsUpdate(false);
  };
  var onUpdate = function onUpdate() {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(true);
  };
  var onIsReady = function onIsReady() {
    setIsReady(true);
  };
  var notReady = function notReady() {
    setIsReady(false);
  };
  var goUpdate = function goUpdate(id) {
    infoReset();
    setCurrentId(id);
    onUpdate();
  };
  var goAdd = function goAdd() {
    infoReset();
    onAdd();
  };
  var onChildrenFetching = function onChildrenFetching() {
    setChildrenFetching(true);
  };
  var outChildrenFetching = function outChildrenFetching() {
    setChildrenFetching(false);
  };

  // Funciones de Validacion
  var validationName = function validationName(value) {
    return (0, _helpers.validationInputName)({
      name: value,
      inputId: "nameCategory",
      setValid: setNameValid
    });
  };
  var validationParentId = function validationParentId(newValue) {
    var valid = (0, _helpers.validationSelect)(newValue, 'parentId');
    setParentIdValid(valid);
    return valid;
  };
  var validationDescription = function validationDescription(newValue) {
    return (0, _helpers.validationInputAddress)({
      value: newValue,
      inputId: "descriptionCategory",
      setValid: setDescriptionValid,
      required: false
    });
  };
  var validationStatus = function validationStatus(newValue) {
    return (0, _helpers.validationInputAddress)({
      value: newValue,
      inputId: "statusCategory",
      setValid: setStatusValid
    });
  };
  var validationPhoto = function validationPhoto(value) {
    var valid = (0, _helpers.validationInput)(value, /^(?:(?:[a-z][a-z0-9+-.]*):\/\/)?(?:[a-z0-9_-]+(?::[a-z0-9_-]+)*@)?(?:[a-z0-9.-]+|(?:\[[a-f0-9:.]+\]))(?::\d+)?(?:\/[^\s#?]*(?:\?[^\s#?]*)?(?:#[^\s#?]*)?)?$/i, 'photoCategory');
    setPhotoValid(valid);
    return valid;
  };
  var validationButtonNext = function validationButtonNext() {
    if (nameValid && parentIdValid && descriptionValid && photoValid && statusValid) {
      (0, _helpers.removeClass)("buttonNext", 'gs-disabled');
    } else {
      (0, _helpers.addClass)("buttonNext", 'gs-disabled');
    }
  };

  // Funciones de cambios
  var changeName = function changeName(value) {
    var newName = (0, _helpers.toTitleCase)(value);
    (0, _helpers.changeInputText)({
      value: newName,
      validation: validationName,
      setValue: setName
    });
  };
  var changeParentId = function changeParentId(options) {
    var value = null;
    if (options && options.value !== 'null') {
      value = parseInt(options.value, 10);
    }
    var label = (options === null || options === void 0 ? void 0 : options.label) || 'Sin categoría padre';
    var newOptions = {
      value: value,
      label: label
    };
    (0, _helpers.changeSelect)({
      newValue: newOptions,
      validation: validationParentId,
      setDefault: setParentIdDefault,
      setValue: setParentId
    });
  };
  var changeDescription = function changeDescription(value) {
    var newDescription = (0, _helpers.toTitleCase)(value);
    (0, _helpers.changeInputText)({
      value: newDescription,
      validation: validationDescription,
      setValue: setDescription
    });
  };
  var changePhoto = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(e) {
      var newFile, mimeType, formData, config, response;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            newFile = e.target.files && e.target.files[0];
            if (newFile) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return");
          case 3:
            // Obtén el tipo MIME en función de la extensión del archivo
            mimeType = (0, _helpers.getMimeTypeByExtension)(newFile.name);
            if (mimeType) {
              _context.next = 7;
              break;
            }
            useError.actions.changeError(['El archivo no es una imagen válida. Asegúrate de subir un archivo JPG, JPEG o PNG.']);
            return _context.abrupt("return");
          case 7:
            formData = new FormData();
            formData.append('file', newFile);
            formData.append('fileName', newFile.name);
            setSubmitting(true);
            config = {
              headers: {
                'content-type': 'multipart/form-data'
              }
            };
            _context.prev = 12;
            _context.next = 15;
            return _axios["default"].post('/api/upload', formData, config);
          case 15:
            response = _context.sent;
            if (response.status === 200) {
              setPhoto(response.data.imageUrl);
            } else {
              setSubmitting(false);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            _context.next = 23;
            break;
          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](12);
            useError.actions.changeError(["".concat(_context.t0.message)]);
            setSubmitting(false);
          case 23:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[12, 19]]);
    }));
    return function changePhoto(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var changeStatus = function changeStatus(options) {
    (0, _helpers.changeSelect)({
      newValue: options,
      validation: validationStatus,
      setDefault: setStatusDefault,
      setValue: setStatus
    });
  };

  // Manejo de la data de Category

  var getLastItem = (_category$data = category.data) !== null && _category$data !== void 0 && _category$data.items ? category.data.items.sort(function (a, b) {
    return new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime();
  })[0] : null;
  var setDataStorage = function setDataStorage(newData) {
    (0, _Context.saveItem)('GS_CATEGORY_V2', newData.data.items);
  };
  var setData = function setData(newData) {
    setCategory(newData);
    setDataStorage(newData);
  };
  var onCategory = function onCategory(newData) {
    setData(newData);
    onIsReady();
  };
  var offCategory = function offCategory() {
    setData({
      data: {
        items: null
      }
    });
    notReady();
  };
  var getCategory = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      var _category$data$items;
      var lastEntryDateAndCount, lastDate, count;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _helpers.getLastEntryDateAndCount)('category');
          case 2:
            lastEntryDateAndCount = _context2.sent;
            lastDate = (getLastItem === null || getLastItem === void 0 ? void 0 : getLastItem.modifiedAt) || null;
            count = ((_category$data$items = category.data.items) === null || _category$data$items === void 0 ? void 0 : _category$data$items.length) || 0;
            if (category.data.items === null || "".concat(lastEntryDateAndCount === null || lastEntryDateAndCount === void 0 ? void 0 : lastEntryDateAndCount.date) !== "".concat(lastDate) || "".concat(lastEntryDateAndCount === null || lastEntryDateAndCount === void 0 ? void 0 : lastEntryDateAndCount.count) !== "".concat(count)) {
              if (token) {
                (0, _helpers.gafpriFetch)({
                  initMethod: 'GET',
                  initApi: 'http://localhost:4000',
                  initRoute: 'api/v1/category',
                  initToken: {
                    token: token
                  },
                  functionFetching: notReady,
                  functionSuccess: onCategory
                });
              } else {
                notReady();
              }
            } else {
              onIsReady();
            }
          case 6:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function getCategory() {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleNewCategory = function handleNewCategory(newCategory) {
    setCategory(function (prevState) {
      var newData = {
        data: {
          items: [].concat((0, _toConsumableArray2["default"])(prevState.data.items || []), [newCategory])
        }
      };
      setDataStorage(newData);
      return newData;
    });
  };
  var handleUpdatedCategory = function handleUpdatedCategory(updatedCategory) {
    setCategory(function (prevState) {
      var _prevState$data$items;
      var updatedItems = ((_prevState$data$items = prevState.data.items) === null || _prevState$data$items === void 0 ? void 0 : _prevState$data$items.map(function (item) {
        return "".concat(item.id) === "".concat(updatedCategory.id) ? updatedCategory : item;
      })) || [];
      var newData = {
        data: {
          items: updatedItems
        }
      };
      setDataStorage(newData);
      return newData;
    });
  };
  var handleDeletedCategory = function handleDeletedCategory(_ref4) {
    var itemId = _ref4.itemId;
    setCategory(function (prevState) {
      var _prevState$data$items2;
      var filteredItems = ((_prevState$data$items2 = prevState.data.items) === null || _prevState$data$items2 === void 0 ? void 0 : _prevState$data$items2.filter(function (item) {
        return "".concat(item.id) !== "".concat(itemId);
      })) || [];
      var newData = {
        data: {
          items: filteredItems
        }
      };
      setDataStorage(newData);
      return newData;
    });
  };
  var returnInit = function returnInit() {
    infoReset();
    onInit();
  };
  var newError = function newError(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: onAdd
    });
  };
  var newErrorDelete = function newErrorDelete(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: onInit
    });
  };
  var add = function add() {
    if (nameValid && parentIdValid && descriptionValid && photoValid && statusValid && token) {
      var payload = {
        name: name,
        parentId: parentId,
        status: status
      };
      var updatedPayload = _objectSpread(_objectSpread(_objectSpread({}, payload), description ? {
        description: description
      } : {}), photo ? {
        photo: photo
      } : {});
      (0, _helpers.gafpriFetch)({
        initMethod: 'POST',
        initApi: 'http://localhost:4000',
        initRoute: 'api/v1/category',
        initCredentials: updatedPayload,
        initToken: {
          token: token
        },
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newError
      });
    }
  };
  function getById(id) {
    var _category$data$items2;
    return ((_category$data$items2 = category.data.items) === null || _category$data$items2 === void 0 ? void 0 : _category$data$items2.find(function (item) {
      return item.id === id;
    })) || null;
  }
  function getChildren(id) {
    var _category$data$items3;
    var children = (_category$data$items3 = category.data.items) === null || _category$data$items3 === void 0 ? void 0 : _category$data$items3.filter(function (item) {
      return item.parentId === id && item.id !== id;
    });
    if (!children) {
      return [];
    }
    return children;
  }
  function deleteParentId(id) {
    if (token) {
      var currentCategory = getById(id);
      var data = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, currentCategory !== null && currentCategory !== void 0 && currentCategory.name ? {
        name: currentCategory.name
      } : {}), currentCategory !== null && currentCategory !== void 0 && currentCategory.status ? {
        status: currentCategory.status
      } : {}), currentCategory !== null && currentCategory !== void 0 && currentCategory.description ? {
        description: currentCategory.description
      } : {}), currentCategory !== null && currentCategory !== void 0 && currentCategory.photo ? {
        photo: currentCategory.photo
      } : {}), {}, {
        parentId: null
      });
      (0, _helpers.gafpriFetch)({
        initMethod: 'PATCH',
        initApi: 'http://localhost:4000',
        initRoute: "api/v1/category/".concat(id),
        initCredentials: data,
        initToken: {
          token: token
        },
        functionFetching: onChildrenFetching,
        functionSuccess: outChildrenFetching,
        functionError: outChildrenFetching
      });
    }
  }
  var update = function update() {
    if (nameValid && parentIdValid && descriptionValid && photoValid && statusValid && token) {
      var payload = {
        name: name,
        parentId: parentId,
        status: status
      };
      var updatedPayload = _objectSpread(_objectSpread(_objectSpread({}, payload), description ? {
        description: description
      } : {}), photo ? {
        photo: photo
      } : {});
      (0, _helpers.gafpriFetch)({
        initMethod: 'PATCH',
        initApi: 'http://localhost:4000',
        initRoute: "api/v1/category/".concat(currentId),
        initCredentials: updatedPayload,
        initToken: {
          token: token
        },
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newError
      });
    }
  };
  var deleteCategory = function deleteCategory(id) {
    if (token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'DELETE',
        initApi: 'http://localhost:4000',
        initRoute: "api/v1/category/".concat(id),
        initToken: {
          token: token
        },
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newErrorDelete
      });
    }
  };
  function sortByName(items, order) {
    if (items) {
      return items.slice().sort(function (a, b) {
        var comparison = a.name.localeCompare(b.name, undefined, {
          sensitivity: 'base'
        });
        return order === 'asc' ? comparison : -comparison;
      });
    }
    return null;
  }
  var filterByName = function filterByName(items, search) {
    if (items) {
      return items.filter(function (item) {
        return item.name.toLowerCase().includes(search.toLowerCase());
      });
    }
    return null;
  };
  var getPaginated = function getPaginated(items, page, itemPerPage) {
    var startIndex = (page - 1) * itemPerPage;
    var endIndex = startIndex + itemPerPage;
    if (items) {
      return items.slice(startIndex, endIndex);
    }
    return null;
  };

  /**
   * Effects
   *
   *
   */

  _react["default"].useEffect(function () {
    getCategory();
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  _react["default"].useEffect(function () {
    setCurrentPage(1);
  }, [searchTerm]);
  _react["default"].useEffect(function () {
    var children = getChildren(currentId);
    setParentIdOptions([{
      value: 'null',
      label: 'Sin categoría padre'
    }].concat((0, _toConsumableArray2["default"])(category.data.items ? category.data.items.filter(function (item) {
      // Condición para filtrar items
      if (currentId === item.id) {
        return false;
      }
      if (children && children.some(function (child) {
        return child.id === item.id;
      })) {
        return false;
      }
      return true;
    }).map(function (item) {
      return {
        value: "".concat(item.id),
        label: "".concat(item.name)
      };
    }) : [])));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentId, category]);

  /**
   * Export
   *
   *
   */
  var states = {
    name: name,
    nameValid: nameValid,
    parentId: parentId,
    parentIdValid: parentIdValid,
    parentIdDefault: parentIdDefault,
    parentIdOptions: parentIdOptions,
    childrenFetching: childrenFetching,
    description: description,
    descriptionValid: descriptionValid,
    photo: photo,
    photoValid: photoValid,
    submitting: submitting,
    status: status,
    statusValid: statusValid,
    statusDefault: statusDefault,
    statusOptions: statusOptions,
    isReady: isReady,
    isFetching: isFetching,
    isAdd: isAdd,
    isInit: isInit,
    isUpdate: isUpdate,
    category: category,
    currentId: currentId,
    error: error,
    orderList: orderList,
    searchTerm: searchTerm,
    currentPage: currentPage,
    itemsPerPage: itemsPerPage
  };
  var actions = {
    changeName: changeName,
    validationName: validationName,
    changeDescription: changeDescription,
    validationDescription: validationDescription,
    changeParentId: changeParentId,
    validationParentId: validationParentId,
    deleteParentId: deleteParentId,
    changePhoto: changePhoto,
    validationPhoto: validationPhoto,
    setPhoto: setPhoto,
    setSubmitting: setSubmitting,
    changeStatus: changeStatus,
    validationStatus: validationStatus,
    changeError: changeError,
    validationButtonNext: validationButtonNext,
    setIsReady: setIsReady,
    onFetching: onFetching,
    onInit: onInit,
    returnInit: returnInit,
    onAdd: onAdd,
    goAdd: goAdd,
    onUpdate: onUpdate,
    offCategory: offCategory,
    add: add,
    update: update,
    getById: getById,
    getChildren: getChildren,
    goUpdate: goUpdate,
    sortByName: sortByName,
    setOrderList: setOrderList,
    setSearchTerm: setSearchTerm,
    filterByName: filterByName,
    setCurrentPage: setCurrentPage,
    getPaginated: getPaginated,
    deleteCategory: deleteCategory,
    handleNewCategory: handleNewCategory,
    handleUpdatedCategory: handleUpdatedCategory,
    handleDeletedCategory: handleDeletedCategory
  };
  return {
    states: states,
    actions: actions
  };
}
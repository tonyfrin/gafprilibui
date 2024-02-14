"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VISIBILITY_DEFAULT = exports.VISIBILITY = exports.TAX_STATUS_DEFAULT = exports.TAX_STATUS = exports.PRODUCT_TYPES_DEFAULT = exports.PRODUCT_TYPES = exports.PRODUCT_STATUS_DEFAULT = exports.PRODUCT_STATUS = exports.PRODUCT_IMAGE_DEFAULT = exports.PACKAGE_TYPE_DEFAULT = exports.PACKAGE_TYPE = void 0;
var PRODUCT_TYPES = [{
  value: 'simple',
  label: 'Simple'
}, {
  value: 'grouped',
  label: 'Agrupados'
}, {
  value: 'service',
  label: 'Servicio'
}];
exports.PRODUCT_TYPES = PRODUCT_TYPES;
var PRODUCT_TYPES_DEFAULT = {
  value: '',
  label: 'Elije tipo del producto'
};
exports.PRODUCT_TYPES_DEFAULT = PRODUCT_TYPES_DEFAULT;
var PRODUCT_STATUS = [{
  value: 'publish',
  label: 'Publicado'
}, {
  value: 'draft',
  label: 'Borrador'
}, {
  value: 'pending',
  label: 'Pendiente'
}, {
  value: 'private',
  label: 'Privado'
}];
exports.PRODUCT_STATUS = PRODUCT_STATUS;
var PRODUCT_STATUS_DEFAULT = {
  value: '',
  label: 'Elije estado del producto'
};
exports.PRODUCT_STATUS_DEFAULT = PRODUCT_STATUS_DEFAULT;
var TAX_STATUS = [{
  value: 'taxable',
  label: 'Gravable'
}, {
  value: 'none',
  label: 'Excento'
}];
exports.TAX_STATUS = TAX_STATUS;
var TAX_STATUS_DEFAULT = {
  value: '',
  label: 'Elije estado del impuesto'
};
exports.TAX_STATUS_DEFAULT = TAX_STATUS_DEFAULT;
var PACKAGE_TYPE = [{
  value: 'box',
  label: 'Caja'
}, {
  value: 'envelope',
  label: 'Sobre'
}, {
  value: 'bag',
  label: 'Bolsa'
}, {
  value: 'none',
  label: 'Sin paquete'
}];
exports.PACKAGE_TYPE = PACKAGE_TYPE;
var PACKAGE_TYPE_DEFAULT = {
  value: '',
  label: 'Elije tipo de paquete'
};
exports.PACKAGE_TYPE_DEFAULT = PACKAGE_TYPE_DEFAULT;
var VISIBILITY = [{
  value: 'visible',
  label: 'Visible'
}, {
  value: 'hidden',
  label: 'Oculto'
}];
exports.VISIBILITY = VISIBILITY;
var VISIBILITY_DEFAULT = {
  value: '',
  label: 'Elije visibilidad'
};
exports.VISIBILITY_DEFAULT = VISIBILITY_DEFAULT;
var PRODUCT_IMAGE_DEFAULT = 'https://categorygafpri.s3.us-east-2.amazonaws.com/2b5ibjbcbpco-woocommerce-placeholder.png';
exports.PRODUCT_IMAGE_DEFAULT = PRODUCT_IMAGE_DEFAULT;
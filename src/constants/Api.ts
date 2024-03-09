export const getApiUrl = (): string | undefined => process.env.API_URL;
export const API_URL = getApiUrl();
export const UPLOAD_PHOTO_ROUTE = `${getApiUrl()}//upload-file`;
export const CATEGORY_ROUTE = '/category';
export const CURRENCIES_ROUTE = '/currencies';
export const ENTITY_ROUTE = '/entity';
export const ROLES_ROUTE = '/roles';
export const SITES_ROUTE = '/sites';
export const TYPE_DOCUMENT_ID_ROUTE = '/type-document-id';
export const USERS_ROUTE = '/users';
export const ORDER_ROUTE = '/orders';
export const PRODUCTS_ROUTE = '/products';
export const TAX_CLASSES_ROUTE = '/tax-classes';
export const TAX_RATES_ROUTE = '/tax-rates';
export const BUDGET_ROUTE = '/budgets';
export const SHIPPING_METHODS_ROUTE = '/shipping-methods';
export const SHIPPING_AREAS_ROUTE = '/shipping-areas';
export const PROJECTS_ROUTE = '/projects';
export const STORAGE_ROUTE = '/storage';
export const CASH_REGISTER_TYPE_ROUTE = '/cash-register-type';
export const EXPENSES_TYPE_ROUTE = '/expenses-type';
export const EXPENSES_ROUTE = '/expenses';

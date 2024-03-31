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
export const INCOME_ROUTE = '/income';
export const PAYMENT_TRANSFER_CASH_REGISTER_ROUTE =
  '/payment-transfer-cash-register';
export const LOGIN_ROUTE = '/auth/login';
export const LOGIN_TOKEN_ROUTE = '/auth/jwt';
export const BANK_TYPE_ROUTE = '/bank-type';
export const PAYMENT_TRANSFER_BANK_ROUTE = '/payment-transfer-bank';
export const ACCOUNTS_RECEIVABLE_ROUTE = '/accounts-receivable';
export const PAYMENT_ORDER_ROUTE = '/payment-order';
export const PAYMENT_CREDIT_ROUTE = '/payment-credit';
export const ORDER_RETURN_ROUTE = '/order-return';
export const PAYMENT_ORDER_RETURN_ROUTE = '/payment-order-return';

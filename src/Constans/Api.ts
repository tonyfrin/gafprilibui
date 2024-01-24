export const getApiUrl = (): string | undefined => process.env.API_URL;
export const API_URL = getApiUrl();
export const UPLOAD_PHOTO_ROUTE = `${getApiUrl()}//upload-file`;
export const CATEGORY_ROUTE = '/category';
export const CURRENCIES_ROUTE = '/currencies';
export const ENTITY_ROUTE = '/entity';

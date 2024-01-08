export const getApiUrl = (): string | undefined => process.env.API_URL;
export const API_URL = getApiUrl();
export const UPLOAD_PHOTO_ROUTE = `${getApiUrl()}/upload-photo`;

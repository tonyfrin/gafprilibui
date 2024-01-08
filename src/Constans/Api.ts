export const getApiUrl = (): string | undefined => process.env.API_URL;
export const UPLOAD_PHOTO_ROUTE = `${getApiUrl()}/upload-photo`;

export type ValidationInput = {
    value: string;
    currentValid: boolean;
    inputId: string;
    setValid: (value: boolean) => void;
    required?: boolean;
};
export type ValidationInputNumbersProps = {
    value: string | number;
    currentValid: boolean;
    inputId: string;
    setValid: (value: boolean) => void;
    required?: boolean;
};
export interface GeneralAttribute {
    name: string;
    value: string;
}
export type ValidationGeneralAttributesProps = {
    value: GeneralAttribute[];
    currentValid: boolean;
    inputId: string;
    setValid: (value: boolean) => void;
    required?: boolean;
};
export type ValidationGeneralLinkProps = {
    value: string;
    currentValid: boolean;
    inputId: string;
    setValid: (value: boolean) => void;
    required?: boolean;
};
export type ValidationStringArrayProps = {
    value: string[];
    currentValid: boolean;
    inputId: string;
    setValid: (value: boolean) => void;
    required?: boolean;
};
export declare const validationInputNameLastNameUserName: ({ value, currentValid, inputId, setValid, required, }: ValidationInput) => boolean;
export declare const validationInputPassword: ({ value, inputId, setValid, currentValid, required, }: ValidationInput) => boolean;
export declare const validationInputSinglePassword: ({ value, inputId, setValid, required, }: ValidationInput) => boolean;
export declare const validationInputDescription: ({ value, inputId, setValid, currentValid, required, }: ValidationInput) => boolean;
export declare const validationInputAddress: ({ value, currentValid, inputId, setValid, required, }: ValidationInput) => boolean;
export declare const validationInputSku: ({ value, inputId, currentValid, setValid, required, }: ValidationInput) => boolean;
export declare const validationPhoto: ({ value, inputId, currentValid, setValid, required, }: ValidationInput) => boolean;
export declare const validationInputArray: (values: string[], match: RegExp, componentId: string, required?: boolean) => boolean;
export declare const validatePositiveNumber: (value: string | number, inputId: string, required?: boolean) => boolean;
export declare const validationInputNumbers: ({ value, currentValid, inputId, setValid, required, }: ValidationInputNumbersProps) => boolean;
export declare const validateNumberWithValue: (value: string | number, inputId: string, required?: boolean) => boolean;
export declare const validationInputNumbersWithValue: ({ value, currentValid, inputId, setValid, required, }: ValidationInputNumbersProps) => boolean;
export declare function validateGeneralAttributes(obj: GeneralAttribute[], inputId: string, required?: boolean): boolean;
export declare const validationGeneralAttributes: ({ value, currentValid, inputId, setValid, required, }: ValidationGeneralAttributesProps) => boolean;
export declare function incorrectLinkDetector(value: string | undefined, inputId: string, required?: boolean): boolean;
export declare const validationLink: ({ value, currentValid, inputId, setValid, required, }: ValidationGeneralLinkProps) => boolean;
export declare function validateStringArray(arr: string[], inputId: string, required?: boolean): boolean;
export declare const validationStringArray: ({ value, currentValid, inputId, setValid, required, }: ValidationStringArrayProps) => boolean;
export { generalValidationDescription } from './generalValidationDescription';
export type { GeneralValidationDescriptionProps } from './generalValidationDescription';
export { generalValidationName } from './generalValidationName';
export type { GeneralValidationNameProps } from './generalValidationName';
export { generalValidationLastName } from './generalValidationLastName';
export type { GeneralValidationLastNameProps } from './generalValidationLastName';
export { generalValidationUserName } from './generalValidationUserName';
export type { GeneralValidationUserNameProps } from './generalValidationUserName';
export { generalValidationPassword } from './generalValidationPassword';
export type { GeneralValidationPasswordProps } from './generalValidationPassword';
export { generalValidationSinglePassword } from './generalValidationSinglePassword';
export type { GeneralValidationSinglePasswordProps } from './generalValidationSinglePassword';
export { generalValidationButtonNext } from './generalValidationButtonNext';
export type { GeneralValidationButtonNextProps } from './generalValidationButtonNext';
export { generalValidationAddress1 } from './generalValidationAddress1';
export type { GeneralValidationAddress1Props } from './generalValidationAddress1';
export { generalValidationAddress2 } from './generalValidationAddress2';
export type { GeneralValidationAddress2Props } from './generalValidationAddress2';
export { generalValidationAddressType } from './generalValidationAddressType';
export type { GeneralValidationAddressTypeProps } from './generalValidationAddressType';
export { generalValidationSelectCity } from './generalValidationSelectCity';
export type { GeneralValidationSelectCityProps } from './generalValidationSelectCity';
export { generalValidationSelectStateCountry } from './generalValidationSelectStateCountry';
export type { GeneralValidationSelectStateCountryProps } from './generalValidationSelectStateCountry';
export { generalValidationSelectCountry } from './generalValidationSelectCountry';
export type { GeneralValidationSelectCountryProps } from './generalValidationSelectCountry';
export { generalValidationPostCode } from './generalValidationPostCode';
export type { GeneralValidationPostCodeProps } from './generalValidationPostCode';
export { generalValidationSelectSite } from './generalValidationSelectSite';
export type { GeneralValidationSelectSiteProps } from './generalValidationSelectSite';
export { generalValidationSku } from './generalValidationSku';
export type { GeneralValidationSkuProps } from './generalValidationSku';
export { generalValidationPhotoCategory } from './generalValidationPhotoCategory';
export type { GeneralValidationPhotoCategoryProps } from './generalValidationPhotoCategory';
export { generalValidationPhotoEntity } from './generalValidationPhotoEntity';
export type { GeneralValidationPhotoEntityProps } from './generalValidationPhotoEntity';
export { generalValidationPhotoDocumentId } from './generalValidationPhotoDocumentId';
export type { GeneralValidationPhotoDocumentIdProps } from './generalValidationPhotoDocumentId';
export { generalValidationGalleryImage } from './generalValidationGalleryImage';
export type { GeneralValidationGalleryImageProps } from './generalValidationGalleryImage';
export { generalValidationParentId } from './generalValidationParentId';
export type { GeneralValidationParentIdProps } from './generalValidationParentId';
export { generalValidationStatus } from './generalValidationStatus';
export type { GeneralValidationStatusProps } from './generalValidationStatus';
export { generalValidationCurrenciesSymbol } from './generalValidationCurrenciesSymbol';
export type { GeneralValidationCurrenciesSymbolProps } from './generalValidationCurrenciesSymbol';
export { generalValidationTypeDocumentIdId } from './generalValidationTypeDocumentIdId';
export type { GeneralValidationTypeDocumentIdIdProps } from './generalValidationTypeDocumentIdId';
export { generalValidationTypeDocumentIdIndex } from './generalValidationTypeDocumentIdIndex';
export type { GeneralValidationTypeDocumentIdIndexProps } from './generalValidationTypeDocumentIdIndex';
export { generalValidationTypeDocumentIdDigit } from './generalValidationTypeDocumentIdDigit';
export type { GeneralValidationTypeDocumentIdDigitProps } from './generalValidationTypeDocumentIdDigit';
export { generalValidationEmail } from './generalValidationEmail';
export type { GeneralValidationEmailProps } from './generalValidationEmail';
export { generalValidationPhone } from './generalValidationPhone';
export type { GeneralValidationPhoneProps } from './generalValidationPhone';
export { generalValidationType } from './generalValidationType';
export type { GeneralValidationTypeProps } from './generalValidationType';
export { generalValidationSelectCurrencies } from './generalValidationSelectCurrencies';
export type { GeneralValidationSelectCurrenciesProps } from './generalValidationSelectCurrencies';
export { generalValidationSelectCurrenciesLocations } from './generalValidationSelectCurrenciesLocations';
export type { GeneralValidationSelectCurrenciesLocationsProps } from './generalValidationSelectCurrenciesLocations';
export { generalValidationSelectCurrenciesSeparator } from './generalValidationSelectCurrenciesSeparator';
export type { GeneralValidationSelectCurrenciesSeparatorProps } from './generalValidationSelectCurrenciesSeparator';
export { generalValidationSelectCurrenciesDecimalNumbers } from './generalValidationSelectCurrenciesDecimalNumbers';
export type { GeneralValidationSelectCurrenciesDecimalNumbersProps } from './generalValidationSelectCurrenciesDecimalNumbers';
export { generalValidationSelectTaxes } from './generalValidationSelectTaxes';
export type { GeneralValidationSelectTaxesProps } from './generalValidationSelectTaxes';
export { generalValidationWebSite } from './generalValidationWebSite';
export type { GeneralValidationWebSiteProps } from './generalValidationWebSite';
export { generalValidationAreaCode } from './generalValidationAreaCode';
export type { GeneralValidationAreaCodeProps } from './generalValidationAreaCode';
export { generalValidationRoles } from './generalValidationRoles';
export type { GeneralValidationRolesProps } from './generalValidationRoles';
export { generalValidationPhotoUsers } from './generalValidationPhotoUsers';
export type { GeneralValidationPhotoUsersProps } from './generalValidationPhotoUsers';
export { generalValidationNote } from './generalValidationNote';
export type { GeneralValidationNoteProps } from './generalValidationNote';
export { generalValidationPublicName } from './generalValidationPublicName';
export type { GeneralValidationPublicNameProps } from './generalValidationPublicName';
export { generalValidationSalesPrice } from './generalValidationSalesPrice';
export type { GeneralValidationSalesPriceProps } from './generalValidationSalesPrice';
export { generalValidationOfferPrice } from './generalValidationOfferPrice';
export type { GeneralValidationOfferPriceProps } from './generalValidationOfferPrice';
export { generalValidationCost } from './generalValidationCost';
export type { GeneralValidationCostProps } from './generalValidationCost';
export { generalValidationTaxStatus } from './generalValidationTaxStatus';
export type { GeneralValidationTaxStatusProps } from './generalValidationTaxStatus';
export { generalValidationTaxClass } from './generalValidationTaxClass';
export type { GeneralValidationTaxClassProps } from './generalValidationTaxClass';
export { generalValidationCategoryId } from './generalValidationCategoryId';
export type { GeneralValidationCategoryIdProps } from './generalValidationCategoryId';
export { generalValidationPackageType } from './generalValidationPackageType';
export type { GeneralValidationPackageTypeProps } from './generalValidationPackageType';
export { generalValidationQtyPack } from './generalValidationQtyPack';
export type { GeneralValidationQtyPackProps } from './generalValidationQtyPack';
export { generalValidationUndCbm } from './generalValidationUndCbm';
export type { GeneralValidationUndCbmProps } from './generalValidationUndCbm';
export { generalValidationProductAttributes } from './generalValidationProductAttributes';
export type { GeneralValidationProductAttributesProps } from './generalValidationProductAttributes';
export { generalValidationPermanentLink } from './generalValidationPermanentLink';
export type { GeneralValidationPermanentLinkProps } from './generalValidationPermanentLink';
export { generalValidationVisibility } from './generalValidationVisibility';
export type { GeneralValidationVisibilityProps } from './generalValidationVisibility';
export { generalValidationHeight } from './generalValidationHeight';
export type { GeneralValidationHeightProps } from './generalValidationHeight';
export { generalValidationWeight } from './generalValidationWeight';
export type { GeneralValidationWeightProps } from './generalValidationWeight';
export { generalValidationWidth } from './generalValidationWidth';
export type { GeneralValidationWidthProps } from './generalValidationWidth';
export { generalValidationLength } from './generalValidationLength';
export type { GeneralValidationLengthProps } from './generalValidationLength';
export { generalValidationCatalogOrder } from './generalValidationCatalogOrder';
export type { GeneralValidationCatalogOrderProps } from './generalValidationCatalogOrder';
export { generalValidationTags } from './generalValidationTags';
export type { GeneralValidationTagsProps } from './generalValidationTags';
export { generalValidationPhoto } from './generalValidationPhoto';
export type { GeneralValidationPhotoProps } from './generalValidationPhoto';
export { generalValidationRegion } from './generalValidationRegion';
export type { GeneralValidationRegionProps } from './generalValidationRegion';
export { generalValidationTaxClassesId } from './generalValidationTaxClassesId';
export type { GeneralValidationTaxClassesIdProps } from './generalValidationTaxClassesId';
export { generalValidationRate } from './generalValidationRate';
export type { GeneralValidationRateProps } from './generalValidationRate';
export { generalValidationCustomerId } from './generalValidationCustomerId';
export type { GeneralValidationCustomerIdProps } from './generalValidationCustomerId';
export { generalValidationReferredId } from './generalValidationReferredId';
export type { GeneralValidationReferredIdProps } from './generalValidationReferredId';
export { generalValidationShippingAreasId } from './generalValidationShippingAreasId';
export type { GeneralValidationShippingAreasIdProps } from './generalValidationShippingAreasId';
export { generalValidationShippingTimeDays } from './generalValidationShippingTimeDays';
export type { GeneralValidationShippingTimeDaysProps } from './generalValidationShippingTimeDays';
export { generalValidationAvailableShippingServices } from './generalValidationAvailableShippingServices';
export type { GeneralValidationAvailableShippingServicesProps } from './generalValidationAvailableShippingServices';
export { generalValidationSupplierId } from './generalValidationSupplierId';
export type { GeneralValidationSupplierIdProps } from './generalValidationSupplierId';
export { generalValidationExpensesTypeId } from './generalValidationExpensesTypeId';
export type { GeneralValidationExpensesTypeIdProps } from './generalValidationExpensesTypeId';
export { generalValidationProjectsId } from './generalValidationProjectsId';
export type { GeneralValidationProjectsIdProps } from './generalValidationProjectsId';
export { generalValidationCashRegisterType } from './generalValidationCashRegisterType';
export type { GeneralValidationCashRegisterTypeProps } from './generalValidationCashRegisterType';

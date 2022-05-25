export interface IApiParams {
  url: string;
  requestMethod: RequestMethod;
  input: object;
  removeToken?: boolean;
  removeBaseUrl?: boolean;
  hideResponseMsg?: boolean;
  hideLoader?: boolean;
}

export interface IFormParams {
  formName: string;
  fields: IFormFieldParams[];
  disabled?: boolean;
  submitButton: IButtonParams;
}

export interface IFormFieldParams {
  fieldName: string;
  value?: string;
  fieldType: FieldTypes;
  disabled?: boolean;
  validations?: IFormFieldValidators[];
  placeholder: string;
  label: string;
  passwordVisibility?: boolean;
  children?: React.ReactNode;
  change?: Function;
  width?: number;
  prefixIcon?: IIconParams;
}

export interface IFormFieldValidators {
  message: string;
  validator: ValidatorTypes;
  value?: any;
}

export enum ValidatorTypes {
  MAX_LENGTH = 'maxLength',
  MIN_VALUE = 'min',
  MAX_VALUE = 'max',
  REQUIRED = 'required',
}

export enum FieldTypes {
  TEXT = 'TEXT',
  PASSWORD = 'PASSWORD',
  NUMBER = 'NUMBER',
}

export enum RequestMethod {
  GET,
  POST,
  PUT,
  DELETE,
}

export interface IButtonParams {
  buttonName: string;
  buttonType: ButtonTypes;
  function: (loaderStatusCallback: any) => void;
  loader?: boolean;
  buttonColor: ButtonColorSchemes;
}

export enum ButtonTypes {
  OUTLINE = 'OUTLINE',
  FILL = 'FILL',
}

export enum ButtonColorSchemes {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

export interface IIconParams {
  iconType: IconType;
  iconName: string;
  size?: number; // Default to 30
  color?: string; // Default to #000
}

export enum IconType {
  FONT_AWESOME = 'FONT_AWESOME',
  ANT_DESIGN = 'ANT_DESIGN',
}

export interface NavigationProps {
  navigation: any;
  route: {
    key: string;
    name: string;
    params: any;
  };
}

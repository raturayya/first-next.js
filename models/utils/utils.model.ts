export interface IValidatorsOption {
  minLength?: number;
  maxLength?: number;
  isRequired?: boolean;
  isEmail?: boolean;
}

export interface ISignature {
  httpMethod: string;
  relativeUrl: string;
  accessToken: string;
  requestBody?: any;
  ticks: string;
}

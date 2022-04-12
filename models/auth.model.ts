export interface ISendOtp {
  UniqueID: string;
  OtpType: string;
}

export interface IVerifyOtp {
  Identifier: string;
  Otp: string;
  OtpType: string;
}

export interface IUpdatePin {
  Identifier: string;
  PhoneNo: string;
  Pin: string;
  Otp: string;
  OtpType: string;
}

export interface ILogin {
  phoneNo: string;
  pin: string;
}

import { ISignature } from '@models/utils';
import * as CryptoJS from 'crypto-js';
import { isObject } from 'formik';

const getLocalDate = () => {
  var now = new Date();
  var h = 7;

  now.setTime(now.getTime() + h * 60 * 60 * 1000);
  return now;
};

// ---------------------------------------------------------------------
// Set token authorization
// ---------------------------------------------------------------------
export const setLocalDate = () => {
  return getLocalDate();
};

// Set Ticks Now
export const setTicksNow = () => {
  const date = new Date();

  return date.getTime() * 10000 + 621355968000000000;
};

// Set Ticks Time
export const setTicks = () => {
  const localDate = getLocalDate();

  return localDate.getTime() * 10000 + 621355968000000000;
};

// Get Signature
export const getSignature = ({
  httpMethod,
  relativeUrl,
  accessToken,
  requestBody = '',
  ticks
}: ISignature) => {
  const apiSecret = `${process.env.NEXT_PUBLIC_API_SECRET}`;
  const url = '/api' + relativeUrl;
  // const requestSignBody = JSON.stringify(requestBody).replace(/\"/g, '"').toLowerCase();
  const requestSignBody = JSON.stringify(requestBody)
    .replace(/\"/g, `\"`)
    .replace(/ /g, ``)
    .toLowerCase();

  const hashBody = CryptoJS.SHA256(
    isObject(requestBody) ? requestSignBody : requestBody
  ).toString();

  let message = httpMethod + ':' + url + ':' + accessToken + ':' + hashBody + ':' + ticks;

  const hash = CryptoJS.HmacSHA256(message, apiSecret).toString(CryptoJS.enc.Hex);

  return hash;
};

// Set Basic Token
export const getBasicToken = (handphone: string, pin: string, ticks: any) => {
  // API-Sign = Message signature using HMAC-SHA512 of (URI path + SHA256(nonce + POST data)) and base64 decoded secret API key
  const message = handphone + ':' + pin + ':' + ticks;

  const hash = CryptoJS.SHA256(message);

  // var encodeHash = encode_utf8(handphone + ":" + hash);

  let wordArray = CryptoJS.enc.Utf8.parse(handphone + ':' + hash);
  const secret_buffer = wordArray.toString(CryptoJS.enc.Base64);

  return secret_buffer;
};

// Set Basic Token with ApiSecret
export const getBasicTokenWithApiSecret = (handphone: string, ticks: any) => {
  const apiSecret = process.env.NEXT_PUBLIC_API_SECRET;
  const message = handphone + ':' + apiSecret + ':' + ticks;
  const hash = CryptoJS.SHA256(message);

  let wordArray = CryptoJS.enc.Utf8.parse(handphone + ':' + hash);
  const secret_buffer = wordArray.toString(CryptoJS.enc.Base64);

  return secret_buffer;
};

// Set Basic Token
export const getBasicTokenWithApiKeySecret = (ticks: any) => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const apiSecret = process.env.NEXT_PUBLIC_API_SECRET;
  const message = apiKey + ':' + apiSecret + ':' + ticks;
  const hash = CryptoJS.SHA256(message);

  let wordArray = CryptoJS.enc.Utf8.parse(apiKey + ':' + hash);
  const secret_buffer = wordArray.toString(CryptoJS.enc.Base64);

  return secret_buffer;
};

// Set Member Token
export const getMemberToken = (phone: string, pin: string) => {
  var message = phone + ':' + pin;
  const hash = CryptoJS.SHA256(message);

  var wordArray = CryptoJS.enc.Utf8.parse(phone + ':' + hash);
  var secret_buffer = wordArray.toString(CryptoJS.enc.Base64);
  return secret_buffer;
};

export const generateMD5 = (value: string) => {
  var hash = CryptoJS.MD5(CryptoJS.enc.Latin1.parse(value));
  var md5 = hash.toString(CryptoJS.enc.Hex);

  return md5;
};

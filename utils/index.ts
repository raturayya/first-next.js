// ** Checks if an object is empty (returns boolean)
export const isObjEmpty = (obj: Object) => Object.keys(obj).length === 0;

// ** Returns K format from a number
export const kFormatter = (num: number) => (num > 999 ? `${(num / 1000).toFixed(1)}k` : num);

// ** Converts HTML to string
export const htmlToString = (html: any) => html.replace(/<\/?[^>]+(>|$)/g, '');

// ** Checks if the passed date is today
const isToday = (date: Date) => {
  const today = new Date();
  return (
    /* eslint-disable operator-linebreak */
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
    /* eslint-enable */
  );
};

/**
 ** Format and return date in Humanize format
 ** Intl docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 ** Intl Constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
 * @param {String} value date to format
 * @param {Object} formatting Intl object to format with
 */
export const formatDate = (
  value: string,
  formatting: any = { month: 'short', day: 'numeric', year: 'numeric' }
) => {
  if (!value) return value;
  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value));
};

// ** Returns short month of passed date
export const formatDateToMonthShort = (value: string, toTimeForCurrentDay: boolean = true) => {
  const date = new Date(value);
  let formatting: any = { month: 'short', day: 'numeric' };

  if (toTimeForCurrentDay && isToday(date)) {
    formatting = { hour: 'numeric', minute: 'numeric' };
  }

  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value));
};

export const removeEmptyProp = (obj: Object | any) => {
  Object.entries(obj).forEach(([key, val]) => {
    if (val && typeof val === 'object') {
      removeEmptyProp(obj);
    } else if (val == null || val === '' || val === undefined) {
      delete obj[key];
    }
  });
};

export const toFormDataWithMultiple = (formValue: any) => {
  const formData = new FormData();
  var keyName;

  for (const key of Object.keys(formValue)) {
    let value = formValue[key];

    if (typeof value == 'boolean') {
      value = +value;
    }

    if (typeof value == 'object' && value) {
      for (const keyObj of Object.keys(value)) {
        let valObj = value[keyObj];

        keyName = [key, '[', keyObj, ']'].join('');

        if (typeof valObj == 'boolean') {
          valObj = +valObj;
        }

        if (Array.isArray(valObj)) {
          if (valObj.length > 0) {
            if (valObj[0] instanceof File) valObj = valObj[0];
          }
        }

        formData.append(keyName, valObj);
      }
    }

    if (Array.isArray(value)) {
      if (value.length > 0) {
        if (value[0] instanceof File) formData.append(key, value[0]);
      }
    }

    if (typeof value != 'object') {
      formData.append(key, value);
    }
  }

  return formData;
};

export const toFormData = (formValue: any) => {
  const formData = new FormData();
  var keyName;

  for (const key of Object.keys(formValue)) {
    let value = formValue[key];

    formData.append(key, value);
  }

  return formData;
};

export const parseToPhone = (value: string) => {
  value = value.toString().replace(/[^0-9]/g, '');

  return value.toString().replace(/[+]+/, '');
};

export const onFocusChange = (e: any) => {
  const { value, nextElementSibling } = e.target;

  if (value.length > 0) {
    nextElementSibling.focus();
  }
};

export const getTimeNow = (isHour = false) => {
  let clock = new Date();
  let hour = clock.getHours();
  let minutes = clock.getMinutes();
  let seconds = clock.getSeconds();

  if (isHour) {
    return minutes + ':' + seconds;
  }

  return hour + ':' + minutes + ':' + seconds;
};

export const parseSecondsToMinute = (seconds: number) => {
  var today = new Date();
  var date = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    today.getHours(),
    today.getMinutes(),
    today.getSeconds() + seconds
  );

  return today.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
};

export const numberWithCommas = (value: string | number = 0) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export const numberSeparator = (value: string | number, separator: string) => {
  return value.toString().replace(/\B(?=(\d{4})+(?!\d))/g, separator);
};

export const sumTotal = (arr: any[]) =>
  arr.reduce((sum: any, { points, total }: any) => sum + points * total, 0);

export const sumTotalTopup = (arr: any[]) =>
  arr.reduce(
    (sum: any, { totalBonusPoint, totalRewardPoint }: any) =>
      sum + (totalBonusPoint + totalRewardPoint),
    0
  );

export const getTotalValue = (arr: any[], key: string) =>
  arr.reduce((sum: any, item: any) => sum + item[key], 0);

export const dataURLtoFile = (dataurl: any, filename: any) => {
  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
};

export const parseSecToDate = (seconds: number) => {
  var date = new Date();
  date.setSeconds(date.getSeconds() + seconds);

  return date;
};

export const isValidDate = (date: any) => {
  if (Object.prototype.toString.call(date) === '[object Date]') {
    if (isNaN(date.getTime())) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

export const getMaxValueArr = (arr: any[], field: string) =>
  arr.reduce((a, b) => (a[field] > b[field] ? a : b));

export const getMinValueArr = (arr: any[], field: string) =>
  arr.reduce((a, b) => (a[field] < b[field] ? a : b));

export const convertBlobToFile = (fileBlob: Blob, fileName: string): File => {
  var b: any = fileBlob;
  b.lastModifiedDate = new Date();
  b.name = fileName;

  //Cast to a File() type
  return <File>fileBlob;
};

export const isValidateEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const mergeDynamicArray = (arr: any[], property: string) => {
  const result = [].concat(...arr.map((obj: any) => obj[property]));

  return result;
};

export const removeDuplicateArr = (arr: any[], key: string) => {
  const seen = new Set();

  arr.filter((el: any) => {
    const duplicate = seen.has(el[key]);
    seen.add(el[key]);
    return !duplicate;
  });
};

export const removeDuplicateArrByKeepLast = (arr: any[], key: string) => {
  return [...new Map(arr.map((x: any) => [x[key], x])).values()];
};

export const parseStringToNumber = (value: string) => {
  value = value.toString().replace(/[^0-9]/g, '');

  return value.toString().replace(/^0+/, '');
};

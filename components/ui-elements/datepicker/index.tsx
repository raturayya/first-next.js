import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { id } from 'date-fns/locale';

const DatePickerFormik = ({ ...props }: any) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={id}>
        <DatePicker
          label={props.label ? props.label : ''}
          value={props.value}
          onChange={props.onChange}
          inputFormat="dd/MM/yyyy"
          // minDate={props.minDate ? props.minDate : new Date(addYears(new Date(), -100))}
          // maxDate={props.maxDate ? props.maxDate : new Date(addYears(new Date(), -17))}
          renderInput={({ inputRef, inputProps, InputProps }) => (
            <div className="relative flex items-center">
              <input className="input" ref={inputRef} {...inputProps} />
              <div className="absolute right-[16px]">{InputProps?.endAdornment}</div>
            </div>
          )}
          {...props}
        />
      </LocalizationProvider>
    </>
  );
};

export default DatePickerFormik;

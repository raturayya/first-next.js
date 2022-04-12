import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

import { useField } from 'formik';
import MessageDescription from '@components/ui-elements/form/message-description';

export default function AutoCompleteAsync({
  label,
  isInline,
  inputValue,
  onInputChange,
  options,
  optionLabel,
  optionValue,
  isSearch,
  handleSelect,
  ...props
}: any) {
  const [field, meta] = useField(props);
  const [open, setOpen] = useState(false);

  return (
    <Autocomplete
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option: any, value: any) => option[optionValue] === value[optionValue]}
      getOptionLabel={(option: any) => option[optionLabel]}
      options={options}
      loading={isSearch}
      onInputChange={(e, value) => onInputChange(value)}
      onChange={(event, value) => handleSelect(value)}
      renderInput={(params) => (
        <>
          <TextField
            {...field}
            {...params}
            InputLabelProps={{
              shrink: true,
              disableAnimation: true
            }}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {isSearch ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              )
            }}
          />
          {meta.touched && meta.error ? <MessageDescription {...meta} /> : null}
        </>
      )}
    />
  );
}

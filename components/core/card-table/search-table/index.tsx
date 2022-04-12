import React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { id } from 'date-fns/locale';
import { DateRangePicker } from '@mui/lab';
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';

interface ISearchTable {
  isSearch: boolean;
  isRange: boolean;
  setRangeDate: any;
  rangeDate: any;
  handleSearch: any;
  isSearchStatus?: boolean;
  selectedStatus?: string;
  handleSearchStatus?: any;
}

const SearchTable = ({
  isSearch,
  isRange,
  setRangeDate,
  rangeDate,
  handleSearch,
  isSearchStatus,
  selectedStatus,
  handleSearchStatus
}: ISearchTable) => {
  if (!isSearch) return null;

  return (
    <div className="flex items-center justify-end space-x-4">
      {isSearchStatus && (
        <div className="w-full max-w-[400px]">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status contact id</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedStatus}
              label="Status contact id"
              onChange={(e: any) => handleSearchStatus(e.target.value)}>
              <MenuItem value="">Semua status</MenuItem>
              <MenuItem value="104101">Belum dikirim</MenuItem>
              <MenuItem value="104102">Sedang dikirim</MenuItem>
              <MenuItem value="104103">Gagal dikirim</MenuItem>
              <MenuItem value="104104">Berhasil dikirim</MenuItem>
            </Select>
          </FormControl>
        </div>
      )}
      <div className="w-full max-w-[250px]">
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={id}>
          {isRange && setRangeDate && (
            <DateRangePicker
              inputFormat="dd/MM/yyyy"
              startText="Pilih tanggal validasi"
              endText="Pilih tanggal validasi"
              value={rangeDate}
              onChange={(newValue) => {
                setRangeDate(newValue);
              }}
              disableCloseOnSelect
              renderInput={({ inputProps, ...startProps }: any, endProps: any) => {
                const startValue = inputProps.value;
                delete inputProps.value;
                return (
                  <React.Fragment>
                    <TextField
                      {...startProps}
                      inputProps={inputProps}
                      value={`${startValue} - ${endProps.inputProps.value}`}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <DateRangeIcon />
                          </InputAdornment>
                        )
                      }}
                    />
                  </React.Fragment>
                );
              }}
            />
          )}
        </LocalizationProvider>
      </div>
      <div className="w-full max-w-[400px]">
        <input
          className="input bg-gray-50 text-gray-400 min-h-[40px]"
          name="search"
          placeholder="Cari transaksi ..."
          onKeyUp={(e: any) => {
            const { value } = e.target;
            handleSearch(value);
          }}
          data-unq="dashboard-input-search"
        />
      </div>
    </div>
  );
};

export default SearchTable;

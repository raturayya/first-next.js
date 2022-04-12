import React, { useState, useEffect } from 'react';
import { DataGrid, GridRowParams } from '@mui/x-data-grid';

export interface ITableComponent {
  data?: any;
  rows?: any;
  columns?: any;
  rowId: string;
  pageStart: number;
  pageSize: number;
  handleChangeTablePageSize: any;
  handleChangeTablePage: any;
  isLoading: boolean;
  checkboxSelection?: boolean;
  className?: string;
  selectionModel?: any[];
  setSelectionModel?: any;
}

const Table = ({
  data,
  rows,
  columns,
  rowId,
  pageStart,
  pageSize,
  handleChangeTablePageSize,
  handleChangeTablePage,
  isLoading,
  checkboxSelection = false,
  className,
  selectionModel,
  setSelectionModel
}: ITableComponent) => {
  const rowsPerPageOptions = [5, 15, 25, 50, 100];
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      if (
        className === 'custom--dataGrid' &&
        window.document.getElementsByClassName('MuiDataGrid-virtualScroller').length > 0
      ) {
        window.document
          .getElementsByClassName('MuiDataGrid-virtualScroller')[0]
          .addEventListener('scroll', listenToScroll);
      }
    }, 1000);
    return window.removeEventListener('scroll', listenToScroll);
  });

  const listenToScroll = (e: any) => {
    const horizontal = e.currentTarget.scrollLeft;
    let columns: any = window.document.getElementsByClassName('MuiDataGrid-columnHeader');

    columns[columns.length - 1].style.right = horizontal - horizontal * 2 + 'px';
  };

  if (rows.length > 0 && columns) {
    return (
      <div className="w-full h-[500px]">
        <DataGrid
          className={className ? className : ''}
          getRowId={(row) => row[rowId]}
          columns={columns}
          loading={isLoading}
          onPageSizeChange={(newPageSize) => {
            setPage(0);
            handleChangeTablePageSize(newPageSize);
          }}
          paginationMode="server"
          pageSize={pageSize}
          pagination
          rows={rows}
          rowCount={rows.length > 0 ? rows[0].totalRow : 0}
          rowsPerPageOptions={rowsPerPageOptions}
          page={page}
          checkboxSelection={checkboxSelection}
          disableSelectionOnClick
          isRowSelectable={(params: GridRowParams) => {
            if (checkboxSelection && params.row.sendKNStatus) {
              return params.row.sendKNStatus === '104101';
            }

            return false;
          }}
          onPageChange={(nowPage) => {
            if (nowPage > page) {
              setPage(page + 1);
              handleChangeTablePage(pageStart + pageSize);
            }

            if (nowPage < page) {
              setPage(page - 1);
              handleChangeTablePage(pageStart - pageSize);
            }
          }}
          onSelectionModelChange={(newSelectionModel) => {
            if (setSelectionModel) {
              setSelectionModel(newSelectionModel);
            }
          }}
          selectionModel={selectionModel ? selectionModel : []}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <p>Data tidak tersedia</p>
    </div>
  );
};
export default Table;

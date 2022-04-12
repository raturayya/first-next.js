import React from 'react';
import dynamic from 'next/dynamic';
import { ITableComponent } from '@components/core/table';

const RowCountTable = dynamic(import('@components/core/card-table/row-count-table'));
const CardTableContent = dynamic(import('@components/core/card-table/card-table-content'));

export interface ICardTableComponent {
  title: string;
  rows: any[];
  columns: any[];
  rowId: string;
  isSearch?: boolean;
  isExport?: boolean;
  handleSearch: any;
  handleExportTada?: any;
  handleExportMembership?: any;
  rangeDate?: any;
  setRangeDate?: any;
  pageStart: number;
  pageSize: number;
  handleChangeTablePageSize: any;
  handleChangeTablePage: any;
  isLoading: boolean;
  isRange?: boolean;
  checkboxSelection?: boolean;
  isTab?: boolean;
  selectedTabContent?: number;
  handleChangeTabContent?: any;
  tabsContent?: ITabsContent[];
}

export interface ITabsContent {
  label: string;
  content: string | null;
  isSearch: boolean;
  isExport: boolean;
  isRange: boolean;
  rangeDate: any;
  setRangeDate: any;
  handleSearch?: any;
  handleExportMembership?: any;
  handleExportTada?: any;
  isSearchStatus?: boolean;
  selectedStatus?: string;
  handleSearchStatus?: any;
  handleSend?: any;
  handleSendAll?: any;
  table: ITableComponent;
}

const CardTable = (props: ICardTableComponent) => {
  return (
    <div className="border border-solid border-gray-100 rounded-lg p-[16px] md:p-[40px]">
      <div className="flex flex-col justify-between mb-3 md:mb-8">
        <RowCountTable title={props.title} rows={props.rows} />
      </div>

      <CardTableContent {...props} />
    </div>
  );
};
export default CardTable;

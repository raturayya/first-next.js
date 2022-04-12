import dynamic from 'next/dynamic';
import { ICardTableComponent } from '@components/core/card-table';

const Table = dynamic(import('@components/core/table'));
const ExportTable = dynamic(import('@components/core/card-table/export-table'));
const SearchTable = dynamic(import('@components/core/card-table/search-table'));
const TabTable = dynamic(import('@components/core/card-table/tab-table'));

const CardTableContent = ({
  title,
  rows,
  columns,
  rowId,
  isSearch,
  isExport,
  handleSearch,
  handleExportTada,
  handleExportMembership,
  rangeDate,
  setRangeDate,
  pageStart,
  pageSize,
  handleChangeTablePageSize,
  handleChangeTablePage,
  isLoading,
  isRange,
  checkboxSelection = false,
  isTab,
  selectedTabContent = 0,
  handleChangeTabContent,
  tabsContent
}: ICardTableComponent) => {
  if (isTab && tabsContent) {
    return (
      <TabTable
        selectedTabContent={selectedTabContent}
        handleChangeTabContent={handleChangeTabContent}
        tabsContent={tabsContent}
      />
    );
  }

  return (
    <>
      <div className={`flex items-center ${isExport ? 'justify-between' : 'justify-end'} mb-8`}>
        <SearchTable
          isSearch={isSearch ?? false}
          isRange={isRange ?? false}
          setRangeDate={(e: any) => setRangeDate(e)}
          rangeDate={rangeDate}
          handleSearch={(e: any) => handleSearch(e)}
        />
        <ExportTable
          isExport={isExport ?? false}
          handleExportMembership={handleExportMembership}
          handleExportTada={handleExportTada}
        />
      </div>

      <Table
        rows={rows}
        columns={columns}
        rowId={rowId}
        pageStart={pageStart}
        pageSize={pageSize}
        handleChangeTablePageSize={(e: number) => handleChangeTablePageSize(e)}
        handleChangeTablePage={(e: number) => handleChangeTablePage(e)}
        checkboxSelection={checkboxSelection}
        isLoading={isLoading}
      />
    </>
  );
};

export default CardTableContent;

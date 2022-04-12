import React from 'react';
import dynamic from 'next/dynamic';

const TabsComponent = dynamic(import('@components/ui-elements/tabs'));
const SearchTable = dynamic(import('@components/core/card-table/search-table'));
const ExportTable = dynamic(import('@components/core/card-table/export-table'));
const Table = dynamic(import('@components/core/table'));

import { ITabsContent } from '@components/core/card-table';
import { Tooltip } from '@mui/material';
import Button from '@components/ui-elements/button';

interface ITabTable {
  selectedTabContent: number;
  handleChangeTabContent: any;
  tabsContent: ITabsContent[];
}

const TabTable = ({ selectedTabContent, handleChangeTabContent, tabsContent }: ITabTable) => {
  const renderTabs = () => {
    return tabsContent.map((tabContent: ITabsContent, i: number) => {
      const item = {
        label: tabContent.label,
        content: (
          <React.Fragment>
            <div className="flex items-center justify-between mb-8">
              <SearchTable
                isSearch={tabsContent[i].isSearch ?? false}
                isRange={tabsContent[i].isRange ?? false}
                setRangeDate={(e: any) => tabsContent[i].setRangeDate(e)}
                rangeDate={tabsContent[i].rangeDate}
                handleSearch={(e: any) => tabsContent[i].handleSearch(e)}
                isSearchStatus={tabsContent[i].isSearchStatus}
                selectedStatus={tabsContent[i].selectedStatus}
                handleSearchStatus={tabsContent[i].handleSearchStatus}
              />
              <ExportTable
                isExport={tabsContent[i].isExport}
                handleExportMembership={tabsContent[i].handleExportMembership}
                handleExportTada={tabsContent[i].handleExportTada}
              />
            </div>

            {tabsContent[i].table.checkboxSelection && (
              <div className="flex items-center mb-8 space-x-8">
                <div className="relative">
                  <b>{tabsContent[i].table.selectionModel?.length}</b> <span>data terpilih</span>
                  <div className="absolute top-[-5px] right-[-14px]">
                    <Tooltip
                      title="Dengan click tombol kirim data maka rewards customer dan data untuk insentif SPG akan di proses"
                      arrow>
                      <i className="text-sm cursor-pointer">contact_support</i>
                    </Tooltip>
                  </div>
                </div>
                <Button
                  type="button"
                  color="gray"
                  size="small"
                  onClick={() => tabsContent[i].handleSendAll()}
                  dataUnq="dashboard-button-sendAllData"
                  isOutlined>
                  <span className="text-sm">Kirim Data</span>
                </Button>
              </div>
            )}

            <Table
              rows={tabsContent[i].table.rows}
              columns={tabsContent[i].table.columns}
              rowId={tabsContent[i].table.rowId}
              pageStart={tabsContent[i].table.pageStart}
              pageSize={tabsContent[i].table.pageSize}
              handleChangeTablePageSize={(e: number) =>
                tabsContent[i].table.handleChangeTablePageSize(e)
              }
              handleChangeTablePage={(e: number) => tabsContent[i].table.handleChangeTablePage(e)}
              isLoading={tabsContent[i].table.isLoading}
              checkboxSelection={tabsContent[i].table.checkboxSelection ?? false}
              className={tabsContent[i].table.className ? tabsContent[i].table.className : ''}
              selectionModel={
                tabsContent[i].table.selectionModel ? tabsContent[i].table.selectionModel : []
              }
              setSelectionModel={
                tabsContent[i].table.setSelectionModel
                  ? tabsContent[i].table.setSelectionModel
                  : null
              }
            />
          </React.Fragment>
        )
      };

      return item;
    });
  };

  return (
    <TabsComponent
      selectedTab={selectedTabContent}
      handleChangeTab={handleChangeTabContent}
      tabs={renderTabs()}
    />
  );
};

export default TabTable;

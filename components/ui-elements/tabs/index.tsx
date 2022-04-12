import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from './tab-panel';

interface ITabsComponents {
  selectedTab: number;
  handleChangeTab: any;
  tabs: ITab[];
}

export interface ITab {
  label: string;
  content: any;
}

const TabsComponent = ({ selectedTab, handleChangeTab, tabs }: ITabsComponents) => {
  return (
    <div className="tab--container">
      <Tabs value={selectedTab} onChange={handleChangeTab} aria-label="simple tabs example">
        {tabs.map((tab: ITab, i: number) => (
          <Tab
            label={tab.label}
            id={`simple-tab-${i}`}
            aria-controls={`simple-tabpanel-${i}`}
            key={i}
          />
        ))}
      </Tabs>

      {tabs.map((tab: ITab, i: number) => (
        <TabPanel value={selectedTab} index={i} key={i}>
          <div className="pt-4">{React.useMemo(() => tab.content, [tab.content])}</div>
        </TabPanel>
      ))}
    </div>
  );
};

export default TabsComponent;

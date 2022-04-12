import React from 'react';
import dynamic from 'next/dynamic';

const TabCardItem = dynamic(() => import('@components/core/tab-card/tab-card-item'));

export interface ITabCardComponent {
  tabs?: ITabCard[];
  tab?: ITabCard;
  isSelected: number;
  setSelected: any;
  countPending: number;
  countValidated: number;
}

export interface ITabCard {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
}

const TabCards = ({
  tabs,
  isSelected,
  setSelected,
  countPending,
  countValidated
}: ITabCardComponent) => {
  return (
    <>
      <div className="tab--card space-x-8">
        {tabs?.map((tab: ITabCard, i: number) => (
          <React.Fragment key={i}>
            <TabCardItem
              tab={tab}
              isSelected={isSelected}
              setSelected={(e: number) => setSelected(e)}
              countPending={countPending}
              countValidated={countValidated}
            />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default TabCards;

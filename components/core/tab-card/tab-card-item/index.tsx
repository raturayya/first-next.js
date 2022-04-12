import Image from 'next/image';
import { ITabCardComponent } from '@components/core/tab-card/tab-cards';

const TabCardItem = ({
  tab,
  isSelected,
  setSelected,
  countPending,
  countValidated
}: ITabCardComponent) => {
  if (tab) {
    return (
      <>
        <div
          className={`tab-card--item space-x-4 border border-solid ${
            tab.id === isSelected ? 'border-gray-800' : 'border-gray-100'
          } rounded-lg transition-all`}
          onClick={() => setSelected(tab?.id)}>
          <div className="tab-card--description">
            <h4 className="h4 font-medium">{tab.title}</h4>
            {tab?.id === 1 && (
              <span className="text-gray-400">
                {countPending} {tab.subtitle}
              </span>
            )}
            {tab?.id === 2 && (
              <span className="text-gray-400">
                {countValidated} {tab.subtitle}
              </span>
            )}
          </div>
          <div className="tab-card--img">
            <Image src={tab.imageUrl} width={160} height={140} layout="fixed" />
          </div>
        </div>
      </>
    );
  }

  return null;
};

export default TabCardItem;

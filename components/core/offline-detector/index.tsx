import { Offline } from 'react-detect-offline';

const OfflineDetector = () => {
  return (
    <>
      <Offline>
        <div
          className="fixed bottom-[20px] left-[20px] z-[1002] transition-all duration-500"
          data-unq="alert-offline-detected">
          <div className="p-5 bg-black bg-opacity-75 text-white rounded-lg flex items-center space-x-3">
            <i className="text-gray-600">wifi_off</i>
            <p className="space-x-2">
              <span>You are currently offline.</span>
              <a className="cursor-pointer clr-primary" onClick={() => window.location.reload()}>
                Refresh
              </a>
            </p>
          </div>
        </div>
      </Offline>
    </>
  );
};

export default OfflineDetector;

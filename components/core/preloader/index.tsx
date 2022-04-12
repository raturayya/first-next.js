import { LoadingContext } from '@contexts/loading';
import { useContext } from 'react';
import Loader from 'react-loader-spinner';

const Preloader = (props: any) => {
  const { isLoadingOn } = useContext(LoadingContext);

  return isLoadingOn ? (
    <>
      <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-[1100]">
        <div className="flex justify-center items-center w-full h-full">
          <div className="flex flex-col justify-center items-center space-y-4 bg-white p-8 rounded-lg">
            <Loader type="Oval" color="#00BFFF" height={80} width={80} />
            <p className="font-semibold ls-loose text-gray-500">Loading ...</p>
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default Preloader;

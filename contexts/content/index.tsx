import React, { useEffect, useState } from 'react';
// import { getTokenAction } from '@redux/actions/auth';
import { useDispatch } from 'react-redux';
import storageHelper from '@helpers/storage.helper';

export const ContentContext = React.createContext({} as any);

const ContentContextProvider = (props: any) => {
  const [token, setToken] = useState<string>();
  const [isExpired, setIsExpired] = useState<boolean>(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const tokenStorage = storageHelper.get(`${process.env.NEXT_PUBLIC_STORAGE_TOKEN_KEY_NAME}`);
    if (tokenStorage) {
      setToken(tokenStorage);
    }

    if (!tokenStorage) {
      // dispatch(getTokenAction());
    }
  }, []);

  return (
    <ContentContext.Provider value={{ isExpired, setIsExpired }}>
      {props.children}
    </ContentContext.Provider>
  );
};

export default ContentContextProvider;

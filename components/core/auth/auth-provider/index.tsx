import storageHelper from '@helpers/storage.helper';
import React, { useEffect, useState } from 'react';

const redirectKey = 'sign_in_redirect';

export const AuthContext = React.createContext<
  | {
      auth: any;
      initializing: boolean;
      user: any | null;
      error: { message: string };
      setRedirect: (redirect: string) => void;
      getRedirect: () => string | null;
      clearRedirect: () => void;
    }
  | undefined
>(undefined);

AuthContext.displayName = 'AuthContext';

function setRedirect(redirect: string) {
  window.localStorage.setItem(redirectKey, redirect);
}

function getRedirect(): string | null {
  return window.localStorage.getItem(redirectKey);
}

function clearRedirect() {
  return window.localStorage.removeItem(redirectKey);
}

export function useAuth() {
  const auth = React.useContext(AuthContext);

  if (!auth) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return auth;
}

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [auth, setAuth] = useState<any>();
  const [user, setUser] = useState<any>();
  const [error, setError] = useState<{ message: string } | null>();
  const [initializing, setInitializing] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const tokenStorage = storageHelper.get(`${process.env.NEXT_PUBLIC_STORAGE_PROFILE_NAME}`);

      if (tokenStorage) {
        setUser(tokenStorage['name']);
        setError(null);
      } else {
        setUser(null);
      }
      setInitializing(false);
    }
  }, []);

  const value: any = {
    user,
    error,
    auth,
    initializing,
    setRedirect,
    getRedirect,
    clearRedirect
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

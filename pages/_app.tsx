import { NextPage } from 'next';
import Router from 'next/router';

import Preloader from '@components/core/preloader';

import LoadingContextProvider from '@contexts/loading';
import { CustomAppProps } from '@models/utils';

import { wrapper } from '@redux/stores/store';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '@styles/globals.css';

// Binding events
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export type NextApplicationPage<P = any, IP = P> = NextPage<P, IP> & {
  requireAuth?: boolean;
};

const MyApp = ({ Component, pageProps }: CustomAppProps) => {
  return (
    <>
      <LoadingContextProvider>
        <Preloader />
        <Component {...pageProps} />
      </LoadingContextProvider>
    </>
  );
};

export default wrapper.withRedux(MyApp);

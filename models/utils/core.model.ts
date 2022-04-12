import { AppProps } from 'next/app';
import { NextPage } from 'next';

type CustomPage = NextPage & {
  requiresAuth?: boolean;
  redirectUnauthenticatedTo?: string;
};

export interface CustomAppProps extends Omit<AppProps, 'Component'> {
  Component: CustomPage;
}

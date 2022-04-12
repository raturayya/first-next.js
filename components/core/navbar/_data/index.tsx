import { INavbar } from '@components/core/navbar';
import React from 'react';
import Link from 'next/link';
import storageHelper from '@helpers/storage.helper';

const userStorage =
  typeof window !== 'undefined'
    ? storageHelper.get(`${process.env.NEXT_PUBLIC_STORAGE_PROFILE_NAME}`)
    : '';

export const navbar: INavbar = {
  leading: {
    title: '',
    routeTo: '/',
    imageUrl: '/images/brands/morinaga_raja_susu.png',
    imageSize: {
      width: 427,
      height: 62
    },
    components: (
      <React.Fragment>
        <Link href="/" passHref>
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="w-[90px] h-[60px] relative">
              <img
                src="/images/brands/morinaga.png"
                className="w-full h-full object-cover object-center"
              />
              {/* <Image src="/images/brands/morinaga.png" width={90} height={60} /> */}
            </div>
            <p className="text-sm font-semibold font-nunito-sans whitespace-nowrap">
              In Partnership with
            </p>
            <div className="relative w-[200px] h-[50px]">
              <img
                src="/images/brands/ras.png"
                className="w-full h-full object-cover object-center"
              />
              {/* <Image src="/images/brands/ras.png" width={200} height={50} /> */}
            </div>
          </div>
        </Link>
      </React.Fragment>
    )
  },
  actions: userStorage
    ? [
        {
          type: 'menu',
          routeTo: '/',
          title: userStorage?.name,
          menus: [
            {
              type: 'menu',
              routeTo: '/',
              isLogout: true,
              title: 'Logout'
            }
          ]
        }
      ]
    : []
};

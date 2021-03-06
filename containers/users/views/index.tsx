import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import { getUsersDetailAction } from '@redux/actions/users';
import { IUsers } from '@models/users.model';

const usersView = () => {
  const usersState = useSelector((state: any) => state.users);

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersDetailAction());
  }, []);

  const renderContent = (Users: IUsers[]) => {
    if (usersState.isLoading) return <p>Loading ...</p>;

    return (
      <div>
        <div className="space-y-4">
          {Users.map((Users: IUsers, i: number) => (
            <React.Fragment key={i}>
              <Link href={'/users/edit/' + Users.id} passHref>
                <div className="border border-solid border-gray-100 rounded-lg shadow-base p-[20px] cursor-pointer hover:bg-gray-50 leading-[24px]">
                  <p className="font-semibold capitalize">{Users.title}</p>
                  <p className="text-[12px] text-gray-400">{Users.body}</p>
                </div>
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="p-[20px]">
      <div className="mb-[40px]">
        <div className="text-[28px] font-bold">Users</div>
        <Link href="/posts/add">
          <a className="text-blue-400">Add New Users</a>
        </Link>
      </div>

      {renderContent(usersState.users)}
    </div>
  );
};

export default usersView;

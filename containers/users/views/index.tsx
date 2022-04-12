import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'next-redux';

import { LoadingContext } from '@contexts/loading';
import { getPostsAction } from '@redux/actions/users';
import { IUsers } from '@models/users.model';

const postsView = () => {
  const postsState = useSelector((state: any) => state.posts);

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsAction());
  }, []);

  const renderContent = (posts: IUsers[]) => {
    if (postsState.isLoading) return <p>Loading ...</p>;

    return (
      <div>
        <div className="space-y-4">
          {posts.map((post: IUsers, i: number) => (
            <React.Fragment key={i}>
              <Link href={'/posts/edit/' + post.id} passHref>
                <div className="border border-solid border-gray-100 rounded-lg shadow-base p-[20px] cursor-pointer hover:bg-gray-50 leading-[24px]">
                  <p className="font-semibold capitalize">{post.title}</p>
                  <p className="text-[12px] text-gray-400">{post.body}</p>
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
        <div className="text-[28px] font-bold">Posts</div>
        <Link href="/posts/add">
          <a className="text-blue-400">Add New Post</a>
        </Link>
      </div>

      {renderContent(postsState.posts)}
    </div>
  );
};

export default postsView;

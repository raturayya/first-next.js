import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import { getCommentsAction } from '@redux/actions/comments';

const commentsView = () => {
  const commentsState = useSelector((state: any) => state.comments);

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsAction());
  }, []);

  const renderContent = (comments: Comment[]) => {
    if (commentsState.isLoading) return <p>Loading ...</p>;

    return (
      <div>
        <div className="space-y-4">
          {comments.map((Comments: IComments, i: number) => (
            <React.Fragment key={i}>
              <Link href={'/comments/edit/' + Comments.id} passHref>
                <div className="border border-solid border-gray-100 rounded-lg shadow-base p-[20px] cursor-pointer hover:bg-gray-50 leading-[24px]">
                  <p className="font-semibold capitalize">{Comments.title}</p>
                  <p className="text-[12px] text-gray-400">{Comments.body}</p>
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
        <div className="text-[28px] font-bold">Comments</div>
        <Link href="/posts/add">
          <a className="text-blue-400">Add New Comments</a>
        </Link>
      </div>

      {renderContent(commentsState.comments)}
    </div>
  );
};

export default commentsView;

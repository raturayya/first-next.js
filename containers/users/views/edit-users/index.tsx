import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import { LoadingContext } from '@contexts/loading';
import { getPostDetailAction, updatePostAction } from '@redux/actions/users';
import { IPost } from '@models/users.model';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';

const validationSchema = yup.object({
  title: yup.string().required('Title is required'),
  body: yup.string().required('Body is required')
});

const editPostView = (props: any) => {
  const { postId } = props;
  const postsState = useSelector((state: any) => state.posts);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      id: postId,
      userId: 1,
      title: postsState.post?.title,
      body: postsState.post?.body
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      dispatch(updatePostAction(postId, values));
      setLoading(true);
      setIsSubmit(true);
    }
  });

  const router = useRouter();
  const dispatch = useDispatch();
  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    dispatch(getPostDetailAction(postId));
  }, []);

  useEffect(() => {
    if (isSubmit && postsState.isSuccess) {
      setLoading(false);
      setIsSubmit(false);
      router.push('/posts');
    }
  }, [isSubmit, postsState.isSuccess, postsState.isError]);

  const renderContent = () => {
    if (postsState.isLoading) return <p>Loading ...</p>;

    return (
      <form className="flex flex-col space-y-8 max-w-[400px]" onSubmit={formik.handleSubmit}>
        <TextField
          id="title"
          name="title"
          label="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <TextField
          id="body"
          name="body"
          label="Body"
          value={formik.values.body}
          onChange={formik.handleChange}
          error={formik.touched.body && Boolean(formik.errors.body)}
          helperText={formik.touched.body && formik.errors.body}
        />
        <Button type="submit">Submit</Button>
      </form>
    );
  };

  return (
    <div className="w-full h-full p-[20px]">
      <div className="mb-[20px]">
        <h1 className="h1 font-bold">Update post with title {postsState.post?.title}</h1>
      </div>

      <div>{renderContent()}</div>
    </div>
  );
};

export default editPostView;

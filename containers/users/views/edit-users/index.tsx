import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import { LoadingContext } from '@contexts/loading';
import { getUserDetailAction, updateUserAction } from '@redux/actions/users';
import { IUsers } from '@models/users.model';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';

const validationSchema = yup.object({
  title: yup.string().required('Title is required'),
  body: yup.string().required('Body is required')
});

const editUserView = (props: any) => {
  const { userId } = props;
  const usersState = useSelector((state: any) => state.users);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      id: userId,
      userId: 1,
      title: usersState.user?.title,
      body: usersState.user?.body
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      dispatch(updateUserAction(userId, values));
      setLoading(true);
      setIsSubmit(true);
    }
  });

  const router = useRouter();
  const dispatch = useDispatch();
  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    dispatch(getUserDetailAction(userId));
  }, []);

  useEffect(() => {
    if (isSubmit && usersState.isSuccess) {
      setLoading(false);
      setIsSubmit(false);
      router.push('/users');
    }
  }, [isSubmit, usersState.isSuccess, usersState.isError]);

  const renderContent = () => {
    if (usersState.isLoading) return <p>Loading ...</p>;

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
        <h1 className="h1 font-bold">Update post with title {usersState.post?.title}</h1>
      </div>

      <div>{renderContent()}</div>
    </div>
  );
};

export default editUserView;

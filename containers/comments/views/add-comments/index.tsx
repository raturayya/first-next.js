import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import { LoadingContext } from '@contexts/loading';
import { createCommentAction, getCommentsDetailAction } from '@redux/actions/comments';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';

const validationSchema = yup.object({
  title: yup.string().required('Title is required'),
  body: yup.string().required('Body is required')
});

const addCommentView = () => {
  const formik = useFormik({
    initialValues: {
      commentId: 1,
      title: '',
      body: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      dispatch(createCommentAction(values));
      setLoading(true);
      setIsSubmit(true);
    }
  });
  const commentsState = useSelector((state: any) => state.comments);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const router = useRouter();
  const dispatch = useDispatch();
  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    if (isSubmit && commentsState.isSuccess) {
      setLoading(false);
      setIsSubmit(false);
      router.push('/comments');
    }
  }, [isSubmit, commentsState.isSuccess, commentsState.isError]);

  return (
    <div className="w-full h-full p-[20px]">
      <div className="mb-[20px]">
        <h1 className="h1 font-bold">Add New Comments</h1>
      </div>

      <div>
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
      </div>
    </div>
  );
};

export default addCommentView;

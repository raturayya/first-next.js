import editCommentView from '@containers/comments/views/edit-comments';

export const getServerSideProps = async ({ params }: any) => {
  const commentId = params.id;

  return {
    props: { commentId }
  };
};

export default editCommentView;

import editPostView from '@containers/users/views/edit-users';

export const getServerSideProps = async ({ params }: any) => {
  const postId = params.id;

  return {
    props: { postId }
  };
};

export default editPostView;

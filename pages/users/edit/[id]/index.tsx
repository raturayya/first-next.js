import editUserView from '@containers/users/views/edit-users';

export const getServerSideProps = async ({ params }: any) => {
  const userId = params.id;

  return {
    props: { userId }
  };
};

export default editUserView;

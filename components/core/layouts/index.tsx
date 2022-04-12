interface ILayout {
  children: any;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <main className="w-full max-w-[1600px] p-[0px] my-0 mx-auto overflow-x-hidden">
        {children}
      </main>
    </>
  );
};

export default Layout;

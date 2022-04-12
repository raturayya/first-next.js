interface ILayoutMain {
  children: any;
}

const LayoutMain = ({ children, ...props }: ILayoutMain) => {
  return (
    <>
      <section className="flex flex-col justify-between w-full h-screen md:h-full">
        {children}
      </section>
    </>
  );
};

export default LayoutMain;

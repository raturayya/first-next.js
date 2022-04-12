interface ILayoutHeader {
  children: any;
  isHide?: boolean;
}

const LayoutHeader = ({ children, isHide }: ILayoutHeader) => {
  return (
    <>
      <header className={`sticky md:relative top-0 z-[1000] ${isHide ? 'hidden md:block' : ''}`}>
        {children}
      </header>
    </>
  );
};

export default LayoutHeader;

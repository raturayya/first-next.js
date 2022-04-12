interface ILayoutBody {
  children: any;
  isHide?: boolean;
}

const LayoutBody = ({ children, isHide }: ILayoutBody) => {
  return (
    <>
      <div
        className={`w-full h-full overflow-auto md:overflow-visible px-[16px] md:px-[40px] lg:px-[60px] py-[16px] md:pt-[0px] pb-[64px] ${
          isHide ? 'mt-[0px]' : 'mt-[100px]'
        } md:mt-[120px]`}>
        {children}
      </div>
    </>
  );
};

export default LayoutBody;

import { IModalHeader } from '@models/components/modal.model';

const ModalHeader = ({ children, toggler, leading }: IModalHeader) => {
  const arrowLeading = () => {
    if (leading) {
      return (
        <a className="cursor-pointer clr-dark" onClick={leading}>
          <i>arrow_back</i>
        </a>
      );
    }
  };

  const onToggle = () => {
    if (toggler) {
      return (
        <button
          className="bg-transparent text-gray-900 text-3xl leading-none outline-none focus:outline-none"
          onClick={toggler}>
          <span className="text-gray-900 text-3xl block">&times;</span>
        </button>
      );
    }
  };

  return (
    <div className="flex items-center justify-between h-[60px] px-4">
      <div>{arrowLeading()}</div>

      <div className="text-center">
        <h5 className={`text-gray-900 h5 font-bold ${!toggler ? 'flex-grow' : ''}`}>{children}</h5>
      </div>

      <div>{onToggle()}</div>

      {/* <hr className="w-full absolute top-16 border-gray-200" /> */}
    </div>
  );
};

export default ModalHeader;

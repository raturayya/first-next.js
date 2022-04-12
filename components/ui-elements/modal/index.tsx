import { IModal } from '@models/components/modal.model';

const Modal = ({ children, size = 'base', active, toggler, custom, noPadding }: IModal) => {
  let modalSize;

  if (size === 'base') {
    modalSize = 'md:max-w-lg';
  } else if (size === 'large') {
    modalSize = 'md:max-w-3xl';
  } else if (size === 'extra-large') {
    modalSize = 'md:max-w-6xl';
  }

  return (
    <>
      <div
        className={`${
          active ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } grid place-items-end md:place-items-center overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none transition-all duration-500`}
        onClick={toggler}
        style={{ zIndex: 1001 }}>
        <div
          className={`transform ${
            active ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          } w-full m-0 md:my-6 mx-auto max-w-full ${modalSize} transition-all duration-500`}>
          <div
            className={`relative border-0 ${
              noPadding ? 'p-0' : 'py-0'
            } rounded-b-none md:rounded-b-3xl shadow-3xl flex flex-col w-full bg-white outline-none focus:outline-none ${
              custom
                ? 'max-h-90-screen overflow-hidden rounded-t-3xl'
                : 'h-screen md:h-full rounded-t-none'
            }
            `}
            onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      </div>
      <div
        className={`${
          active ? 'opacity-25 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } fixed inset-0 z-40 bg-black transition-all duration-500`}
        style={{ zIndex: 1000 }}
      />
    </>
  );
};

export default Modal;

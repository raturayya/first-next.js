import { IModalFooter } from '@models/components/modal.model';

const ModalFooter = ({ children }: IModalFooter) => {
  return <div className="flex items-center justify-end gap-4 px-6">{children}</div>;
};

export default ModalFooter;

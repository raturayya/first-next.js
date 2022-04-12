import { IModalBody } from '@models/components/modal.model';

const ModalBody = ({ children, className, ...props }: IModalBody) => {
  const bodyClass = `relative flex-auto px-4 py-4 ${className}`;

  return (
    <div className={bodyClass} {...props}>
      {children}
    </div>
  );
};

export default ModalBody;

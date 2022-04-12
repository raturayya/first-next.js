import Modal from '@components/ui-elements/modal';
import ModalHeader from '@components/ui-elements/modal/modal-header';
import ModalBody from '@components/ui-elements/modal/modal-body';
import ModalFooter from '@components/ui-elements/modal/modal-footer';
import Button from '@components/ui-elements/button';
import Image from 'next/image';
import Alert from '@components/ui-elements/alert';

const ModalSuccess = ({ isOpen, handleModal, title, subtitle, handleSubmit }: any) => {
  return (
    <>
      <Modal
        size="base"
        active={isOpen}
        custom="h-full overflow-hidden"
        toggler={() => handleModal(false)}>
        <ModalHeader toggler={() => handleModal(false)}></ModalHeader>
        <ModalBody className="h-full flex-grow-1 overflow-auto">
          <div className="w-full">
            <div className="w-full bg--red-200 flex justify-end rounded-xl h-[160px]">
              <Image src="/images/illustrations/success_outlined.svg" width={250} height={250} />
            </div>
            <div className="text-center my-4">
              <p className="text-[20px] font-semibold">Yey, Change PIN Success</p>
              <p className="text-gray-400">PIN is used to protect your Transaction</p>
            </div>
            <Alert color="attention" icon="info" isIcon>
              <p className="font-normal text-gray-500 text-sm">Never share your PIN with anyone</p>
            </Alert>
            <div className="w-full mt-[20px]">
              <Button
                type="button"
                color="primary"
                size="small"
                isBlock
                onClick={() => handleSubmit()}>
                <span className="text-sm">{title}</span>
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ModalSuccess;

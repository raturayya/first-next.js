import { useState, useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { LoadingContext } from '@contexts/loading';

import Modal from '@components/ui-elements/modal';
import ModalHeader from '@components/ui-elements/modal/modal-header';
import ModalBody from '@components/ui-elements/modal/modal-body';
import ModalFooter from '@components/ui-elements/modal/modal-footer';
import Button from '@components/ui-elements/button';
import { closeModal } from '@redux/actions/components/modal';

const ModalDialog = (props: any) => {
  const { modalState, closeModal } = props;
  const [open, setOpen] = useState(false);
  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    if (modalState.isShow) {
      setLoading(false);
    }

    setOpen(modalState.isShow);
  }, [modalState.isShow]);

  return (
    <>
      <Modal size="base" active={open} custom="h-full overflow-hidden" toggler={() => closeModal()}>
        <ModalHeader toggler={() => closeModal()}>{modalState.data?.title}</ModalHeader>
        <ModalBody className="h-full flex-grow-1 overflow-auto">
          <p className="text-center mb-4">{modalState.data?.message}</p>
        </ModalBody>
        <ModalFooter>
          <div className="flex justify-center items-center space-x-4 w-full py-4">
            <Button
              type="button"
              color="primary"
              size="small"
              dataUnq="button-close-modal"
              onClick={(e: any) => closeModal()}
              isOutlined>
              <span className="text-sm">
                {modalState.data?.closeText ? modalState.data?.closeText : 'Close'}
              </span>
            </Button>
            {modalState.data?.isConfirm && (
              <Button
                type="button"
                color="primary"
                size="small"
                dataUnq="button-confirm-modal"
                onClick={modalState.data?.onConfirm}>
                <span className="text-gray-600 text-sm">
                  {modalState.data?.confirmText ? modalState.data?.confirmText : 'Confirm'}
                </span>
              </Button>
            )}
          </div>
        </ModalFooter>
      </Modal>
    </>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

const mapStateToProps = (state: any) => {
  return {
    modalState: state.modal
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalDialog);

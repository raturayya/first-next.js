import Modal from '@components/ui-elements/modal';
import ModalHeader from '@components/ui-elements/modal/modal-header';
import ModalBody from '@components/ui-elements/modal/modal-body';
import ModalFooter from '@components/ui-elements/modal/modal-footer';
import Button from '@components/ui-elements/button';
import Image from 'next/image';

import { Formik, Form, FormikProps, Field } from 'formik';
import * as Yup from 'yup';
import { onFocusChange } from '@utils/index';

const ModalPhone = ({ isOpen, handleModal, title, subtitle, handleSubmit }: any) => {
  return (
    <>
      <Modal
        size="base"
        active={isOpen}
        custom="h-full overflow-hidden"
        toggler={() => handleModal(false)}>
        <ModalHeader toggler={() => handleModal(false)}></ModalHeader>
        <ModalBody className="h-full flex-grow-1 overflow-auto">
          <Formik
            initialValues={{
              PhoneNumber: ''
            }}
            validationSchema={Yup.object({
              PhoneNumber: Yup.string().required('Phone number is required')
            })}
            enableReinitialize={true}
            onSubmit={(values, action) => {
              handleSubmit(values, action);
              action.setSubmitting(false);
              action.resetForm();
            }}>
            {({ isSubmitting, isValid, errors }: FormikProps<any>) => (
              <Form
                className="form flex flex-col justify-between align-center"
                autoComplete="false"
                data-unq="verification-code-form">
                <div className="flex-grow space-y-4">
                  <div className="w-full bg--red-200 flex justify-end rounded-xl h-[160px]">
                    <Image
                      src="/images/illustrations/phone_outlined.svg"
                      width={250}
                      height={250}
                    />
                  </div>
                  {/* <Image src="/images/illustrations/phone.svg" width={425} height={232} /> */}
                  <div className="text-center mt-4">
                    <p className="text-[20px] font-semibold">{title}</p>
                    <p className="text-gray-400">{subtitle}</p>
                  </div>

                  <div className="w-full">
                    <Field
                      type="text"
                      className="input"
                      placeholder="Your phone number"
                      name="PhoneNumber"
                      maxLength={13}
                      data-unq="verification-code-input-otpcode1"
                    />
                  </div>
                </div>

                <div className="w-full mt-[20px]">
                  <Button type="submit" color="primary" size="small" isBlock>
                    Next
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ModalPhone;

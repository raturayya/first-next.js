import Modal from '@components/ui-elements/modal';
import ModalHeader from '@components/ui-elements/modal/modal-header';
import ModalBody from '@components/ui-elements/modal/modal-body';
import ModalFooter from '@components/ui-elements/modal/modal-footer';
import Button from '@components/ui-elements/button';
import Image from 'next/image';

import { Formik, Form, FormikProps, Field } from 'formik';
import * as Yup from 'yup';
import { onFocusChange } from '@utils/index';
import Countdown from 'react-countdown';
import React from 'react';

interface IModalOtp {
  isOpen: boolean;
  handleModal: any;
  handleSubmit: any;
  handleResendCode: any;
  otp: string[];
  tick: any;
  phoneNumber: string;
}

const ModalOtp = ({
  isOpen,
  handleModal,
  handleSubmit,
  handleResendCode,
  otp,
  tick,
  phoneNumber
}: any) => {
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
              Pin: otp?.length > 0 ? otp : ['', '', '', '', '']
            }}
            validationSchema={Yup.object({
              Pin: Yup.array()
                .of(Yup.number().typeError('PIN must specify a number').required('PIN is required'))
                .required('PIN is required')
            })}
            enableReinitialize={true}
            onSubmit={(values, action) => handleSubmit(values, action)}>
            {({ isSubmitting, isValid, errors, dirty, values }: FormikProps<any>) => (
              <Form
                className="form flex flex-col justify-between align-center"
                autoComplete="false"
                data-unq="verification-code-form">
                <div className="form-verify--content flex-grow">
                  <div className="w-full bg--red-200 flex justify-center rounded-xl h-[160px]">
                    <Image
                      className="animate-[dance_2s_ease-out_infinite]"
                      src="/images/illustrations/message_outlined.svg"
                      width={160}
                      height={160}
                    />
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-[20px] font-semibold">Enter confirmation code</p>
                    <p className="text-gray-400">Enter the confirmation code we send to</p>
                    <p className="text-gray-400">{phoneNumber}</p>
                  </div>

                  <div className="verify-code mt-8">
                    <div className="form-group">
                      <div className="input--pin input-verification--code mt-8">
                        {values.Pin.map((value: any, i: number) => (
                          <React.Fragment key={i}>
                            <Field
                              type="password"
                              className="input"
                              placeholder=""
                              name={`Pin[${i}]`}
                              pattern="[0-9]*"
                              inputMode="numeric"
                              maxLength={1}
                              autoComplete="false"
                              onInput={(e: any) => {
                                if (i < values.Pin.length - 1) {
                                  onFocusChange(e);
                                }
                              }}
                              data-unq={`verification-code-input-otpcode${i + 1}`}
                            />
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                  <input type="hidden" asp-for="Otp" data-unq="verification-code-input-otp" />
                  <div className="w-full mt-4 text-center">
                    <small className="text-gray-400">
                      Having trouble? request a new OTP in
                      {tick ? (
                        <Countdown
                          date={tick.getTime()}
                          precision={1}
                          renderer={({ minutes, seconds, completed }) => {
                            if (completed) {
                              return (
                                <span
                                  className="text-sm ml-1 font-semibold cursor-pointer"
                                  data-unq="verification-code-button-resend-otp"
                                  onClick={handleResendCode}>
                                  Resend code
                                </span>
                              );
                            } else {
                              return (
                                <span className="text-sm font-semibold ml-1">
                                  {minutes}:{seconds}
                                </span>
                              );
                            }
                          }}></Countdown>
                      ) : null}
                    </small>
                  </div>
                </div>

                <div className="w-full mt-2">
                  <Button
                    type="submit"
                    color="primary"
                    size="small"
                    disabled={isSubmitting}
                    isBlock>
                    Verify
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

export default ModalOtp;

import Modal from '@components/ui-elements/modal';
import ModalHeader from '@components/ui-elements/modal/modal-header';
import ModalBody from '@components/ui-elements/modal/modal-body';
import ModalFooter from '@components/ui-elements/modal/modal-footer';
import Button from '@components/ui-elements/button';
import Image from 'next/image';

import { Formik, Form, FormikProps, Field } from 'formik';
import * as Yup from 'yup';
import { onFocusChange } from '@utils/index';

const ModalPinTransaction = ({
  isOpen,
  handleModal,
  title,
  subtitle,
  handleSubmit,
  handleForgotPassword
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
              Pin: ['', '', '', '', '', '']
            }}
            validationSchema={Yup.object({
              Pin: Yup.array()
                .of(Yup.number().typeError('PIN must specify a number').required('PIN is required'))
                .required('PIN is required')
            })}
            enableReinitialize={true}
            onSubmit={(values, action) => {
              // storageHelper.set(`${storageOTPValKey}`, values.Pin.join(''));
              // dispatch(otpVerifyExternal(phone, values.Pin.join('')));
              // setLoading(true);
              // setIsVerify(true);
              console.log('transaction pin', values);
              handleSubmit(values, action);

              action.setSubmitting(false);
              action.resetForm();
            }}>
            {({ isSubmitting, isValid, errors }: FormikProps<any>) => (
              <Form
                className="form flex flex-col justify-between align-center"
                autoComplete="false"
                data-unq="verification-code-form">
                <div className="form-verify--content flex-grow">
                  <div className="w-full bg--red-200 flex justify-center rounded-xl h-[160px]">
                    <Image
                      // className="animate-[dance_2s_ease-out_infinite]"
                      src="/images/illustrations/pin_outlined.svg"
                      width={250}
                      height={250}
                    />
                  </div>

                  <div className="text-center mt-4">
                    <p className="text-[20px] font-semibold">{title}</p>
                    <p className="text-gray-400">{subtitle}</p>
                  </div>

                  <div className="verify-code mt-8">
                    <div className="form-group">
                      <div className="input--pin input-pin--code mt-8">
                        <Field
                          type="password"
                          className="input"
                          placeholder="•"
                          name="Pin[0]"
                          pattern="[0-9]*"
                          inputMode="numeric"
                          maxLength={1}
                          autoComplete="false"
                          onInput={(e: any) => onFocusChange(e)}
                          data-unq="verification-code-input-otpcode1"
                        />
                        <Field
                          type="password"
                          className="input"
                          placeholder="•"
                          name="Pin[1]"
                          pattern="[0-9]*"
                          inputMode="numeric"
                          maxLength={1}
                          autoComplete="false"
                          onInput={(e: any) => onFocusChange(e)}
                          data-unq="verification-code-input-otpcode2"
                        />
                        <Field
                          type="password"
                          className="input"
                          placeholder="•"
                          name="Pin[2]"
                          pattern="[0-9]*"
                          inputMode="numeric"
                          maxLength={1}
                          autoComplete="false"
                          onInput={(e: any) => onFocusChange(e)}
                          data-unq="verification-code-input-otpcode3"
                        />
                        <Field
                          type="password"
                          className="input"
                          placeholder="•"
                          name="Pin[3]"
                          pattern="[0-9]*"
                          inputMode="numeric"
                          maxLength={1}
                          autoComplete="false"
                          onInput={(e: any) => onFocusChange(e)}
                          data-unq="verification-code-input-otpcode4"
                        />
                        <Field
                          type="password"
                          className="input"
                          placeholder="•"
                          name="Pin[4]"
                          pattern="[0-9]*"
                          inputMode="numeric"
                          maxLength={1}
                          autoComplete="false"
                          onInput={(e: any) => onFocusChange(e)}
                          data-unq="verification-code-input-otpcode5"
                        />
                        <Field
                          type="password"
                          className="input"
                          placeholder="•"
                          name="Pin[5]"
                          pattern="[0-9]*"
                          inputMode="numeric"
                          maxLength={1}
                          autoComplete="false"
                          // onInput={(e: any) => handleSubmit(e)}
                          data-unq="verification-code-input-otpcode6"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-full mt-[20px]">
                    <Button type="submit" color="primary" size="small" isBlock>
                      Redeem Now
                    </Button>
                  </div>

                  <div className="text-center my-[4px]">
                    <a
                      onClick={handleForgotPassword}
                      className="clr-primary cursor-pointer text-sm">
                      Forgot PIN ?
                    </a>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ModalPinTransaction;

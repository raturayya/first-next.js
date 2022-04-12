import { useField } from 'formik';
import MessageDescription from '@components/ui-elements/form/message-description';
import MessageIcon from '@components/ui-elements/form/message-icon';

const Input = ({ label, isInline, ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <div className={`form--input ${isInline ? 'form--input-inline' : null}`}>
      <label
        className={`font-medium ${isInline ? 'w-full max-w-[130px] pt-4' : null}`}
        htmlFor={props.id || props.name}>
        {label}
      </label>

      <input className="input" {...field} {...props} />

      {meta.touched && meta.error ? <MessageDescription {...meta} /> : null}

      {meta.touched && meta.error ? <MessageIcon {...meta} /> : null}
    </div>
  );
};

export default Input;

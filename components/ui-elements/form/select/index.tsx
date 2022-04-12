import { useField } from 'formik';
import MessageDescription from '@components/ui-elements/form/message-description';

const Select = ({ label, isInline, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <div className={`form--input ${isInline ? 'form--input-inline' : null}`}>
      <label
        className={`font-medium ${isInline ? 'w-full max-w-[130px] pt-4' : null}`}
        htmlFor={props.id || props.name}>
        {label}
      </label>

      <select className="input" {...field} {...props} />

      {meta.touched && meta.error ? <MessageDescription {...meta} /> : null}
    </div>
  );
};

export default Select;

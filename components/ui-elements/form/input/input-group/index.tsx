import { useField } from 'formik';
import MessageDescription from '@components/ui-elements/form/message-description';
import MessageIcon from '@components/ui-elements/form/message-icon';

const InputGroup = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);

  const labelPrefix = (prefix: any) => {
    if (prefix) return <span>{prefix}</span>;
  };

  const labelSuffix = (suffix: any) => {
    if (suffix) return { suffix };
  };

  return (
    <div className="input--group">
      <label htmlFor={props.id || props.name}>{label}</label>

      <div className="input--group-item">
        {labelPrefix(props.prefix)}

        <input className="input" {...field} {...props} />

        {labelSuffix(props.suffix)}

        {meta.touched && meta.error ? <MessageIcon {...meta} /> : null}
      </div>

      {meta.touched && meta.error ? <MessageDescription {...meta} /> : null}
    </div>
  );
};

export default InputGroup;

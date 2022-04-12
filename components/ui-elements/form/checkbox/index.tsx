import { useField } from 'formik';
import MessageDescription from '@components/ui-elements/form/message-description';

const Checkbox = ({ children, ...props }: any) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });

  return (
    <div className="form--input">
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>

      {meta.touched && meta.error ? <MessageDescription {...meta} /> : null}
    </div>
  );
};

export default Checkbox;

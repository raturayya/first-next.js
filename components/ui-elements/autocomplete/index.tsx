import { useField } from 'formik';
import MessageDescription from '@components/ui-elements/form/message-description';

import Select from 'react-select';

const customStyles = {
  container: () => ({
    position: 'relative',
    boxSizing: 'border-box',
    marginTop: 12
  }),
  control: () => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    backgroundColor: 'hsl(0, 0%, 100%)',
    borderColor: '#f0f0f0',
    borderRadius: '8px',
    borderStyle: 'solid',
    borderWidth: '1px',
    minHeight: 60,
    width: '100%',
    outline: '0 !important',
    position: 'relative',
    transition: 'all 100ms',
    boxSizing: 'border-box'
  }),
  indicatorSeparator: () => ({
    backgroundColor: 'transparent',
    marginBottom: '8px',
    marginTop: '8px',
    width: '1px',
    boxSizing: 'border-box'
  }),
  indicatorsContainer: () => ({
    display: 'none'
  }),
  placeholder: () => ({
    marginLeft: '8px',
    marginRight: '8px',
    position: 'absolute',
    color: '#CACACA'
  })
};

const AutoComplete = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="form--autocomplete space-y-2">
        <label>{label}</label>
        <Select {...props} styles={customStyles} />
      </div>
      {meta.touched && meta.error ? <MessageDescription {...meta} /> : null}
    </>
  );
};

export default AutoComplete;

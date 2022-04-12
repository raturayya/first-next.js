const MessageDescription = (props: any) => {
  if (!props.error || typeof props.error === 'object') return null;

  return (
    <div
      className={`message--description ${props.error?.toLowerCase() ? 'error' : 'success'}`}
      {...props}>
      {props.error}
    </div>
  );
};

export default MessageDescription;

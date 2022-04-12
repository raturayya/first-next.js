const MessageIcon = (props: any) => {
  return (
    <div className={`message--icon ${props.error ? 'error' : 'success'}`}>
      <i>{props.error ? 'error' : 'check_circle'}</i>
    </div>
  );
};

export default MessageIcon;

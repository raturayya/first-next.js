interface ITableStatusComponent {
  children?: any;
  statusColor: string;
}

type TypeColorStatus = {
  [key: string]: string;
};

const TableStatus = (props: ITableStatusComponent) => {
  const { children, statusColor } = props;
  const color: TypeColorStatus = {
    PENDING: 'bg-amber-500',
    APPROVED: 'bg-green-500',
    REJECTED: 'bg-red-500',
    'NEED VERIFICATION': 'bg-amber-500'
  };

  return (
    <div className="flex flex-row items-center">
      <div className={`w-[8px] h-[8px] mx-[8px] rounded ${color[statusColor]}`}></div>
      <p className="tt-capitalize">{children}</p>
    </div>
  );
};
export default TableStatus;

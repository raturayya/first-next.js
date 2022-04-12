interface IRowCountTable {
  title: string;
  rows: any[];
}

const RowCountTable = ({ title, rows }: IRowCountTable) => {
  const count = rows?.length > 0 ? rows[0].totalRow : 0;

  return (
    <div className="flex flex-row items-center space-x-6">
      <h4 className="h4 font-semibold">{title}</h4>
      <span>{count} data ditemukan</span>
    </div>
  );
};

export default RowCountTable;

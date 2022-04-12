import Button from '@components/ui-elements/button';

interface IExportTable {
  isExport: boolean;
  handleExportMembership: any;
  handleExportTada: any;
}

const ExportTable = ({ isExport, handleExportMembership, handleExportTada }: IExportTable) => {
  if (!isExport) return null;

  return (
    <div className="flex justify-end space-x-4">
      <Button
        type="button"
        onClick={() => {
          if (handleExportMembership) handleExportMembership();
        }}
        dataUnq="dashboard-button-exportMember">
        <span className="text-sm">Export for Membership</span>
      </Button>
      <Button
        type="button"
        onClick={() => {
          if (handleExportTada) handleExportTada();
        }}
        dataUnq="dashboard-button-exportTADA">
        <span className="text-sm">Export for TADA</span>
      </Button>
    </div>
  );
};

export default ExportTable;

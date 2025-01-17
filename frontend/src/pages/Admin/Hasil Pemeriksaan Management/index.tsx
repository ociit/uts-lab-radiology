import Breadcrumb from "../../../components/Breadcrumb";
import AdminTable from "../../../components/Table/AdminTable";

const HasilManagement = () => {
  return (
    <>
      <Breadcrumb pageName="Hasil Pemeriksaan" />

      <div className="flex flex-col gap-10">
        <AdminTable />
      </div>
    </>
  );
};

export default HasilManagement;

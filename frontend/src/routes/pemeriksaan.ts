import { lazy } from "react";

const PemeriksaanManagement = lazy(
  () => import("../pages/Admin/Pemeriksaan Management")
);
const FormCreatePemeriksaan = lazy(
  () => import("../pages/Admin/Pemeriksaan Management/FormCreatePemeriksaan")
);
const FormEditPemeriksaan = lazy(
  () => import("../pages/Admin/Pemeriksaan Management/FormEditPemeriksaan")
);

const coreRoutes = [
  {
    path: "/admin/pemeriksaan-management",
    title: "Pemeriksaan Management",
    component: PemeriksaanManagement,
  },
  {
    path: "/admin/pemeriksaan-management/create",
    title: "Create Pemeriksaan",
    component: FormCreatePemeriksaan,
  },
  {
    path: "/admin/pemeriksaan-management/edit/:id",
    title: "Edit Pemeriksaan",
    component: FormEditPemeriksaan,
  },
];

const PemeriksaanRoutes = [...coreRoutes];
export default PemeriksaanRoutes;

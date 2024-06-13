import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout";
import Jabatan from "../pages/Jabatan";
import JabatanList from "../components/JabatanList";
import JabatanForm from "../components/JabatanForm";

import Karyawan from "../pages/Karyawan";
import KaryawanForm from "../components/KaryawanForm";

import Departement from "../pages/Departement";
import DepartementList from "../components/DepartementList";
import DepartementForm from "../components/DepartementForm";

const setupRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Karyawan />,
        },
        {
          path: "karyawan/add",
          element: <KaryawanForm />,
        },
        {
          path: "karyawan/:id/edit",
          element: <KaryawanForm />,
        },
        {
          path: "jabatan",
          element: <Jabatan />,
          children: [
            {
              index: true,
              element: <JabatanList />,
            },
            {
              path: "add",
              element: <JabatanForm />,
            },
            {
              path: ":id/edit",
              element: <JabatanForm />,
            },
          ],
        },
        {
          path: "departement",
          element: <Departement />,
          children: [
            {
              index: true,
              element: <DepartementList />,
            },
            {
              path: "add",
              element: <DepartementForm />,
            },
            {
              path: ":id/edit",
              element: <DepartementForm />,
            },
          ],
        },
      ],
    },
  ]);

export default setupRouter;

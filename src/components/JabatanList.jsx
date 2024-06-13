import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";

import JabatanItem from "./JabatanItem";
import { useGetAllJabatan } from "../services/jabatanService";

const JabatanList = () => {
  const { dataJabatan, isLoading } = useGetAllJabatan();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="relative">
      <h1 className="text-2xl font-bold py-5 px-2">Daftar Jabatan</h1>
      <Link
        to="/jabatan/add"
        className="bg-[#5A72A0] w-44 text-sm text-[#F1F1F1] font-bold uppercase flex items-center gap-3 px-6 py-2 rounded-md my-3"
      >
        <FaPlus />
        <span>Add Jabatan</span>
      </Link>
      <table className="w-1/2 text-sm text-left rtl:text-right font-semibold ">
        <thead className="text-xs text-[#F1F1F1] uppercase bg-[#5A72A0] ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nama Jabatan
            </th>
            <th scope="col" className="px-6 py-3">
              Nama Departemen
            </th>
            <th scope="col" className="px-6 py-3">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {dataJabatan?.map((item) => (
            <JabatanItem key={item.id} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JabatanList;

import { Link } from "react-router-dom";

import { FaPlus } from "react-icons/fa6";
import KaryawanList from "../components/KaryawanList";

const Karyawan = () => {
  return (
    <>
      <h1 className="text-2xl font-bold py-5 px-2">Daftar Karyawan</h1>
      <Link
        to="/karyawan/add"
        className="bg-[#5A72A0] w-44 text-sm text-[#F1F1F1] font-bold uppercase flex items-center gap-3 px-3 py-2 rounded-md my-3"
      >
        <FaPlus />
        <span>Add Karyawan</span>
      </Link>
      <KaryawanList />
    </>
  );
};

export default Karyawan;

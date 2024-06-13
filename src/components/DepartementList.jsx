import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";

import DepartementItem from "./DepartementItem";
import { useGetAllDepartement } from "../services/departementService";

const DepartementList = () => {
  const { dataDepartement, isLoading } = useGetAllDepartement();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="relative">
      <h1 className="text-2xl font-bold py-5 px-2">Daftar Departement</h1>
      <Link
        to="/departement/add"
        className="bg-[#5A72A0] w-52 text-sm text-[#F1F1F1] font-bold uppercase flex items-center gap-3 px-5 py-2 rounded-md my-3"
      >
        <FaPlus />
        <span>Add Departement</span>
      </Link>
      <table className="w-[40%] text-sm text-left rtl:text-right font-semibold ">
        <thead className="text-xs text-[#F1F1F1] uppercase bg-[#5A72A0] ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nama Departement
            </th>
            <th scope="col" className="px-6 py-3">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {dataDepartement?.map((item) => (
            <DepartementItem key={item.id} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DepartementList;

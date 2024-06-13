import KaryawanItem from "./KaryawanItem";
import { useGetAllKaryawan } from "../services/karyawanService";

const KaryawanList = () => {
  const { dataKaryawan, isLoading } = useGetAllKaryawan();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right font-semibold">
        <thead className="text-xs text-[#F1F1F1] uppercase bg-[#5A72A0]">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Jabatan
            </th>
            <th scope="col" className="px-6 py-3">
              Age
            </th>
            <th scope="col" className="px-6 py-3">
              Gender
            </th>
            <th scope="col" className="px-6 py-3">
              Tanggal Lahir
            </th>
            <th scope="col" className="px-6 py-3">
              Alamat
            </th>
            <th scope="col" className="px-6 py-3">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {dataKaryawan?.map((item) => (
            <KaryawanItem key={item.id} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KaryawanList;

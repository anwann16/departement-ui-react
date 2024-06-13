import { useNavigate } from "react-router-dom";
import { HiPencilAlt, HiOutlineTrash } from "react-icons/hi";

import { useDeleteKaryawan } from "../services/karyawanService";

const KaryawanItem = ({
  id,
  name,
  Jabatan,
  age,
  gender,
  tanggal_lahir,
  alamat,
}) => {
  const navigate = useNavigate();
  const { deleteKaryawan } = useDeleteKaryawan();

  const handleDelete = () => {
    if (confirm("Apakah anda yakin ingin hapus ?")) {
      deleteKaryawan(id);
    } else {
      return;
    }
  };

  return (
    <tr>
      <td className="px-6 py-3">{name}</td>
      <td className="px-6 py-3">{Jabatan?.nama_jabatan}</td>
      <td className="px-6 py-3">{age}</td>
      <td className="px-6 py-3">{gender}</td>
      <td className="px-6 py-3">{tanggal_lahir}</td>
      <td className="px-6 py-3">{alamat}</td>
      <td className="flex items-center gap-2 px-4 py-3">
        <HiPencilAlt
          size={20}
          onClick={() => navigate(`/karyawan/${id}/edit`)}
        />
        <HiOutlineTrash size={20} onClick={handleDelete} />
      </td>
    </tr>
  );
};

export default KaryawanItem;

import { useNavigate } from "react-router-dom";
import { HiOutlineTrash, HiPencilAlt } from "react-icons/hi";

import { useDeleteJabatan } from "../services/jabatanService";

const JabatanItem = ({ id, nama_jabatan, Departement }) => {
  const navigate = useNavigate();
  const { deleteJabatan } = useDeleteJabatan();

  const handleDelete = () => {
    if (confirm("Apakah anda yakin ingin hapus ?")) {
      deleteJabatan(id);
    } else {
      return;
    }
  };

  return (
    <tr>
      <td className="px-6 py-3">{nama_jabatan}</td>
      <td className="px-6 py-3">{Departement?.nama_departement}</td>
      <td className="flex items-center gap-2 px-4 py-3">
        <HiPencilAlt
          size={20}
          onClick={() => navigate(`/jabatan/${id}/edit`)}
        />
        <HiOutlineTrash size={20} onClick={handleDelete} />
      </td>
    </tr>
  );
};

export default JabatanItem;

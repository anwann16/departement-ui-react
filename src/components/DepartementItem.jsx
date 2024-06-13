import { useNavigate } from "react-router-dom";
import { HiOutlineTrash, HiPencilAlt } from "react-icons/hi";

import { useDeleteDepartement } from "../services/departementService";

const DepartementItem = ({ id, nama_departement }) => {
  const navigate = useNavigate();
  const { deleteDepartement } = useDeleteDepartement();

  const handleDelete = () => {
    if (confirm("Apakah anda yakin ingin hapus ?")) {
      deleteDepartement(id);
    } else {
      return;
    }
  };

  return (
    <tr>
      <td className="px-6 py-3">{nama_departement}</td>
      <td className="flex items-center gap-2 px-4 py-3">
        <HiPencilAlt
          size={20}
          onClick={() => navigate(`/departement/${id}/edit`)}
        />
        <HiOutlineTrash size={20} onClick={handleDelete} />
      </td>
    </tr>
  );
};

export default DepartementItem;

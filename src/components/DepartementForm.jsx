import { useForm } from "react-hook-form";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";

import {
  getSingleDepartementApi,
  useCreateDepartement,
  useUpdateDepartement,
} from "../services/departementService";

const DepartementForm = () => {
  const { id } = useParams();
  const { createDepartement } = useCreateDepartement();
  const { updateDepartement } = useUpdateDepartement();

  const form = useForm({
    defaultValues: async () => {
      if (id) {
        const data = await getSingleDepartementApi(id);
        return {
          nama_departement: data.nama_departement,
        };
      }
    },
  });
  const { register, handleSubmit } = form;

  const submitForm = (data) => {
    if (id) {
      updateDepartement({ id, ...data });
    } else {
      createDepartement(data);
    }
  };

  return (
    <div>
      <Link
        to="/departement"
        className="justify-start py-2 text-base font-semibold flex items-center rounded-md"
      >
        <IoIosArrowBack />
        <span>Kembali</span>
      </Link>
      <form
        className="flex flex-col gap-1 border w-[30%] px-4 py-2 shadow-md rounded-md"
        onSubmit={handleSubmit(submitForm)}
      >
        <div className="flex flex-col gap-1 w-full py-2">
          <label htmlFor="nama_departement">Nama Departement</label>
          <input
            type="text"
            id="nama_departement"
            className="outline-none border px-2 py-1 rounded-md"
            {...register("nama_departement")}
          />
        </div>

        <button className="bg-[#5A72A0] py-2 text-[#F1F1F1] font-semibold rounded-md my-2">
          {id ? "Update" : "Tambah"}
        </button>
      </form>
    </div>
  );
};

export default DepartementForm;

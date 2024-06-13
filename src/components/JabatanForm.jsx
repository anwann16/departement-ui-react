import { useForm } from "react-hook-form";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";

import {
  getSingleJabatanApi,
  useCreateJabatan,
  useUpdateJabatan,
} from "../services/jabatanService";
import { useGetAllDepartement } from "../services/departementService";

const JabatanForm = () => {
  const { dataDepartement } = useGetAllDepartement();
  const { createJabatan } = useCreateJabatan();
  const { updateJabatan } = useUpdateJabatan();
  const { id } = useParams();

  const form = useForm({
    defaultValues: async () => {
      if (id) {
        const data = await getSingleJabatanApi(id);
        return {
          nama_jabatan: data.nama_jabatan,
          id_departement: data.id_departement,
        };
      }
    },
  });
  const { register, handleSubmit } = form;

  const submitForm = (data) => {
    if (id) {
      updateJabatan({ id, ...data });
    } else {
      createJabatan(data);
    }
  };
  return (
    <div>
      <Link
        to="/"
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
          <label htmlFor="nama_jabatan">Nama Jabatan</label>
          <input
            type="text"
            id="nama_jabatan"
            className="outline-none border px-2 py-1 rounded-md"
            {...register("nama_jabatan")}
          />
        </div>
        <div className="flex flex-col gap-1 w-full py-2">
          <label htmlFor="id_departement">Nama Departement</label>
          <select
            id="id_departement"
            className="px-2 py-2 outline-none border rounded-md"
            {...register("id_departement")}
          >
            <option>-- Pilih Departement --</option>
            {dataDepartement?.map((departement, index) => (
              <option value={departement?.id} key={index}>
                {departement?.nama_departement}
              </option>
            ))}
          </select>
        </div>

        <button className="bg-[#5A72A0] py-2 text-[#F1F1F1] font-semibold rounded-md my-2">
          {id ? "Update" : "Tambah"}
        </button>
      </form>
    </div>
  );
};

export default JabatanForm;

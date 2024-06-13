import { useForm } from "react-hook-form";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate, useParams } from "react-router-dom";

import {
  getSingleKaryawanApi,
  useCreateKaryawan,
  useUpdateKaryawan,
} from "../services/karyawanService";
import { useGetAllJabatan } from "../services/jabatanService";

const KaryawanForm = () => {
  const { dataJabatan, isLoading } = useGetAllJabatan();
  const { createKaryawan } = useCreateKaryawan();
  const { updateKaryawan } = useUpdateKaryawan();
  const { id } = useParams();

  const navigate = useNavigate();

  const form = useForm({
    defaultValues: async () => {
      if (id) {
        const data = await getSingleKaryawanApi(id);
        console.log(data);
        return {
          name: data.name,
          id_jabatan: data.id_jabatan,
          age: data.age,
          gender: data.gender,
          tanggal_lahir: data.tanggal_lahir,
          alamat: data.alamat,
        };
      }
    },
  });
  const { register, handleSubmit } = form;

  const submitForm = (data) => {
    if (id) {
      updateKaryawan({ id, ...data });
      navigate("/");
    } else {
      createKaryawan(data);
    }
  };

  if (isLoading) return <p>loading...</p>;

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
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="outline-none border px-2 py-1 rounded-md"
            {...register("name")}
          />
        </div>
        <div className="flex flex-col gap-1 w-full py-2">
          <label htmlFor="id_jabatan">Jabatan</label>
          <select
            id="id_jabatan"
            className="px-2 py-2 outline-none border rounded-md"
            {...register("id_jabatan")}
          >
            <option value="">-- Pilih Jabatan --</option>
            {dataJabatan?.map((jabatan, index) => (
              <option value={jabatan?.id} key={index}>
                {jabatan?.nama_jabatan}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1 w-full py-2">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            className="outline-none border px-2 py-1 rounded-md"
            {...register("age")}
          />
        </div>

        <div className="">
          <p>Gender : </p>
          <div className="flex items-center gap-3">
            <input
              type="radio"
              id="gender"
              value="L"
              name="radioGroup"
              {...register("gender")}
            />
            <label>Laki - Laki</label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="radio"
              id="gender"
              value="P"
              name="radioGroup"
              {...register("gender")}
            />
            <label>Perempuan</label>
          </div>
        </div>

        <div className="flex flex-col gap-1 w-full py-2">
          <label htmlFor="tanggal_lahir">Tanggal Lahir</label>
          <input
            type="date"
            id="tanggal_lahir"
            className="outline-none border px-2 py-1 rounded-md"
            {...register("tanggal_lahir")}
          />
        </div>

        <div className="flex flex-col gap-1 w-full py-2">
          <label htmlFor="alamat">Alamat</label>
          <input
            type="text"
            id="alamat"
            className="outline-none border px-2 py-1 rounded-md"
            {...register("alamat")}
          />
        </div>

        <button className="bg-[#5A72A0] py-2 text-[#F1F1F1] font-semibold rounded-md my-2">
          {id ? "Update" : "Tambah"}
        </button>
      </form>
    </div>
  );
};

export default KaryawanForm;

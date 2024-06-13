import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { API_URL } from "../utils/constant";

const getKaryawanApi = async () => {
  const { data } = await axios.get(`${API_URL}/karyawan`);

  return data.payload;
};

export const getSingleKaryawanApi = async (id) => {
  const { data } = await axios.get(`${API_URL}/karyawan/${id}`);

  return data.payload;
};

const createKaryawanApi = async (data) => {
  await axios.post(`${API_URL}/karyawan`, data);
};

const updateKaryawanApi = async (id, newData) => {
  await axios.put(`${API_URL}/karyawan/${id}`, newData);
};

const deleteKaryawanApi = async (id) => {
  await axios.delete(`${API_URL}/karyawan/${id}`);
};

export const useGetAllKaryawan = () => {
  const { data: dataKaryawan, isLoading } = useQuery({
    queryKey: ["karyawan"],
    queryFn: getKaryawanApi,
  });

  return { dataKaryawan, isLoading };
};

export const useCreateKaryawan = () => {
  const navigate = useNavigate();

  const { mutate: createKaryawan, isPending } = useMutation({
    mutationFn: createKaryawanApi,
    onSuccess: () => {
      toast.success("tambah karyawan sukses");
      navigate("/");
    },
  });

  return { createKaryawan, isPending };
};

export const useUpdateKaryawan = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: updateKaryawan, isPending } = useMutation({
    mutationFn: (data) => updateKaryawanApi(data.id, data),
    onSuccess: () => {
      toast.success("update karyawan sukses");
      navigate("/");

      queryClient.invalidateQueries({
        queryKey: ["karyawan"],
      });
    },
  });

  return { updateKaryawan, isPending };
};

export const useDeleteKaryawan = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteKaryawan } = useMutation({
    mutationFn: deleteKaryawanApi,
    onSuccess: () => {
      toast.success("hapus karyawan sukses");

      queryClient.invalidateQueries({
        queryKey: ["karyawan"],
      });
    },
  });

  return { deleteKaryawan };
};

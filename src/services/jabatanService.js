import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { API_URL } from "../utils/constant";

const getJabatanApi = async () => {
  const { data } = await axios.get(`${API_URL}/jabatan`);

  return data.payload;
};

export const getSingleJabatanApi = async (id) => {
  const { data } = await axios.get(`${API_URL}/jabatan/${id}`);

  return data.payload;
};

const updateJabatanApi = async (id, data) => {
  await axios.put(`${API_URL}/jabatan/${id}`, data);
};

const createJabatanApi = async (data) => {
  await axios.post(`${API_URL}/jabatan`, data);
};

const deleteJabatanApi = async (id) => {
  await axios.delete(`${API_URL}/jabatan/${id}`);
};

export const useGetAllJabatan = () => {
  const { data: dataJabatan, isLoading } = useQuery({
    queryKey: ["jabatan"],
    queryFn: getJabatanApi,
  });

  return { dataJabatan, isLoading };
};

export const useUpdateJabatan = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: updateJabatan } = useMutation({
    mutationFn: (data) => updateJabatanApi(data.id, data),
    onSuccess: () => {
      toast.success("update jabatan sukses");
      navigate("/jabatan");

      queryClient.invalidateQueries({
        queryKey: ["jabatan"],
      });
    },
  });

  return { updateJabatan };
};

export const useCreateJabatan = () => {
  const navigate = useNavigate();
  const { mutate: createJabatan, isPending } = useMutation({
    mutationFn: createJabatanApi,
    onSuccess: () => {
      toast.success("tambah jabatan sukses");
      navigate("/jabatan");
    },
  });

  return { createJabatan, isPending };
};

export const useDeleteJabatan = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteJabatan } = useMutation({
    mutationFn: deleteJabatanApi,
    onSuccess: () => {
      toast.success("hapus jabatan sukses");

      queryClient.invalidateQueries({
        queryKey: ["jabatan"],
      });
    },
  });

  return { deleteJabatan };
};

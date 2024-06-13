import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { API_URL } from "../utils/constant";

const getDepartementApi = async () => {
  const { data } = await axios.get(`${API_URL}/departements`);

  return data.payload;
};

export const getSingleDepartementApi = async (id) => {
  const { data } = await axios.get(`${API_URL}/departement/${id}`);

  return data.payload;
};

const createDepartementApi = async (data) => {
  await axios.post(`${API_URL}/departement`, data);
};

const updateDepartementApi = async (id, data) => {
  await axios.put(`${API_URL}/departement/${id}`, data);
};

const deleteDepartementApi = async (id) => {
  await axios.delete(`${API_URL}/departement/${id}`);
};

export const useGetAllDepartement = () => {
  const { data: dataDepartement, isLoading } = useQuery({
    queryKey: ["departement"],
    queryFn: getDepartementApi,
  });

  return { dataDepartement, isLoading };
};

export const useCreateDepartement = () => {
  const navigate = useNavigate();
  const { mutate: createDepartement } = useMutation({
    mutationFn: createDepartementApi,
    onSuccess: () => {
      toast.success("tambah departement sukses");
      navigate("/departement");
    },
  });

  return { createDepartement };
};

export const useUpdateDepartement = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: updateDepartement } = useMutation({
    mutationFn: (data) => updateDepartementApi(data.id, data),
    onSuccess: () => {
      toast.success("update departement sukses");
      navigate("/departement");

      queryClient.invalidateQueries({
        queryKey: ["departement"],
      });
    },
  });

  return { updateDepartement };
};

export const useDeleteDepartement = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteDepartement } = useMutation({
    mutationFn: deleteDepartementApi,
    onSuccess: () => {
      toast.success("hapus departement sukses");

      queryClient.invalidateQueries({
        queryKey: ["departement"],
      });
    },
  });

  return { deleteDepartement };
};

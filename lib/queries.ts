import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY_GET_CLASS } from "./constants";
import axios from "axios";
import { ClassListData } from "./types";

axios.defaults.baseURL = "http://localhost:3001";

export const useGetClassData = () => {
  return useQuery({
    queryKey: [QUERY_KEY_GET_CLASS],
    queryFn: () => getClassData(),
    staleTime: Infinity,
  });
};

/**
 *
 */
const getClassData = async (): Promise<ClassListData> => {
  try {
    const response = await axios.get<ClassListData>("/class/");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";

import { QUERY_KEY_GET_CLASS } from "./constants";
import { ClassData, ClassListData } from "./types";

axios.defaults.baseURL = "http://localhost:3001";

/**
 * react query hook - 강의 목록 조회
 */
export const useGetClassData = () => {
  return useQuery({
    queryKey: [QUERY_KEY_GET_CLASS],
    queryFn: () => getClassData(),
    staleTime: Infinity,
  });
};

export const useAddClassData = () => {
  const router = useRouter();

  return useMutation({
    mutationKey: [],
    mutationFn: (param: ClassData) => addClassData(param),
    onSuccess: () => {
      router.push("/class");
    },
    onError: (error) => {
      console.error(error);
      alert("에러가 발생했습니다. 다시 시도해주세요.");
    },
  });
};

/**
 * 강의 목록 조회 요청
 */
const getClassData = async (): Promise<ClassListData> => {
  try {
    const response = await axios.get<ClassListData>("/class/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * 강의 목록 추가 요청
 * */
const addClassData = async (data: ClassData) => {
  try {
    await axios.post("/class/", data);
  } catch (error) {
    console.error("강의 등록 실패:", error);
  }
};

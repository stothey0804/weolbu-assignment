"use client";

import Cookies from "js-cookie";

import { DATA_KEY_USER_TYPE, USER_INSTRUCTOR } from "@/lib/constants";
import { ApplyBtn } from "./ApplyBtn";
import { AddBtn } from "./AddBtn";
import { SelectedClass } from "@/lib/types";
import { useIncreaseApplicant } from "@/lib/queries";

interface ButtonProps {
  selectedClassList: SelectedClass[];
  onClearSelection?: () => void;
}

/**
 * 강의목록 버튼 영역
 * - 강의신청
 * - (강사) 강의등록
 * */
export function Buttons({
  selectedClassList = [],
  onClearSelection,
}: ButtonProps) {
  const userType = Cookies.get(DATA_KEY_USER_TYPE);

  const { mutate } = useIncreaseApplicant();

  const handleApplyClick = () => {
    if (selectedClassList.length === 0) {
      alert("신청할 강의를 선택해주세요.");
      return;
    }

    const updateIds = selectedClassList.map((item) => item.id);
    mutate(updateIds, {
      onSuccess: () => {
        // 체크박스 선택 초기화
        onClearSelection?.();
      },
    });
  };

  return (
    <div className="grid gap-2">
      <ApplyBtn onClick={handleApplyClick} />
      {userType === USER_INSTRUCTOR && <AddBtn />}
    </div>
  );
}

"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { Field, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  INPUT_CLASS_CAPACITY_ID,
  INPUT_CLASS_Title_ID,
  INPUT_CLASS_PRICE_ID,
  DATA_KEY_USER_NAME,
} from "@/lib/constants";

/**
 * 강의 등록을 위한 Form 클라이언트 컴포넌트
 */
export function AddClassForm() {
  const router = useRouter();

  /**
   * 강의등록 핸들러
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      title: formData.get("title"),
      capacity: formData.get("capacity"),
      sellingPrice: formData.get("sellingPrice"),
    };

    const userName = Cookies.get(DATA_KEY_USER_NAME);

    console.log(data, userName);
    // TODO: json-server 데이터 등록
    // router.push("/class");
  };

  return (
    <Card className="p-4">
      <form onSubmit={handleSubmit}>
        <FieldSet>
          <Field>
            <FieldLabel htmlFor={INPUT_CLASS_Title_ID}>강의명</FieldLabel>
            <Input
              id={INPUT_CLASS_Title_ID}
              name="title"
              placeholder="너나위의 내집마련 기초반"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor={INPUT_CLASS_CAPACITY_ID}>수강인원</FieldLabel>
            <Input
              id={INPUT_CLASS_CAPACITY_ID}
              name="capacity"
              type="number"
              placeholder="10"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor={INPUT_CLASS_PRICE_ID}>가격</FieldLabel>
            <Input
              id={INPUT_CLASS_PRICE_ID}
              name="sellingPrice"
              type="number"
              placeholder="200,000"
              required
            />
          </Field>
          <Field>
            <Button type="submit">강의등록</Button>
          </Field>
        </FieldSet>
      </form>
    </Card>
  );
}

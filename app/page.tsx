import { Card } from "@/components/ui/card";
import { Title } from "./components";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  INPUT_EMAIL_ID,
  INPUT_NAME_ID,
  INPUT_PASSWORD_ID,
  INPUT_PHONE_ID,
  INPUT_USER_TYPE_ID,
  INPUT_USER_TYPE_INSTRUCTOR_ID,
  INPUT_USER_TYPE_LEARNER_ID,
  USER_INSTRUCTOR,
  USER_LEARNER,
} from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Title>회원가입</Title>
      <main>
        <Card className="p-4">
          <form>
            <FieldSet>
              <Field>
                <FieldLabel htmlFor={INPUT_NAME_ID}>이름</FieldLabel>
                <Input id={INPUT_NAME_ID} placeholder="홍길동" required></Input>
              </Field>
              <Field>
                <FieldLabel htmlFor={INPUT_EMAIL_ID}>이메일</FieldLabel>
                <Input
                  id={INPUT_EMAIL_ID}
                  placeholder="hong@weolbu.com"
                  required
                ></Input>
              </Field>
              <Field>
                <FieldLabel htmlFor={INPUT_PHONE_ID}>휴대폰 번호</FieldLabel>
                <Input
                  id={INPUT_PHONE_ID}
                  type="phone"
                  placeholder="010-1234-5678"
                  required
                ></Input>
              </Field>
              <Field>
                <FieldLabel htmlFor={INPUT_PASSWORD_ID}>비밀번호</FieldLabel>
                <Input
                  id={INPUT_PASSWORD_ID}
                  type="password"
                  placeholder="••••••••"
                  required
                ></Input>
              </Field>
              <Field>
                <FieldLabel>회원유형</FieldLabel>
                <RadioGroup
                  id={INPUT_USER_TYPE_ID}
                  defaultValue={USER_LEARNER}
                  className="flex"
                >
                  <Field orientation="horizontal">
                    <RadioGroupItem
                      value={USER_LEARNER}
                      id={INPUT_USER_TYPE_LEARNER_ID}
                    ></RadioGroupItem>
                    <FieldLabel htmlFor={INPUT_USER_TYPE_LEARNER_ID}>
                      수강생
                    </FieldLabel>
                  </Field>
                  <Field orientation="horizontal">
                    <RadioGroupItem
                      value={USER_INSTRUCTOR}
                      id={INPUT_USER_TYPE_INSTRUCTOR_ID}
                    ></RadioGroupItem>
                    <FieldLabel htmlFor={INPUT_USER_TYPE_INSTRUCTOR_ID}>
                      강사
                    </FieldLabel>
                  </Field>
                </RadioGroup>
              </Field>
              <Field>
                <Button type="submit">회원가입</Button>
              </Field>
            </FieldSet>
          </form>
        </Card>
      </main>
    </>
  );
}

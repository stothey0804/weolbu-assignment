import { Title } from "./components";
import { SignupForm } from "./components/SignupForm";

/**
 * root 페이지 - 회원가입
 */
export default function Home() {
  return (
    <>
      <Title>회원가입</Title>
      <main>
        <SignupForm />
      </main>
    </>
  );
}

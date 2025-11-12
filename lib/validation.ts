/**
 * 비밀번호 유효성 검사
 * - 6자 이상 10자 이하
 * - 영문 소문자, 대문자, 숫자 중 최소 두 가지 이상 조합
 */
export const isAvailablePassword = (password: string): boolean => {
  // 6자 이상 10자 이하
  if (password.length < 6 || password.length > 10) {
    return false;
  }

  // 영문 소문자, 대문자, 숫자 최소 2가지 이상 조합 체크
  const hasLowerCase = /[a-z]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  const combinationCount = [hasLowerCase, hasUpperCase, hasNumber].filter(
    (result) => result === true
  ).length;

  return combinationCount >= 2;
};
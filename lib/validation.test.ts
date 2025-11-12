import { isAvailablePassword } from "./validation";

describe("isAvailablePassword", () => {
  describe("유효한 비밀번호", () => {
    it("소문자 + 숫자 조합 6자 통과", () => {
      expect(isAvailablePassword("abc123")).toBe(true);
    });

    it("대문자 + 숫자 조합 6자 통과", () => {
      expect(isAvailablePassword("ABC123")).toBe(true);
    });

    it("소문자 + 대문자 조합 6자 통과", () => {
      expect(isAvailablePassword("abcABC")).toBe(true);
    });
  });

  describe("유효하지 않은 비밀번호", () => {
    it("6자 미만 실패", () => {
      expect(isAvailablePassword("abc")).toBe(false);
    });

    it("10자 초과 실패", () => {
      expect(isAvailablePassword("abcdefghijk")).toBe(false);
    });

    it("소문자만 있는 경우 실패", () => {
      expect(isAvailablePassword("abcdef")).toBe(false);
    });

    it("숫자만만 있는 경우 실패", () => {
      expect(isAvailablePassword("123456")).toBe(false);
    });

    it("대문자만 있는 경우 실패", () => {
      expect(isAvailablePassword("AABBCC")).toBe(false);
    });
  });
});

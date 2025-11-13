import { Button } from "@/components/ui/button";

interface ApplyBtnProps {
  onClick?: () => void;
}

/**
 * 모든회원 - 수강신청 버튼
 */
export function ApplyBtn({ onClick }: ApplyBtnProps) {
  return <Button onClick={onClick}>수강신청</Button>;
}

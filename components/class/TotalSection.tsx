import { formatPrice } from "@/lib/utils";

interface TotalSectionProps {
  totalAmount: number;
  totalSellingPrice: number;
}

/** 총 금액 계산 영역 */
export function TotalSection({
  totalAmount = 0,
  totalSellingPrice = 0,
}: TotalSectionProps) {
  return (
    <section className="flex justify-between">
      <p>{totalAmount}개</p>
      <p className="font-bold">총 {formatPrice(totalSellingPrice)}원</p>
    </section>
  );
}

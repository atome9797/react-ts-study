/**
 * Part 1 종합 실습: 견적 계산 모듈
 * 로드맵 문서: Part 1 > Part 1 종합 실습
 *
 * 아래 함수들의 TODO를 채운다. 다 채우면 `npm run quote`의 확인 항목이 모두 ✅가 된다.
 * 이 모듈은 Part 3의 견적 계산기(P4)와 견적 관리 앱(P6)에서 그대로 다시 쓴다.
 */

export type QuoteStatus = "draft" | "sent" | "approved" | "rejected";

export type QuoteItem = {
  id: string;
  name: string;
  unitPrice: number;
  quantity: number;
  taxable: boolean;
};

export type Quote = {
  id: string;
  title: string;
  customerName: string;
  items: QuoteItem[];
  status: QuoteStatus;
  issuedAt: Date;
};

export const TAX_RATE = 0.1;

/** 항목 금액 = 단가 × 수량 */
export function calcLineAmount(item: QuoteItem): number {
  // TODO
  return 0;
}

/** 소계 = 모든 항목 금액의 합 */
export function calcSubtotal(items: QuoteItem[]): number {
  // TODO: reduce와 calcLineAmount를 쓴다
  return 0;
}

/** 소비세 = 과세 항목(taxable: true) 금액 합계 × 세율, 1엔 미만 버림 */
export function calcTax(items: QuoteItem[], rate: number = TAX_RATE): number {
  // TODO: filter → reduce → Math.floor
  return 0;
}

/** 합계 = 소계 + 소비세 */
export function calcTotal(items: QuoteItem[]): number {
  // TODO: calcSubtotal과 calcTax를 쓴다
  return 0;
}

/** 엔화 표시: 113000 → "¥113,000" */
export function formatYen(amount: number): string {
  // TODO: toLocaleString("ja-JP")
  return String(amount);
}

/** 상태 라벨: "draft" → "작성 중", "sent" → "발송됨", "approved" → "승인", "rejected" → "반려" */
export function statusLabel(status: QuoteStatus): string {
  // TODO: switch로 바꾸고 default에서 never 검사를 넣는다 (Step 6)
  return status;
}

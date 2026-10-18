// 견적 계산 모듈 자동 확인: npm run quote
import { calcLineAmount, calcSubtotal, calcTax, calcTotal, formatYen, statusLabel } from "./quote";
import type { QuoteItem } from "./quote";

const items: QuoteItem[] = [
  { id: "1", name: "웹 디자인", unitPrice: 50000, quantity: 2, taxable: true },
  { id: "2", name: "교통비", unitPrice: 3000, quantity: 1, taxable: false },
];

const checks: [name: string, passed: boolean][] = [
  ["calcLineAmount: 50000 × 2 = 100000", calcLineAmount(items[0]) === 100000],
  ["calcSubtotal: 100000 + 3000 = 103000", calcSubtotal(items) === 103000],
  ["calcTax: 과세 항목 100000의 10% = 10000", calcTax(items) === 10000],
  ["calcTotal: 103000 + 10000 = 113000", calcTotal(items) === 113000],
  ['formatYen: 113000 → "¥113,000"', formatYen(113000) === "¥113,000"],
  ['statusLabel: "sent" → "발송됨"', statusLabel("sent") === "발송됨"],
];

for (const [name, passed] of checks) {
  console.log(`${passed ? "✅" : "❌"} ${name}`);
}

const passedCount = checks.filter(([, passed]) => passed).length;
console.log(`\n${passedCount} / ${checks.length} 통과`);

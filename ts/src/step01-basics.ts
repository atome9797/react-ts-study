/**
 * Step 1. TypeScript가 하는 일과 tsconfig
 * 로드맵 문서: Part 1 > Step 1
 *
 * 실습 과제
 * 1. 아래 예제를 직접 쳐 보고 npx tsx로 실행한다
 * 2. 에러가 나는 코드를 일부러 3개 만들어 npm run typecheck의 에러 메시지를 읽는다
 * 3. tsconfig.json의 strict를 false로 바꾸면 어떤 에러가 사라지는지 확인하고 다시 true로 돌린다
 *
 * 실행: npx tsx src/step01-basics.ts   타입 검사: npm run typecheck
 */

function getTotal(price: number, quantity: number) {
  return price * quantity;
}

console.log(getTotal(1000, 3)); // 3000

// 주석을 풀고 npm run typecheck를 실행해 에러 메시지를 읽어 본다
// getTotal("1000", 3);

// strictNullChecks 확인: find는 값을 못 찾으면 undefined를 돌려준다
const prices = [1000, 2000, 3000];
const found = prices.find((p) => p > 5000);
console.log(found?.toFixed()); // found.toFixed()로 바꾸면 어떤 에러가 날까?

export {};

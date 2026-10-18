# ts/ — Part 1. TypeScript 문법

React 없이 순수 TypeScript로 문법을 연습하는 폴더입니다.

## 실행

```bash
npm install                      # 처음 한 번 (package-lock.json이 생기면 함께 커밋)
npm run typecheck                # 타입 검사 (에러가 없으면 아무것도 출력되지 않음)
npm run watch                    # 저장할 때마다 타입 검사
npx tsx src/step02-types.ts      # 파일 실행 (타입 검사는 하지 않으므로 typecheck도 따로!)
npm run quote                    # 견적 계산 모듈 자동 확인
```

## 파일

| 파일 | 내용 | 상태 |
|---|---|---|
| [step01-basics.ts](./src/step01-basics.ts) | Step 1. TypeScript가 하는 일과 tsconfig ★ | ⬜ |
| [step02-types.ts](./src/step02-types.ts) | Step 2. 기본 타입과 타입 추론 ★ | ⬜ |
| [step03-objects.ts](./src/step03-objects.ts) | Step 3. 객체 타입: type과 interface ★ | ⬜ |
| [step04-functions.ts](./src/step04-functions.ts) | Step 4. 함수 타입 ★ | ⬜ |
| [step05-narrowing.ts](./src/step05-narrowing.ts) | Step 5. 유니온 타입과 타입 좁히기 ★ | ⬜ |
| [step06-discriminated.ts](./src/step06-discriminated.ts) | Step 6. 판별 유니온과 never | ⬜ |
| [step07-generics.ts](./src/step07-generics.ts) | Step 7. 제네릭 ★ | ⬜ |
| [step08-keyof.ts](./src/step08-keyof.ts) | Step 8. keyof, typeof, 인덱스 접근 타입 | ⬜ |
| [step09-utility.ts](./src/step09-utility.ts) | Step 9. 유틸리티 타입 ★ | ⬜ |
| [step10-async.ts](./src/step10-async.ts) | Step 10. 비동기, 모듈, 선언 파일 | ⬜ |
| [step11-advanced.ts](./src/step11-advanced.ts) | Step 11. (선택) 고급 타입 맛보기 | ⬜ |
| [quote/](./src/quote) | Part 1 종합 실습: 견적 계산 모듈 | ⬜ |
| [exercises/](./src/exercises) | Part 1 연습문제 20 | ⬜ |

각 Step 파일 맨 위에 실습 과제가 주석으로 적혀 있다. 과제 번호에 맞춰 `// 1)`, `// 2)` 아래에 코드를 쓴다.

## 규칙

- any 금지. 타입을 모르겠으면 unknown으로 받고 좁힌다.
- 파일을 다 풀면 `npm run typecheck`가 에러 없이 끝나는지 확인하고 커밋한다.
- 배운 것은 `../til/`에 날짜별로 3줄씩 남긴다.

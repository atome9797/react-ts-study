# React + TypeScript 학습 기록

인턴십 업무 스택(TypeScript · Next.js · React · Tailwind CSS · Firebase)을 준비하면서
React와 TypeScript 문법을 처음부터 순서대로 다시 공부하고 기록하는 레포입니다.
학습 순서와 내용은 「React + TypeScript 문법 학습 로드맵」 문서를 따릅니다.

- 기간: 2026.10.17 ~
- 목표: 회사 코드를 열었을 때 문법 때문에 막히지 않기, any 없이 타입 설계하기

## 진행 현황

상태: ⬜ 시작 전 · 🔄 진행 중 · ✅ 완료 &nbsp;&nbsp; ★ = 인턴 시작 전에 끝낼 Step

### Part 0 ~ 1. 준비와 TypeScript → [`ts/`](./ts)

| Step | 주제 | 상태 | 코드·정리 |
|---|---|---|---|
| 0 ★ | 개발 환경과 학습 레포 | ⬜ | [TIL 10/17](./til/2026-10-17.md) |
| 1 ★ | TypeScript가 하는 일, tsconfig | ⬜ | [step01](./ts/src/step01-basics.ts) |
| 2 ★ | 기본 타입과 타입 추론 | ⬜ | [step02](./ts/src/step02-types.ts) |
| 3 ★ | 객체 타입: type과 interface | ⬜ | [step03](./ts/src/step03-objects.ts) |
| 4 ★ | 함수 타입 | ⬜ | [step04](./ts/src/step04-functions.ts) |
| 5 ★ | 유니온과 타입 좁히기 | ⬜ | [step05](./ts/src/step05-narrowing.ts) |
| 6 | 판별 유니온과 never | ⬜ | [step06](./ts/src/step06-discriminated.ts) |
| 7 ★ | 제네릭 | ⬜ | [step07](./ts/src/step07-generics.ts) |
| 8 | keyof, typeof, 인덱스 접근 | ⬜ | [step08](./ts/src/step08-keyof.ts) |
| 9 ★ | 유틸리티 타입 | ⬜ | [step09](./ts/src/step09-utility.ts) |
| 10 | 비동기, 모듈, 선언 파일 | ⬜ | [step10](./ts/src/step10-async.ts) |
| 11 | (선택) 고급 타입 | ⬜ | [step11](./ts/src/step11-advanced.ts) |
| P1 | 연습문제 20 · 견적 계산 모듈 | ⬜ | [exercises](./ts/src/exercises) · [quote](./ts/src/quote) |

### Part 2. React → [`react/`](./react)

| Step | 주제 | 상태 | 코드·정리 |
|---|---|---|---|
| 12 ★ | 프로젝트 구조와 JSX | ⬜ | [step12](./react/src/steps/step12-jsx) |
| 13 ★ | 컴포넌트와 Props | ⬜ | [step13](./react/src/steps/step13-props) |
| 14 ★ | 이벤트 처리 | ⬜ | [step14](./react/src/steps/step14-events) |
| 15 ★ | State와 useState | ⬜ | [step15](./react/src/steps/step15-state) |
| 16 ★ | 리스트·조건부 렌더링 | ⬜ | [step16](./react/src/steps/step16-list) |
| 17 ★ | 폼 다루기 | ⬜ | [step17](./react/src/steps/step17-form) |
| 18 ★ | useEffect와 데이터 가져오기 | ⬜ | [step18](./react/src/steps/step18-effect) |
| 19 | useRef | ⬜ | [step19](./react/src/steps/step19-ref) |
| 20 | useReducer | ⬜ | [step20](./react/src/steps/step20-reducer) |
| 21 | Context | ⬜ | [step21](./react/src/steps/step21-context) |
| 22 | 커스텀 훅 | ⬜ | [step22](./react/src/steps/step22-hooks) |
| 23 | 렌더링과 메모이제이션 | ⬜ | [step23](./react/src/steps/step23-memo) |
| 24 | React 19 새 문법 | ⬜ | [step24](./react/src/steps/step24-react19) |
| 25 | 에러 경계, Suspense | ⬜ | [step25](./react/src/steps/step25-boundary) |
| 26 | 스타일링, Tailwind | ⬜ | [step26](./react/src/steps/step26-style) |
| 27 | (선택) 테스트 | ⬜ | [step27](./react/src/steps/step27-test) |

### Part 3. 미니 프로젝트 → [`projects/`](./projects)

| 프로젝트 | 내용 | 상태 |
|---|---|---|
| P2 | 수량 조절기와 금액 표시 | ⬜ |
| P3 | 할 일 목록 | ⬜ |
| P4 ★ | 견적 계산기 | ⬜ |
| P5 | 데이터 대시보드 | ⬜ |
| P6 ★ | 견적 관리 미니 앱 (별도 레포) | ⬜ |

## 폴더 구조

```text
react-ts-study/
├─ ts/          Part 1: TypeScript 문법 (Step 1~11, 연습문제 20, 견적 계산 모듈)
├─ react/       Part 2: React 문법 (Vite + React + TS, Step 12~27)
├─ projects/    Part 3: 미니 프로젝트 (각각 별도 Vite 프로젝트)
├─ til/         날짜별 학습 기록 (Today I Learned)
└─ .github/     GitHub Actions(자동 검사)와 PR 템플릿
```

## 처음 세팅 (한 번만)

Node.js(LTS)와 Git이 설치되어 있어야 합니다.

```bash
# 1) TypeScript 연습 환경
cd ts
npm install
npm run typecheck
cd ..

# 2) React 연습 환경
cd react
npm install
npm run dev
```

`npm install`을 하면 `ts/`와 `react/`에 `package-lock.json`이 생깁니다.
이 파일도 함께 커밋해야 GitHub Actions의 `npm ci`가 동작합니다.

## 자주 쓰는 명령

| 위치 | 명령 | 하는 일 |
|---|---|---|
| ts | `npm run typecheck` | 타입 검사 (에러가 없으면 아무것도 출력되지 않음) |
| ts | `npm run watch` | 저장할 때마다 타입 검사 |
| ts | `npx tsx src/step02-types.ts` | 파일 실행 |
| ts | `npm run quote` | 견적 계산 모듈 자동 확인 |
| react | `npm run dev` | 개발 서버 (http://localhost:5173) |
| react | `npm run build` | 타입 검사 + 배포용 빌드 |
| react | `npm run lint` | 린트 (oxlint) |

## 자동 검사 (GitHub Actions)

| 워크플로 | 실행 조건 | 하는 일 |
|---|---|---|
| `.github/workflows/ts.yml` | `ts/` 아래 파일이 바뀐 push·PR | `npm ci` → 타입 검사 |
| `.github/workflows/react.yml` | `react/` 아래 파일이 바뀐 push·PR | `npm ci` → 린트 → 빌드 |

PR 화면에 초록색 체크가 뜨면 통과, 빨간 X면 실패입니다. 실패하면 Actions 탭에서 로그를 읽고 고칩니다.

## 공부 루틴

1. 로드맵 문서에서 Step을 읽는다
2. 예제를 직접 타이핑하고, 일부러 망가뜨려 에러를 읽는다
3. Step 파일(또는 폴더)에서 실습 과제를 푼다
4. 체크리스트를 소리 내어 설명해 본다
5. `til/`에 오늘 배운 것을 3줄로 남긴다
6. 커밋하고, 위 진행 현황 표를 업데이트한다

## 커밋 규칙

`타입: 내용` 형식을 씁니다.

| 타입 | 의미 | 예시 |
|---|---|---|
| `feat` | 기능·실습 추가 | `feat: Step 15 수량 조절기` |
| `fix` | 버그 수정 | `fix: 수량이 0일 때 합계가 NaN이 되는 문제` |
| `refactor` | 동작은 같고 구조 개선 | `refactor: 견적 상태를 useReducer로 변경` |
| `style` | 포맷 (동작 영향 없음) | `style: prettier 적용` |
| `docs` | 문서·TIL | `docs: 10/18 TIL` |
| `test` | 테스트 | `test: calcTax 테스트 추가` |
| `chore` | 설정·패키지 | `chore: tailwind 설치` |

## 배운 것 요약

Step을 끝낼 때마다 한 줄씩 추가합니다.

- (예) any 대신 unknown으로 받고 좁힌다

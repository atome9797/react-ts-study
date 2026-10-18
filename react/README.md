# react/ — Part 2. React 문법

Vite + React + TypeScript 프로젝트입니다 (create-vite 9.2.1의 react-ts 템플릿 기준).
`npm run dev`로 띄우면 왼쪽에 Step 목록이 나오고, Step을 고르면 그 Step의 실습 과제와 작업 영역이 보입니다.
과제 체크 상태는 브라우저(localStorage)에 저장됩니다.

## 실행

```bash
npm install      # 처음 한 번 (package-lock.json이 생기면 함께 커밋)
npm run dev      # 개발 서버 → 터미널에 나온 주소(보통 http://localhost:5173)
npm run build    # 타입 검사 + 배포용 빌드 (타입 에러가 있으면 실패)
npm run lint     # oxlint로 코드 규칙 검사
```

## 구조

```text
src/
├─ main.tsx                    앱 시작점 (StrictMode)
├─ App.tsx                     Step 목록과 화면 전환
├─ index.css                   공통 스타일
├─ components/
│  └─ StepLayout.tsx           Step 화면 공통 틀 (과제 체크리스트 + 작업 영역)
├─ hooks/                      Step 22부터 만든 커스텀 훅을 모아 두는 곳
└─ steps/
   ├─ index.ts                 Step 목록 (여기 등록된 순서대로 왼쪽에 표시)
   ├─ step12-jsx/Step12.tsx
   ├─ step13-props/Step13.tsx
   └─ ... step27-test/Step27.tsx
```

## 실습하는 방법

1. 해당 Step 폴더에 실습 컴포넌트 파일을 만든다. 예: `steps/step13-props/QuoteCard.tsx`
2. `StepNN.tsx`의 `<StepLayout>` 안(작업 영역)에 렌더링한다. 안내 문구(`placeholder`)는 지운다.
3. 브라우저에서 확인하고, 과제 체크박스를 체크한 뒤 커밋한다.

```tsx
// steps/step13-props/Step13.tsx 예시
import { StepLayout } from "../../components/StepLayout";
import { QuoteList } from "./QuoteList";

export function Step13() {
  return (
    <StepLayout step="Step 13" title="컴포넌트와 Props 타입" tasks={tasks}>
      <QuoteList />
    </StepLayout>
  );
}
```

## 알아 둘 설정 (tsconfig.app.json)

- strict: TypeScript 6부터 기본값이라 파일에 적혀 있지 않다.
- `noUnusedLocals` / `noUnusedParameters`: 쓰지 않는 변수가 있으면 `npm run build`가 실패한다. 지우거나, 매개변수라면 이름을 `_`로 시작한다.
- `verbatimModuleSyntax`: 타입은 `import type`으로 가져온다.
- `erasableSyntaxOnly`: `enum`을 쓰면 에러가 난다. `as const` 객체를 쓴다.
- Step 26에서 Tailwind를 설치하면 `vite.config.ts`와 `src/index.css`가 바뀐다 (로드맵 26-2 참고).

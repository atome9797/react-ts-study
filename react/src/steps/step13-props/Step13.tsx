import { StepLayout } from "../../components/StepLayout";

const tasks = [
  "QuoteCard와 QuoteList 만들기 (견적 3건을 배열로 만들어 렌더링)",
  "children을 받는 Card, variant(primary·secondary·danger)가 있는 공통 Button 만들기",
  "예전 영화 앱의 Movie 컴포넌트를 .tsx로 옮기고 PropTypes를 TypeScript 타입으로 바꾸기",
];

export function Step13() {
  return (
    <StepLayout step="Step 13" title="컴포넌트와 Props 타입" tasks={tasks}>
      {/* 실습 컴포넌트를 이 폴더에 만들고 여기에 렌더링한다. 예: <QuoteList /> */}
      <p className="placeholder">아직 실습 컴포넌트가 없습니다.</p>
    </StepLayout>
  );
}

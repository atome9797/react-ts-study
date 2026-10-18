import { StepLayout } from "../../components/StepLayout";

const tasks = [
  "Vitest와 Testing Library 설치 (로드맵 Step 27의 명령)",
  "견적 계산 함수 테스트 3개 이상 작성",
  "Counter 컴포넌트의 버튼 클릭 테스트 작성",
];

export function Step27() {
  return (
    <StepLayout step="Step 27" title="(선택) 테스트 맛보기" tasks={tasks}>
      {/* 실습 컴포넌트를 이 폴더에 만들고 여기에 렌더링한다. 예: <Counter /> */}
      <p className="placeholder">아직 실습 컴포넌트가 없습니다.</p>
    </StepLayout>
  );
}

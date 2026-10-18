import { StepLayout } from "../../components/StepLayout";

const tasks = [
  "React DevTools Profiler로 리렌더링을 측정하고 캡처",
  "memo, useMemo, useCallback 적용 전후 비교",
  "key를 바꿔서 편집 폼 state를 초기화하기",
];

export function Step23() {
  return (
    <StepLayout step="Step 23" title="렌더링 원리와 메모이제이션" tasks={tasks}>
      {/* 실습 컴포넌트를 이 폴더에 만들고 여기에 렌더링한다. 예: <MemoDemo /> */}
      <p className="placeholder">아직 실습 컴포넌트가 없습니다.</p>
    </StepLayout>
  );
}

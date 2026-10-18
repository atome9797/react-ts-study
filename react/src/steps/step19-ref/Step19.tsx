import { StepLayout } from "../../components/StepLayout";

const tasks = [
  "화면에 나타나면 자동으로 포커스되는 검색창",
  "시작·정지되는 스톱워치 (타이머 id를 ref에 보관)",
  "ref를 prop으로 받는 TextField 만들기 (React 19 방식)",
];

export function Step19() {
  return (
    <StepLayout step="Step 19" title="useRef" tasks={tasks}>
      {/* 실습 컴포넌트를 이 폴더에 만들고 여기에 렌더링한다. 예: <Stopwatch /> */}
      <p className="placeholder">아직 실습 컴포넌트가 없습니다.</p>
    </StepLayout>
  );
}

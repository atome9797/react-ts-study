import { StepLayout } from "../../components/StepLayout";

const tasks = [
  "검색 폼: Enter로 제출, Esc로 입력 지우기, 지우기 버튼",
  "견적 행 클릭(상세 보기)과 행 안의 삭제 버튼을 stopPropagation으로 분리",
  "인라인 핸들러에 마우스를 올려 이벤트 타입을 확인하고, 분리한 핸들러에 그 타입 붙이기",
];

export function Step14() {
  return (
    <StepLayout step="Step 14" title="이벤트 처리와 이벤트 타입" tasks={tasks}>
      {/* 실습 컴포넌트를 이 폴더에 만들고 여기에 렌더링한다. 예: <SearchForm /> */}
      <p className="placeholder">아직 실습 컴포넌트가 없습니다.</p>
    </StepLayout>
  );
}

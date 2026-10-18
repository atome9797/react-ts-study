import { StepLayout } from "../../components/StepLayout";

const tasks = [
  "견적 목록을 표로 그리고 상태별 StatusBadge 붙이기",
  "제목 검색, 금액순·최신순 정렬 선택",
  "목록이 비었을 때와 검색 결과가 없을 때 문구를 다르게 표시",
  "index key와 id key에서 맨 앞 항목 삭제 결과 비교 (각 줄에 input 넣기)",
];

export function Step16() {
  return (
    <StepLayout step="Step 16" title="리스트·조건부 렌더링과 key" tasks={tasks}>
      {/* 실습 컴포넌트를 이 폴더에 만들고 여기에 렌더링한다. 예: <QuoteTable /> */}
      <p className="placeholder">아직 실습 컴포넌트가 없습니다.</p>
    </StepLayout>
  );
}

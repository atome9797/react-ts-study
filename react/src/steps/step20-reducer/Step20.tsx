import { StepLayout } from "../../components/StepLayout";

const tasks = [
  "견적 항목 편집기: 추가, 삭제, 수량 변경, 단가 변경, 전체 삭제",
  "reducer를 quoteReducer.ts로 분리하고 함수만 호출해서 결과 확인",
  "Step 15의 useState 버전과 비교해서 장단점을 README에 정리",
];

export function Step20() {
  return (
    <StepLayout step="Step 20" title="useReducer" tasks={tasks}>
      {/* 실습 컴포넌트를 이 폴더에 만들고 여기에 렌더링한다. 예: <QuoteEditor /> */}
      <p className="placeholder">아직 실습 컴포넌트가 없습니다.</p>
    </StepLayout>
  );
}

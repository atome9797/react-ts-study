import { StepLayout } from "../../components/StepLayout";

const tasks = [
  "수량 조절기(1~99)와 단가로 금액을 표시하는 QuoteLine",
  "견적 항목 목록: 추가, 수량 변경, 삭제를 불변 업데이트로 구현",
  "소계·소비세·합계를 state 없이 계산으로 표시",
  "+3 버튼을 일반 업데이트와 함수형 업데이트로 각각 만들어 비교",
];

export function Step15() {
  return (
    <StepLayout step="Step 15" title="State와 useState" tasks={tasks}>
      {/* 실습 컴포넌트를 이 폴더에 만들고 여기에 렌더링한다. 예: <QuoteLine /> */}
      <p className="placeholder">아직 실습 컴포넌트가 없습니다.</p>
    </StepLayout>
  );
}

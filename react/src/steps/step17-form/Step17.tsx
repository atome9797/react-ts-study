import { StepLayout } from "../../components/StepLayout";

const tasks = [
  "견적 입력 폼: 제목, 고객명, 금액, 분류(select), 긴급(checkbox), 메모(textarea)",
  "검증 규칙(제목 필수, 금액 1 이상, 고객명 50자 이하)과 칸별 에러 표시",
  "제출하면 Step 16 목록에 추가되도록 연결 (state 끌어올리기)",
  "같은 폼을 FormData(비제어) 방식으로 다시 만들어 비교",
];

export function Step17() {
  return (
    <StepLayout step="Step 17" title="폼 다루기" tasks={tasks}>
      {/* 실습 컴포넌트를 이 폴더에 만들고 여기에 렌더링한다. 예: <QuoteForm /> */}
      <p className="placeholder">아직 실습 컴포넌트가 없습니다.</p>
    </StepLayout>
  );
}

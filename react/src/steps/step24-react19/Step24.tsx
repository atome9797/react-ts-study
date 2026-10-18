import { StepLayout } from "../../components/StepLayout";

const tasks = [
  "form action과 useActionState로 저장 폼 만들기",
  "useFormStatus를 쓰는 공통 SubmitButton 만들기",
  "useOptimistic으로 응답 전에 먼저 보이는 댓글 등록",
  "Activity로 탭을 전환해도 입력 내용이 유지되게 하기",
];

export function Step24() {
  return (
    <StepLayout step="Step 24" title="React 19 새 문법" tasks={tasks}>
      {/* 실습 컴포넌트를 이 폴더에 만들고 여기에 렌더링한다. 예: <QuoteActionForm /> */}
      <p className="placeholder">아직 실습 컴포넌트가 없습니다.</p>
    </StepLayout>
  );
}

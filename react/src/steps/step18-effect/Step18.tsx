import { StepLayout } from "../../components/StepLayout";

const tasks = [
  "1초마다 갱신되는 시계와 창 너비 표시 (클린업을 지웠을 때 어떻게 되는지 확인)",
  "JSONPlaceholder의 /users 목록을 로딩·에러·성공 상태로 표시",
  "사용자를 고르면 UserDetail에 상세 표시 (빠르게 바꿔 누르며 경쟁 상태 처리 확인)",
  "Effect가 필요 없는 나쁜 예를 하나 만들고 Effect 없는 코드로 고치기",
];

export function Step18() {
  return (
    <StepLayout step="Step 18" title="useEffect와 데이터 가져오기" tasks={tasks}>
      {/* 실습 컴포넌트를 이 폴더에 만들고 여기에 렌더링한다. 예: <UserList /> */}
      <p className="placeholder">아직 실습 컴포넌트가 없습니다.</p>
    </StepLayout>
  );
}

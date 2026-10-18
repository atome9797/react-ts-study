import { StepLayout } from "../../components/StepLayout";

const tasks = [
  "AuthProvider와 useAuth를 만들고 Header와 본문 두 곳에서 사용자 이름 표시",
  "light·dark를 전환하는 ThemeProvider 만들기",
  "Provider 밖에서 useAuth()를 호출해 에러 메시지 확인",
];

export function Step21() {
  return (
    <StepLayout step="Step 21" title="Context" tasks={tasks}>
      {/* 실습 컴포넌트를 이 폴더에 만들고 여기에 렌더링한다. 예: <AuthDemo /> */}
      <p className="placeholder">아직 실습 컴포넌트가 없습니다.</p>
    </StepLayout>
  );
}

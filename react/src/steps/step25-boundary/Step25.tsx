import { StepLayout } from "../../components/StepLayout";

const tasks = [
  "ErrorBoundary 클래스를 만들고 일부러 에러를 던지는 컴포넌트 감싸기",
  "lazy와 Suspense로 무거운 화면을 나눠 불러오기",
];

export function Step25() {
  return (
    <StepLayout step="Step 25" title="에러 경계, Suspense, lazy" tasks={tasks}>
      {/* 실습 컴포넌트를 이 폴더에 만들고 여기에 렌더링한다. 예: <Dashboard /> */}
      <p className="placeholder">아직 실습 컴포넌트가 없습니다.</p>
    </StepLayout>
  );
}

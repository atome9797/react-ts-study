import { StepLayout } from "../../components/StepLayout";

const tasks = [
  "Tailwind 설치: npm install tailwindcss @tailwindcss/vite (설정은 로드맵 26-2)",
  "같은 QuoteCard를 CSS Modules와 Tailwind로 각각 만들기",
  "Figma 화면(없으면 아무 웹페이지 캡처) 하나를 Tailwind로 옮겨 보기",
  "키보드(Tab, Enter, Esc)만으로 조작할 수 있는지 확인",
];

export function Step26() {
  return (
    <StepLayout step="Step 26" title="스타일링: CSS Modules와 Tailwind" tasks={tasks}>
      {/* 실습 컴포넌트를 이 폴더에 만들고 여기에 렌더링한다. 예: <QuoteCard /> */}
      <p className="placeholder">아직 실습 컴포넌트가 없습니다.</p>
    </StepLayout>
  );
}

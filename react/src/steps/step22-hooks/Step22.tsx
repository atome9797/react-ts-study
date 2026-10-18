import { StepLayout } from "../../components/StepLayout";

const tasks = [
  "useToggle, useLocalStorage, useDebounce, useFetch를 src/hooks/에 만들기",
  "검색창에 useDebounce를 적용해 입력이 멈춘 뒤에만 필터링",
  "Step 15의 견적 항목 목록을 useLocalStorage로 바꿔 새로고침해도 유지",
  "소계·세금·합계를 돌려주는 useQuoteTotals(items) 만들기",
];

export function Step22() {
  return (
    <StepLayout step="Step 22" title="커스텀 훅" tasks={tasks}>
      {/* 실습 컴포넌트를 이 폴더에 만들고 여기에 렌더링한다. 예: <HooksDemo /> */}
      <p className="placeholder">아직 실습 컴포넌트가 없습니다.</p>
    </StepLayout>
  );
}

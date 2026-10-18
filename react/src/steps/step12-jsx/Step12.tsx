import { StepLayout } from "../../components/StepLayout";

const tasks = [
  "자기소개 카드 ProfileCard 만들기: 이름, 학교, 관심 기술 3개, 프로필 이미지",
  "JSX 규칙을 하나씩 어겨 보고 에러 확인 (태그 안 닫기, class 쓰기, 부모 없이 두 요소 반환)",
  "금액에 따라 고액·일반·소액 라벨을 붙이는 PriceTag 만들기",
  "React Developer Tools를 설치하고 Components 탭에서 구조 확인",
];

export function Step12() {
  return (
    <StepLayout step="Step 12" title="React 프로젝트 구조와 JSX" tasks={tasks}>
      {/* 실습 컴포넌트를 이 폴더에 만들고 여기에 렌더링한다. 예: <ProfileCard /> */}
      <p className="placeholder">아직 실습 컴포넌트가 없습니다.</p>
    </StepLayout>
  );
}

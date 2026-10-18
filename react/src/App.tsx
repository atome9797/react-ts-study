import { useEffect, useState } from "react";
import { steps } from "./steps";

const LAST_STEP_KEY = "react-study:last-step";

// 마지막으로 보던 Step을 기억해 두었다가 새로고침해도 그 화면을 연다
function readLastStep(): string {
  try {
    const saved = localStorage.getItem(LAST_STEP_KEY);
    if (saved !== null && steps.some((s) => s.id === saved)) return saved;
  } catch {
    // 저장소를 쓸 수 없는 환경이면 첫 Step으로 시작한다
  }
  return steps[0].id;
}

export default function App() {
  const [currentId, setCurrentId] = useState(readLastStep);

  useEffect(() => {
    try {
      localStorage.setItem(LAST_STEP_KEY, currentId);
    } catch {
      // 저장하지 못해도 화면 동작에는 영향이 없다
    }
  }, [currentId]);

  const current = steps.find((s) => s.id === currentId) ?? steps[0];
  const CurrentStep = current.Component;

  return (
    <div className="layout">
      <nav className="sidebar" aria-label="Step 목록">
        <h1 className="app-title">React 학습</h1>
        <ul>
          {steps.map((s) => (
            <li key={s.id}>
              <button
                type="button"
                className={s.id === currentId ? "nav-item active" : "nav-item"}
                aria-current={s.id === currentId ? "page" : undefined}
                onClick={() => setCurrentId(s.id)}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <main className="content">
        {/* key가 바뀌면 Step 화면이 새로 만들어진다 (로드맵 Step 23: key로 초기화하기) */}
        <CurrentStep key={current.id} />
      </main>
    </div>
  );
}

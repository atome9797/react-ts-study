import { useEffect, useState } from "react";
import type { ReactNode } from "react";

type StepLayoutProps = {
  step: string; // 예: "Step 12"
  title: string;
  tasks: string[];
  children?: ReactNode;
};

// 저장된 체크 상태를 읽는다. 형식이 깨져 있으면 빈 배열
function loadDone(key: string): boolean[] {
  try {
    const saved = localStorage.getItem(key);
    const parsed: unknown = saved !== null ? JSON.parse(saved) : [];
    return Array.isArray(parsed) ? parsed.map(Boolean) : [];
  } catch {
    return [];
  }
}

// Step 화면의 공통 틀: 제목, 실습 과제 체크리스트(브라우저에 저장), 작업 영역
export function StepLayout({ step, title, tasks, children }: StepLayoutProps) {
  const storageKey = `react-study:progress:${step}`;
  const [done, setDone] = useState<boolean[]>(() => loadDone(storageKey));

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(done));
    } catch {
      // 저장하지 못해도 체크 표시는 화면에 남는다
    }
  }, [storageKey, done]);

  function toggle(index: number) {
    setDone((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  }

  const doneCount = tasks.filter((_, i) => done[i]).length;

  return (
    <section className="step">
      <header className="step-header">
        <p className="step-label">{step}</p>
        <h2>{title}</h2>
        <p className="step-progress">
          실습 과제 {doneCount} / {tasks.length}
        </p>
      </header>

      <ol className="task-list">
        {tasks.map((task, i) => (
          <li key={task}>
            <label>
              <input type="checkbox" checked={Boolean(done[i])} onChange={() => toggle(i)} />
              <span>{task}</span>
            </label>
          </li>
        ))}
      </ol>

      <div className="workspace">{children}</div>
    </section>
  );
}

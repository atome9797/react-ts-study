import type { ComponentType } from "react";
import { Step12 } from "./step12-jsx/Step12";
import { Step13 } from "./step13-props/Step13";
import { Step14 } from "./step14-events/Step14";
import { Step15 } from "./step15-state/Step15";
import { Step16 } from "./step16-list/Step16";
import { Step17 } from "./step17-form/Step17";
import { Step18 } from "./step18-effect/Step18";
import { Step19 } from "./step19-ref/Step19";
import { Step20 } from "./step20-reducer/Step20";
import { Step21 } from "./step21-context/Step21";
import { Step22 } from "./step22-hooks/Step22";
import { Step23 } from "./step23-memo/Step23";
import { Step24 } from "./step24-react19/Step24";
import { Step25 } from "./step25-boundary/Step25";
import { Step26 } from "./step26-style/Step26";
import { Step27 } from "./step27-test/Step27";

export type StepEntry = {
  id: string;
  label: string;
  Component: ComponentType;
};

// 왼쪽 목록에 이 순서대로 표시된다. 새 화면을 추가하려면 여기에 등록한다.
export const steps: StepEntry[] = [
  { id: "step12", label: "12. JSX", Component: Step12 },
  { id: "step13", label: "13. Props", Component: Step13 },
  { id: "step14", label: "14. 이벤트", Component: Step14 },
  { id: "step15", label: "15. useState", Component: Step15 },
  { id: "step16", label: "16. 리스트·조건부", Component: Step16 },
  { id: "step17", label: "17. 폼", Component: Step17 },
  { id: "step18", label: "18. useEffect", Component: Step18 },
  { id: "step19", label: "19. useRef", Component: Step19 },
  { id: "step20", label: "20. useReducer", Component: Step20 },
  { id: "step21", label: "21. Context", Component: Step21 },
  { id: "step22", label: "22. 커스텀 훅", Component: Step22 },
  { id: "step23", label: "23. 메모이제이션", Component: Step23 },
  { id: "step24", label: "24. React 19", Component: Step24 },
  { id: "step25", label: "25. 에러 경계", Component: Step25 },
  { id: "step26", label: "26. 스타일링", Component: Step26 },
  { id: "step27", label: "27. 테스트", Component: Step27 },
];

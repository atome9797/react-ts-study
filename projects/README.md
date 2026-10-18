# projects/ — Part 3. 미니 프로젝트

각 프로젝트는 이 폴더 안에 별도의 Vite 프로젝트로 만든다.

```bash
cd projects
npm create vite@latest p2-counter -- --template react-ts
cd p2-counter
npm install
npm run dev
```

| 폴더 | 프로젝트 | 사용하는 Step | 상태 |
|---|---|---|---|
| (ts/ 안) | P1. 연습문제 20 · 견적 계산 모듈 | 1 ~ 11 | ⬜ |
| p2-counter | P2. 수량 조절기와 금액 표시 | 12 ~ 15 | ⬜ |
| p3-todo | P3. 할 일 목록 | 15 ~ 17, 22 | ⬜ |
| p4-quote-calculator | P4. 견적 계산기 ★ | 15 ~ 22 | ⬜ |
| p5-dashboard | P5. 데이터 대시보드 | 18, 22, 23, 25 | ⬜ |
| (별도 레포 quote-manager) | P6. 견적 관리 미니 앱 ★ | 12 ~ 26 | ⬜ |

## 진행하는 순서

1. 요구사항(로드맵 Part 3)을 읽고 **타입부터** 정의한다 (`src/types.ts`).
2. 화면을 컴포넌트 단위로 나눠 종이에 그려 본다.
3. 정적인 화면(가짜 데이터)부터 만들고, 그다음 state와 이벤트를 붙인다.
4. 기능 하나가 동작할 때마다 커밋한다.
5. 끝나면 프로젝트 폴더의 README에 스크린샷, 기능, 배운 점, 어려웠던 점을 정리한다.

## 자동 검사에 넣으려면

`.github/workflows/react.yml`을 복사해서 이름을 바꾸고(예: `p4.yml`),
`paths`와 `working-directory`, `cache-dependency-path`를 프로젝트 폴더(예: `projects/p4-quote-calculator`)로 바꾼다.

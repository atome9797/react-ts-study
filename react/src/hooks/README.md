# hooks/

Step 22(커스텀 훅)부터 만든 훅을 이 폴더에 모은다. 이후 Step과 프로젝트에서 import해서 다시 쓴다.

| 파일 | 하는 일 | 만든 Step |
|---|---|---|
| useToggle.ts | 켜기·끄기 상태 | 22 |
| useLocalStorage.ts | localStorage와 동기화되는 state | 22 |
| useDebounce.ts | 입력이 멈춘 뒤에만 값 반영 | 22 |
| useFetch.ts | 로딩·에러·성공 상태를 가진 데이터 가져오기 | 22 |
| useQuoteTotals.ts | 견적 항목의 소계·세금·합계 | 22 |

규칙: 이름은 `use`로 시작하고, 훅은 컴포넌트나 다른 훅의 최상위에서만 호출한다.

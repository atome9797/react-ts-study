# Part 1 연습문제 20

로드맵 문서의 "Part 1 연습문제 20"을 문제별 파일로 푼다. 예시 답안은 문서 부록 F에 있다.
각 파일 맨 위의 `핵심 개념:` 줄은 풀고 나서 내 말로 한 줄 채운다.

| 번호 | 파일 | 문제 | 상태 |
|---|---|---|---|
| 1 | [ex01-inferred-types.ts](./ex01-inferred-types.ts) | 다음 변수의 추론 타입을 맞혀 본다 (VS Code에서 마우스를 올려 확인): let a = 1, con… | ⬜ |
| 2 | [ex02-product-type.ts](./ex02-product-type.ts) | Product 타입을 정의한다: id(string), name(string), price(number),… | ⬜ |
| 3 | [ex03-sale-price.ts](./ex03-sale-price.ts) | getSalePrice(product: Product): number — 할인율이 없으면 원래 가격, 있… | ⬜ |
| 4 | [ex04-grade.ts](./ex04-grade.ts) | type Grade = "A" &#124; "B" &#124; "C"와 등급별 설명을 돌려주는 함수 (never 검사 포함) | ⬜ |
| 5 | [ex05-describe.ts](./ex05-describe.ts) | describe(value: string &#124; number &#124; boolean): string — 타입별로 … | ⬜ |
| 6 | [ex06-type-guard.ts](./ex06-type-guard.ts) | isNonEmptyString(value: unknown): value is string 타입 가드 | ⬜ |
| 7 | [ex07-last.ts](./ex07-last.ts) | last<T>(arr: T[]): T &#124; undefined | ⬜ |
| 8 | [ex08-pluck.ts](./ex08-pluck.ts) | pluck<T, K extends keyof T>(items: T[], key: K): T[K][] — … | ⬜ |
| 9 | [ex09-update-input.ts](./ex09-update-input.ts) | UpdateProductInput — id는 필수, 나머지는 선택 | ⬜ |
| 10 | [ex10-satisfies.ts](./ex10-satisfies.ts) | Record<Grade, string>과 satisfies로 등급 라벨 객체를 만든다 | ⬜ |
| 11 | [ex11-result.ts](./ex11-result.ts) | type Result<T> = { ok: true; value: T } &#124; { ok: false; err… | ⬜ |
| 12 | [ex12-fetch-json.ts](./ex12-fetch-json.ts) | fetchJson<T>(url: string): Promise<T> (단언 버전) | ⬜ |
| 13 | [ex13-sum-by.ts](./ex13-sum-by.ts) | sumBy<T>(items: T[], getValue: (item: T) => number): number | ⬜ |
| 14 | [ex14-count-by.ts](./ex14-count-by.ts) | countBy<T>(items: T[], getKey: (item: T) => string): Recor… | ⬜ |
| 15 | [ex15-const-union.ts](./ex15-const-union.ts) | const COLORS = ["red", "green", "blue"] as const에서 Color 유… | ⬜ |
| 16 | [ex16-return-type.ts](./ex16-return-type.ts) | 함수 makeUser(name: string, age: number)의 반환 타입을 ReturnType으… | ⬜ |
| 17 | [ex17-tuple.ts](./ex17-tuple.ts) | useCounterLike(initial: number): [number, (next: number) =… | ⬜ |
| 18 | [ex18-defaults.ts](./ex18-defaults.ts) | withDefaults(options: Partial<Options>): Options — 기본값과 병합 | ⬜ |
| 19 | [ex19-parse-products.ts](./ex19-parse-products.ts) | parseProducts(data: unknown): Product[] — 형식이 틀리면 에러를 던진다 | ⬜ |
| 20 | [ex20-shape-area.ts](./ex20-shape-area.ts) | 판별 유니온 Shape(원, 사각형, 삼각형)과 넓이 계산 함수 | ⬜ |

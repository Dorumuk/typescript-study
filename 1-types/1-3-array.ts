{
  // Array
  const fruits: string[] = ['🍅', '🍌']; // 추천 👍
  const scroes: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {} // readonly 는 파라미터를 const 로 바꾼다.

  // Tuple -> interface, type alias, class 로 대체하자!
  // 👉 ellie: 추천하지 않습니다 ❗
  // Why? : 인덱스로 데이터를 접근하는 형태는 효율이 떨어진다.(어떤 데이터인지 바로 확인이 안됨.)
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student; // 아주 적합하게 사용할 때가 있다.
}

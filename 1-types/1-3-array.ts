{
  // Array
  const fruits: string[] = ['π', 'π']; // μΆμ² π
  const scroes: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {} // readonly λ νλΌλ―Έν°λ₯Ό const λ‘ λ°κΎΌλ€.

  // Tuple -> interface, type alias, class λ‘ λμ²΄νμ!
  // π ellie: μΆμ²νμ§ μμ΅λλ€ β
  // Why? : μΈλ±μ€λ‘ λ°μ΄ν°λ₯Ό μ κ·Όνλ ννλ ν¨μ¨μ΄ λ¨μ΄μ§λ€.(μ΄λ€ λ°μ΄ν°μΈμ§ λ°λ‘ νμΈμ΄ μλ¨.)
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student; // μμ£Ό μ ν©νκ² μ¬μ©ν  λκ° μλ€.
}

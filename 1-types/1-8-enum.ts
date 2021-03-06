{
  /**
   * Enum
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  // π ellie: λΉμΆμ²β
  // λ€λ₯Έ λͺ¨λ°μΌ ν΄λΌμ΄μΈνΈ(μΈμ΄)μ μν΅νλ€λ©΄ μ¬μ©ν  κ°λ₯μ± μμ. But μλκ²½μ° union νμμΌλ‘ λμ²΄!
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
  enum Days { // π μμ κΈμλ§ λλ¬Έμ
    Monday, // κ°μ μ§μ νμ§ μμΌλ©΄ "0λΆν° μ¦κ° μΈλ±μ€"
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  day = 10; // !!!!! <------- β μ§μ ν νμ μΈμ number νμ μμ© (π‘π‘π‘)
  console.log(day);

  // β¨
  let dayOfweek: DaysOfWeek = 'Monday';
  dayOfweek = 'Wednesday';
}

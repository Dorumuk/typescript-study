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
  // 👉 ellie: 비추천❗
  // 다른 모바일 클라이언트(언어)와 소통한다면 사용할 가능성 있음. But 아닐경우 union 타입으로 대체!
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
  enum Days { // 👉 앞에 글자만 대문자
    Monday, // 값을 지정하지 않으면 "0부터 증가 인덱스"
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
  day = 10; // !!!!! <------- ❗ 지정한 타입 외에 number 타입 수용 (😡😡😡)
  console.log(day);

  // ✨
  let dayOfweek: DaysOfWeek = 'Monday';
  dayOfweek = 'Wednesday';
}

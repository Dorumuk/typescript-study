{
  /**
   * Intersection Types: &
   */
  // 다양한 타입을 하나로 묶어서 사용
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.empolyeeId, person.work());
  }

  // 요소 중에 한가지만 빠져도 에러
  internWork({
    name: 'ellie',
    score: 1,
    empolyeeId: 123,
    work: () => {},
  });
}

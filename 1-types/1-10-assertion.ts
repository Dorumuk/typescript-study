{
  /**
   * Type Assertions 💩
   */
  // 타입 강요
  // js에서 any로 설정된 타입을 (100%)확신하고 있는 타입으로 강제 부여하는 것
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length); // 방법1
  console.log((<string>result).length); // 방법2

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!; // ! 방법1
  numbers!.push(2); // 😱 ! 방법2

  const button = document.querySelector('class')!;
}

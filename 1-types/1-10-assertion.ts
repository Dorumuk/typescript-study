{
  /**
   * Type Assertions π©
   */
  // νμ κ°μ
  // jsμμ anyλ‘ μ€μ λ νμμ (100%)νμ νκ³  μλ νμμΌλ‘ κ°μ  λΆμ¬νλ κ²
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length); // λ°©λ²1
  console.log((<string>result).length); // λ°©λ²2

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // π±

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!; // ! λ°©λ²1
  numbers!.push(2); // π± ! λ°©λ²2

  const button = document.querySelector('class')!;
}

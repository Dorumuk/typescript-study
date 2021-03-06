{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array.....
   */

  // number
  const num: number = -6;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // π©
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // π©
  let person2: string | null;

  // unknown (μλͺ¨λ₯΄κ² μ΄..) π©
  let notSure: unknown = 0; // anyμ λΉμ·ν¨.
  notSure = 'he';
  notSure = true;

  // any (λ­λ μ§ μ€μΌμ΄!) π©
  let anything: any = 0;
  anything = 'hello';

  // void
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // π©

  // never (μ λ λ¦¬ν΄νλ©΄ μλΌ)
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // π©

  // objet
  let obj: object; // π©
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });
}

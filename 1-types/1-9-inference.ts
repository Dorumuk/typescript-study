/**
 * Type Inference
 */
// 자동으로 타입을 적용해주는 기능
// 👉 ellie: 원시 타입을 제외하고 명시를 해주는게 제일 좋다!
let text = 'hello'; // ellie : 뻔한 타입(원시 타입)은 생략 가능
function print(message = 'hello') {
  console.log(message);
}
print('hello');

function add(x: number, y: number): number {
  return x + y;
}
const result = add(1, 2);

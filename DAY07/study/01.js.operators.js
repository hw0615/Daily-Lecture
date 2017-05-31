var k = 9;


// k + 1; 
k = k + 1; // 값 복사 10으로 교체
k += 1; // 11
k++; // 11 "후 증가"
++k; // 13 "선 증가"




// ————————————————————————————————————————————————————————
// 데이터 유형 검증
// 1. typeof
// 2. instanceof
// 3. .constructor
// 4, type()
// ————————————————————————————————————————————————————————



// 1. typeof, typeof는 함수가 아니다.
// typeof ()는 함수 실행 연산자가 아니라, 식을 묶기 위한 괄호
var tester = my_student[8];
// console.log(tester);

console.log('typeof tester.이름:', typeof tester.이름);
console.log('typeof tester.성별:', typeof tester.성별);
console.log('typeof tester.나이:', typeof tester.나이);
console.log('typeof tester.학교:', typeof tester.학교); // [0] object VS [8] ???
// console.log('typeof tester.부전공:', typeof tester.부전공)
// 1. 두 수를 입력받아 큰 수를 반환하는 함수 
function max (num1, num2){
    if (num1 > num2) {
    return num1;
    } else if (num1 === num2) {
        return '값이 동일해용'
    } else {
        return num2
    }
}
// 삼항연산자
// -------------------------
// function max (a, b){
//     return a > b ? a : b
// } 
console.log('max값 반환 함수:', max(92, 615));

// 2. 숫자를 입력하면 요일을 반환하는 함수
function oneWeek(days) {
    var week = ['sun', 'mon','tue','wed','tur','fri','sat'];
    return week[days];    
}
// function day(num){
//     var week = "일월화수목금토";
//     * week = [2] // read only
//     return week[num%7];
// }

// 3. 짝수 홀수 판단하는 함수
function evenOdd(i) {
    if (i%2){
    return '홀수입니다.';
    } else {
        return '짝수입니다.';
    }
}
// function isEven(num){
//     return num % 2 === 0 ? '짝수' : '홀수';
// }
// console.log('isEven(0): ', 'isEven(0)')
// 4. 숫자를 배열로 전달받아 숫자들의 평균을 반환하는 함수
function avg(numlist) {
    var result = 0;
    for(var i = 0, l = numList.length; i < l; i++){
        result += numList[i];
    }
    return result / numList.length;
}
console.log('avg([1,2,3,4,5,6]): ', avg([1,2,3,4,5,6]));

// function avg(numlist) {
//     var result = 0;
//     numList.forEach(function(item) {
//         result += item;
//     });
//     return result / numlist.length;
// }  

// 5. 문자를 배열로 전달받아 문자열 하나로 반환하는 함수
function oneString(strArr){
    var result = '';
    for(var i = 0, l = strArr.length; i < l ; i++){
        result +=strArr[i];
    }
    return result;
    // return strArr.join(''); // 자바스크립트 내장 메소드
}
console.log('oneString([\'aaa\', \'bbb\', \'ccc\']): ', oneString(['aaa','bbb','ccc']);

// 6. 세 수를 입력받아 큰 수를 반환하는 함수
function max3(a,b,c){
    return max(max(a,b), max(b,c));
}
console.log('max3(5, 11, 77): ', max3(5, 11, 77));
// Math.max()라는 방법도 있다..
//
function maxn(...n){
    console.log('n: ', Array.isArray(n));
    var max = n[0];
    for(var i = 1, l = n.length; i < l ; i++){
        if( max < n[i] ){
            max = n[i];
        }
    }
    return max;
}
console.log('maxn(2,3,4,5,6,7,8,11): ', maxn(2,3,4,5,6,7,8,11));
// 7. 전화번호를 입력하면 뒤에 4자리를 제외하고 *로 바꾸는 함수
function maskPhoneNum(phoneNum){
    var result = '';
    for(var i = 0, l = phoneNum.length; i < l; i++){
        if(l - i > 4){
            result += '*'
        } else {
            result = phoneNum[i];
        }
    }
    return result;
    // return phoneNum.replace(/[0-9](=?[0-9]{4}/g, '*')
}
console.log('maskPhoneNum(01012345678): ', maskPhoneNum('01012345678'));
// 8. Email validation
// 9. 비밀번호 문자열 validation 영어문자 숫자 포함


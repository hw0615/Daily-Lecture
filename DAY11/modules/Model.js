/*! Model.js @ 2017, yamoo9.net */

// Model.js는 데이터를 관리하는 객체를 생성하는 모듈을 가진 파일
// 관리할 데이터 유형은?  배열
// 배열은 변수에 할당
// 배열은 다수의 아이템(객체)을 가진다.
// 초기 값 설정: 배열은 초기 데이터(아이템)를 소유할 수 있다.
// 변경 가능: 추후에 아이템을 추가/제거/수정 할 수 있다.

// Model 함수를 정의
console.time('Model 속도차이');
var Model = function(global, FDS){
  // FDS 모듈이 존재하지 않을 경우 -> 오류 발생
  if ( !FDS ) { throw 'Model.js는 FDS 모듈에 의존하는 개발 파일입니다.' }

  return function(data) {
    // 관리할 초기 데이터 설정
    data = FDS.isArray(data) ? data : [];

    var _modelManager = {
      // 객체의 멤버 정의
      // 등록(추가)
      add: function(item, direction) {
        validateError(item, 'undefined', '인자를 전달해주세요');
        direction = direction === 'before' ? 'unshift' : 'push';
        data[direction](item);
      },
      // 변경(수정)
      // 제거
      // 현재 관리 데이터 가져오기
      getData: function() {
        return data;
      },
      getDataCount: function() {
        return data.length;
      }
    };

    return _modelManager;
  }

}(window, window.FDS);
console.timeEnd('Model 속도차이');
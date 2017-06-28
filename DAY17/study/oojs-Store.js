/*! oojs-Store.js @ 2017, yamoo9.net */

// 스토어(저장소) 데이터 관리 패턴을 적용한 라이브러리
// Store 생성자 함수
// var book_list = new Store();
// var music_collection = new Store();
// var travel_history = new Store();

// Store 객체를 사용해서 할 수 있는 일
// CRUD 기능
// 추가 Create
// 읽기 Read
// 쓰기(수정) Update
// 제거 Delete
// 소유(검증) has

// Store API
  // [private]
  // state

  // [public]
  // .pushData(data)
  // .readData([index])
  // .writeData(index, fixed_data)
  // .removeData([index])

// 생성 패턴 (Creation Pattern)
// 생성자(Constructor) + 프로토타입(Prototype) 패턴 사용
var Store = (function (global){
    'use strict';
    // 비공개 저장소
    var state = [];
    // 생성자 함수
    function Store(data) {
        this.init(data);
    }
    // 프로토타입 (공용 속성/메서드)
    Store.fn = Store.prototype;
    Store.fn.init = function(data) {
        if ( Array.isArray(data) ) {
            state = data;
        }
    };
    Store.fn.hasData = function(index) {
        return !!state[index];
    };
    Store.fn.readData = function(index) {
        if ( index === undefined) {
            return state;
        } else if ( typeof index === 'number' && index >= 0) {
            return state[index];
        } else {
            throw '0 이상의 숫자 값을 전달하거나, 아무런 값을 입력하지 않아야 합니다.';
        }
    };
    Store.fn.pushData = function(item) {
        item && state.push(item);
    };
    Store.fn.writeData = function(index, new_item) {
        if ( index && new_item && this.hasData(index) ) {
            state.splice(index, 1, new_item)
        }
    };
    Store.prototype.removeData = function(index) {
        if ( index && this.hasData(index) ) {
            state.splice(index, 1);
        }
    };
    return Store;
})(window);
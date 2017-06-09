/*! DOM.js @ 2017, yamoo9.net */

// ——————————————————————————————————————
// Document Object Model
// 문서 객체 모델
// ——————————————————————————————————————

// ---------------------------------------
// DOM Lv0 (Legacy DOM)
// 초창기 JavaScript 환경에서 사용되던 저수준의 문서 객체 모델
(function(global){
  'use strict';

  var document = global.document;

  // links
  document.links;
  // anchors
  document.anchors;
  // images
  document.images;
  // forms
  document.forms;

})(window);

// ---------------------------------------
// 과도기 DOM
// 표준 없이 기술 경쟁하던 시대
// 문서의 모든 객체에 접근이 가능해졌고,
// CSS를 사용하여 속성을 변경 제어할 수 있게 되었다.

// document.all()   VS   document.layers()


// ---------------------------------------
// DOM Lv1
// 기업 간 합의를 통해 표준화가 진행되던 시대

// doucment.getElementById() => Node
// (ElementNode || doucment).getElementsByTagName() => NodeList

// 이 사양은 프로그램 및 스크립트가 문서의 내용, 구조 및 스타일에 동적으로 접근(Access)하고
// 업데이트 할 수 있게 해주는 플랫폼 및 언어 중립적인 인터페이스 문서 객체 모델 레벨 1을 정의합니다.

// Document Object Model은 HTML 및 XML 문서를 표현하기 위한 표준 객체 집합으로,
// 이러한 객체를 결합 할 수 있는 표준 모델 및 객체 접근 및 조작을위한 표준 인터페이스를 제공합니다.

// 공급 업체는 독점적인 데이터 구조 및 API에 대한 인터페이스로 DOM을 지원할 수 있으며
// 콘텐츠 작성자는 제품 별 API가 아닌, 표준 DOM 인터페이스에 쓸 수 있으므로 웹에서 상호 운용성이 향상됩니다.

// DOM 사양의 목표는 XML 및 HTML을 위한 프로그래밍 방식의 인터페이스를 정의하는 것입니다.
// DOM Level 1 사양은 Core와 HTML의 두 부분으로 구분됩니다.

// Core DOM Level 1 섹션은 XML 문서를 표현하기 위한 확장된 인터페이스를 정의 할뿐만 아니라
// 모든 구조화 된 문서를 나타낼 수있는 저 수준의 기본 인터페이스 집합을 제공합니다.

// 이러한 확장 XML 인터페이스는 HTML 문서에 대한 접근만 제공하는 DOM 구현으로 구현할 필요는 없습니다.
// 핵심 섹션의 모든 기본 인터페이스를 구현해야합니다. 확장된 XML 인터페이스를 구현하는 호환 DOM 구현은
// HTML 인터페이스가 아닌 기본 핵심 인터페이스도 구현해야 합니다.

// HTML 레벨 1 섹션은 추가, 코어 레벨 1 섹션에서 정의된 기본 인터페이스와 함께 사용되는
// 더 높은 수준의 인터페이스로 HTML 문서를 보다 편리하게 볼 수 있습니다.

// HTML DOM의 호환 구현은 HTML 인터페이스뿐만 아니라 모든 기본 Core 인터페이스를 구현합니다.


// ---------------------------------------
// DOM Lv2
// 화합이 무너지고 기업간 경쟁이 다시 점화되는 시기
// Events 모델 -> 업그레이드

// Microsoft 사의 기술 문서
// 이벤트 버블링만 지원
// window.event
// window.event.srcElement
// .attachEvent()
// .detachEvent()

// W3C 표준 기술 문서
// 이벤트 캡쳐링/버블링 모두 지원
// 함수 내에 event 객체를 전달
// event.target
// .addEventListener()
// .removeEventListener()
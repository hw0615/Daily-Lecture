/*! BOM.js @ 2017, yamoo9.net */

// ——————————————————————————————————————
// Browser Object Model
// 브라우저 객체 모델
// 브라우저를 구성하는 객체들의 관계도
// 웹 브라우저 창 세선 (window {})
// window 객체는 전역 객체이다.
// 사용자가 창(탭)을 생성하면
// 내부적으로는 new Window(); // window {}
// ——————————————————————————————————————

// 전역 객체: window 객체
// console.log(window);

// 스크린 객체
// 속성(메서드)
// 사용자가 보는 화면의 정보를 가진 객체
// 가로(너비), 세로(높이) 정보
// 가용(Avail) 가능한 가로/세로 정보
// 컬러 심도 정보
window.screen

// 로케이션 객체
// location.protocol https://
// location.host www.google.co.kr
// location.search ?gfe_rd=cr&ei=yBY6WfKrJ6WL8Qf-oKj4Dw
// location.hash #newwindow=1&q=%EC%B4%88%EB%B3%B5
// location.href https://www.google.co.kr/?gfe_rd=cr&ei=yBY6WfKrJ6WL8Qf-oKj4Dw#newwindow=1&q=%EC%B4%88%EB%B3%B5
window.location

// 히스토리 객체
var his = window.history;
// 메서드
// his.back();
// his.forward();
// his.go();

// 내비게이터 객체
// 브라우저 스니핑
window.navigator
// 온라인/오프라인 유무 (불리언 값 반환)
function isOnline() {
  return window.navigator.onLine;
}
function isWindows() {
  return window.navigator.platform.toLowercase().indexOf('win') > -1;
}
function isMac() {
  return window.navigator.platform.toLowercase().indexOf('mac') > -1;
}

// 브라우저 식별
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent/Firefox
// https://msdn.microsoft.com/en-us/library/ms537503(v=vs.85).aspx
// https://dev.opera.com/blog/opera-user-agent-strings-opera-15-and-beyond/
function whatIsBrowser() {
  var ua = window.navigator.userAgent.toLowerCase();
  var browsers = ['chrome', 'safari', 'firefox', 'ie', 'opera'];
  var check_browsers = {
    chrome: false,
    safari: false,
    firefox: false,
    ie: false,
    opera: false
  };
  for ( var i=0, l=browsers.length; i<l; ++i ) {
    var browser = browsers[i];
    switch(browser) {
      case 'chrome':
        check_browsers.chrome = ua.indexOf(browser + '/') > -1;
      break;
      case 'safari':
        check_browsers.safari = ua.indexOf('chrome/') === -1 && ua.indexOf(browser + '/') > -1;
      break;
      case 'firefox':
        check_browsers.firefox = ua.indexOf(browser + '/') > -1;
      break;
      case 'ie':
        check_browsers.ie = ua.indexOf('rv:11.0') > -1 || ua.indexOf('trident/') > -1 || ua.indexOf('msie/') > -1;
      break;
      case 'opera':
        check_browsers.opera = ua.indexOf('opr/') > -1;
      break;
    }
  }
  return check_browsers;
}

function isChrome() {
  return window.navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
}


// 도큐멘트 객체
window.document
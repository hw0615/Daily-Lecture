/*! photo.showcase.js @ 2017, yamoo9.net */
(function(global, _){
  'use strict';

  // DOM 제어를 목적으로 하는 문서 객체를 탐색 찾아 변수에 할당.
  var container     = _.selector('.photo-showcase-container');
  var showcase      = _.selector('.photo-showcase', container);
  var showcase_view = _.selector('img', showcase);
  var indicators    = _.selectorAll('.photo-showcase-indicator', container);

  var setPhotoShowcase = function() {
    var indicator_img = _.selector('img', this);
    var index = indicator_img.src.split('=')[1];
    var path = showcase_view.src.split('=')[0] + '=' + index;
    showcase_view.src = path;
    return false;
  };

  // 찾은 대상(문서 객체)의 이벤트 속성에 함수를 연결
  for ( var i=0, l=indicators.length; i<l; ++i ) {
    var indicator = indicators.item(i);
    indicator.onclick = setPhotoShowcase;
  }

})(window, window.FDS);
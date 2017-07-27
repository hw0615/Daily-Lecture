<script>
import Vue from 'vue';
// EventBus {} 생성
// 이벤트 수신 .$on(id, callback)
// 이벤트 수신 제거 .$off()
// 1회 이벤트 수신 .$once()
// 이벤트 발신 .$emit(id, payload)
const EventBus = new Vue();
// 이벤트 버스 쉬운 예제
// https://codepen.io/yamoo9/pen/XaJwBd
export default EventBus;
</script>
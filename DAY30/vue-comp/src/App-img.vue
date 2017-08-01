<template lang="pug">
  #app
    img(:src="vue.path", :alt="vue.label")

    //- 직접 에셋 속성을 설정하는 경우, assets/ 디렉토리에서 찾아야 이미지 출력
    //- file-loader를 통해 아래와 같이 처리되기 때문
    //- /dist/logo.png?82b9c7a5a3f405032b1db71a25f67021
    //- img(src="./assets/logo.png", :alt="vue.label")

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      vue: {
        // 동적 속성 바인딩 시에는 src/ 디렉토리에서 찾아야 이미지 출력
        // file-loader를 사용하지 않고, 직접 속성 값을 설정하기 때문
        path: './src/assets/logo.png',
        label: 'Vue.js'
      }
    }
  }
}
</script>

<style lang="sass">
  html
    font-size: 100%
    background: #fff
  body
    margin: 0
</style>

<template lang="pug">
  .app-layout
    header.app-header
      //- 이름이 있는 슬롯
      slot(name="header" brand="Brand is Awesome.")
        h1.app-brand 
          a
            img(
              :src="brand.image" 
              :alt="brand.desc"
              style="width:100%;height;auto"
            )
    main.app-main
      //- 기본 슬롯
      slot
    footer.app-footer
      slot(name="footer")
        address {{ copyright }}

</template>

<script>
export default {
  data(){
    return {
      brand: {
        image: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwi6rc6Gw6bVAhXqg1QKHcMfC1AQjRwIBg&url=http%3A%2F%2Fblog.naver.com%2FPostView.nhn%3FblogId%3Djsu05130100%26logNo%3D220996711128%26parentCategoryNo%3D%26categoryNo%3D88%26viewDate%3D%26isShowPopularPosts%3Dtrue%26from%3Dsearch&psig=AFQjCNGk00aEGEGNDktAY1Zx7mttUGp4SA&ust=1501143926714578',
        desc: 'Mcdonalds'
      },
      copyright: 'Copyright &copy; 2017 |  Mcdonalds'
    }
  }
}
</script>


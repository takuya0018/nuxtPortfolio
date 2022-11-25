<template>
  <main :style="{paddingTop: paddingHead}">
    <TopHeadMv />
    <section id="about_content_wrap" class="about_content_wrap">
      <h2 class="section_title right_line">
        <span class="about_first_txt">A</span>bout
      </h2>
      <div class="about_inner_message">
        <div class="bg_white">
          <figure class="about_my_photo">
            <img src="~/assets/image/about_img@2x.jpg" alt="自画像">
          </figure>
          <p class="about_message ani">
            固定概念に囚われない、<br>楽しい・面白いを大切にしています。<br>お客様とのコミュニケーションを大切にし<br>情報整理から問題点を洗い出し、<br>わくわく出来るようなWEBサイトを制作します。
          </p>
        </div>
      </div>
    </section>
    <TopServiceContent />
    <TopWorksContent />
  </main>
</template>

<script>
import TopHeadMv from '../components/TopHeadMv.vue'
import TopServiceContent from '../components/TopServiceContent.vue'
import TopWorksContent from '../components/TopWorksContent.vue'

export default {
  name: 'IndexPage',
  components: {
    TopHeadMv,
    TopServiceContent,
    TopWorksContent
  },
  data () {
    return {
      paddingHead: '118'
    }
  },
  mounted () {
    const dom = document.getElementsByTagName('header')
    this.paddingHead = dom[0].offsetHeight + 'px'
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .about_content_wrap{
    margin: 107px auto 160px;
    max-width: 920px;
    width: 100%;
    @media screen and (max-width: 767px) {
      margin: 80px auto 100px;
    }
    .section_title {
      font-family: var(--title-fonts);
      font-size: 3.8rem;
      line-height: 1.2;
      letter-spacing: 1rem;
      margin-right: -1%;
      color: #666666;
      width: 100%;
      display: inline-block;
      @media screen and (max-width: 767px) {
        font-size: 42px;
        letter-spacing: .5rem;
      }
      .about_first_txt {
        color: #ffbb5b;
      }
    }
    .about_inner_message {
      max-width: 920px;
      margin: 0 auto;
      position: relative;
      padding: 8px;
      background: rgb(255,158,21);
      background: linear-gradient(90deg, rgba(255,158,21,1) 0%, rgba(122,201,67,1) 50%, rgba(63,169,245,1) 100%);
      @media screen and (max-width: 767px) {
        margin: 130px 20px 0;
      }
      .bg_white {
        background: #fff;
        display: flex;
        justify-content: space-between;
        padding: 70px 10px 80px;
        position: relative;
        @media screen and (max-width: 767px) {
          padding: 220px 10px 50px;
        }
        .about_my_photo {
          width: 295px;
          box-shadow: 25px 25px 53px -5px #8f8f8f;
          position: absolute;
          top: -100px;
          left: -145px;
          @media screen and (max-width: 767px) {
            width: 170px;
            top: -80px;
            left: 50%;
            transform: translateX(-50%);
          }
        }
        .about_message {
          font-family: var(--title-fonts);
          font-weight: bold;
          font-size: 1.3rem;
          line-height: 3;
          letter-spacing: .6px;
          margin: 0 0 0 auto;
          padding-left: 190px;
          // opacity: 0;
          @media screen and (max-width: 767px) {
            padding-left: 0;
            width: 100%;
            font-size: 1rem;
            line-height: 2;
            text-align: center;
          }
        }
      }
    }
  }
  /** work **/
  .right_line {
    text-align: right;
  }
</style>

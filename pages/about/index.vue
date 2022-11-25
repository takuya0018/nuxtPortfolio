<template>
  <main id="about_page" class="about_page" :style="{ paddingTop: paddingHead}">
    <figure class="about_mv">
      <img class="pc-show" src="@/assets/image/about_mv.jpg" alt="aboutページ"><img class="sp-show" src="@/assets/image/about_mv_sp.jpg" alt="aboutページ">
    </figure>
    <h2 class="page_title">
      <span class="main_txt">ABOUT</span><span class="sub_box"><span class="sab_txt">ABOUT</span></span>
    </h2>
    <section class="about_content">
      <h2 class="name">
        TAKUYA KIKUTA
      </h2>
      <p class="closs_txt">
        東京にてフリーランスのWeb制作をしております。
      </p>
      <p class="content_inner">
        1986年、熊本県球磨郡あさぎり町（旧上村）生まれ。<br><br>2017年からWEB制作会社でアシスタントとしてデザイン・コーディングなどの業務を行う。<br>大手芸能事務所をはじめ、鉄道会社などに参画しながら個人でも活動中。<br>「WEBで皆が豊かに。。。」をコンセプトに色々な提案や個人や企業様・地域に貢献していきます。<br>趣味はゲームや最新の技術を勉強したり、海外・国内旅行。人と話す事がとても好きです。「ばかだな。」と思われる事もやるのも好き<small>(＊常識の範囲で。)</small>
      </p>
    </section>
    <section class="access_content">
      <div class="inner_access">
        <h3 class="my_img">
          <img src="@/assets/image/profile.jpg" alt="菊田琢也">
        </h3>
        <div class="access_box">
          <table>
            <tr>
              <td class="tb_title">
                名称：
              </td>
              <td>くまなみ</td>
            </tr>
            <tr>
              <td class="tb_title">
                所在地：
              </td>
              <td>東京都杉並区</td>
            </tr>
            <tr>
              <td class="tb_title">
                事業内容：
              </td>
              <td>Web制作やSNSなどにおけるディレクション、<br>デザイン、コーディング、HP改善・改修</td>
            </tr>
            <tr>
              <td class="tb_title">
                スキル・ツール：
              </td>
              <td>
                <p>HTML/Pug/CSS/SCSS/JavaScript/jQuery<br>/Vue.js/PHP/git/SourceTree/Photoshop<br>/WordPress...</p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </section>
    <!-- <section class="contact_bnt"><a href="../index.php#contact_content_wrap">お問い合わせはこちら</a></section> -->
  </main>
</template>

<script>
export default {
  name: 'AboutIndex',
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
/* -------------------------
* about
---------------------------*/
#about_page {
  padding-top: 148px;
  position: relative;
  figure.about_mv {
    margin-top: 31px;
    position: relative;
    // z-index: 2;
  }
  .page_title {
    font-family: var(--title-fonts);
    font-size: 70px;
    width: 100%;
    max-width: 980px;
    margin: 0 auto;
    line-height: 1;
    position: absolute;
    top: 118px;
      right: 0;
    left: 0;
    text-align: right;
    .main_txt {
      color: #666;
    }
    .sub_box {
      position: absolute;
      bottom: 0;
      left: 0;
      top: 44%;
      overflow: hidden;
      right: 0;
      .sab_txt {
        color: #ffffff;
        position: absolute;
        top: -78%;
        right: 0;
        overflow: hidden;
      }
    }
  }
  section.about_content {
    width: 100%;
    max-width: 980px;
    margin: 0 auto;
    padding: 160px 0 100px;
    @media screen and (max-width: 767px) {
      padding: 100px 20px 60px;
    }
    h2.name {
      font-family: var(--title-fonts);
      font-size: 57px;
      display: block;
      line-height: 1;
      letter-spacing: 4px;
      @media screen and (max-width: 767px) {
        font-size: calc( 57px / 2 );
        letter-spacing: 1px;
      }
      &::before {
        content: "菊田 タクヤ";
        display: block;
        line-height: 2;
        font-size: 40px;
        letter-spacing: 0;
        @media screen and (max-width: 767px) {
          font-size: 20px;
        }
      }
    }
    .closs_txt {
      font-size: 42px;
      font-family: var(--main-fonts);
      line-height: 2;
      @media screen and (max-width: 767px) {
        font-size: calc( 42px / 2 );
        line-height: 1.5;
        margin-top: 20px;
      }
    }
    .content_inner {
      margin-top: 140px;
      font-family: var(--main-fonts);
      font-size: 20px;
      line-height: 3;
      @media screen and (max-width: 767px) {
        margin-top: 100px;
        line-height: 2;
        font-size: 14px;
      }
    }
  }
  section.access_content {
    border-top: 3px solid #666;
    width: 100%;
    max-width: 980px;
    margin: 0 auto;
    padding: 140px 0;
    @media screen and (max-width: 767px) {
      padding: 100px 20px 60px;
      border-top: 1px dashed #666;
    }
    .inner_access {
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: 767px) {
        flex-direction: column;
      }
      h3.my_img {
        width: 200px;
        overflow: hidden;
        order: 2;
        @media screen and (max-width: 767px) {
          order: 1;
          margin: 0 auto;
        }
      }
      .access_box {
        line-height: 2;
        order: 1;
        @media screen and (max-width: 767px) {
          order: 2;
          margin: 40px 0 0;
        }
        table {
          width: 700px;
          @media screen and (max-width: 767px) {
            width: 100%;
          }
          tr {
            vertical-align: top;
            @media screen and (max-width: 767px) {
              display: flex;
              flex-direction: column;
            }
            td {
              padding: 10px 20px;
              @media screen and (max-width: 767px) {
                padding: 0;
              }
              &:not(.tb_title) {
                margin-bottom: 10px;
                padding-left: 20px;
                font-size: 14px;
              }
            }
            .tb_title {
              font-weight: bold;
              @media screen and (max-width: 767px) {
                background-color: #666;
                color: #fff;
                padding: 0px 10px;
              }
            }
          }
        }
      }
    }
  }
  section.contact_bnt {
    width: 100%;
    max-width: 980px;
    margin: 0 auto;
    text-align: center;
    a {
      display: inline-block;
      height: 54px;
      text-align: center;
      text-decoration: none;
      outline: none;
      padding: 0 2.5%;
      background-color: #d61d3f;
      border: 2px solid #d61d3f;
      color: #fff;
      line-height: 50px;
      font-weight: bold;
      width: 50%;
      font-size: 14px;
      letter-spacing: 0.2em;
      margin-bottom: 125px;
      cursor: pointer;
      -webkit-transition: all 0.5s;
      transition: all 0.5s;
      @media screen and (max-width: 767px) {
        margin-bottom: 100px;
      }
      &:hover {
        background-color: #ffffff;
        color: #d61d3f;
      }
    }
  }
}
</style>

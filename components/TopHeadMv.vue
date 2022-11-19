<template>
  <div class="img_content_wrap">
    <ul class="name_block_wrap">
      <li class="block_name_01">
        <ul class="block_list01_wrap">
          <li class="job_name">
            Codeing
          </li>
          <li class="my_name">
            Takuya
          </li>
        </ul>
      </li>
      <li class="block_name_02">
        <ul class="block_list01_wrap">
          <li class="job_name">
            Web Desiger
          </li>
          <li class="my_name">
            Kikuta
          </li>
        </ul>
      </li>
    </ul>
    <div class="top_mv_message_wrap">
      <p class="mv_inner_message">
        田舎から都会・世界中へ<br>人々の笑顔をインターネットに乗せて<br>WEBサイトで人と世界を繋ぎたい。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopHeadMv'
}
</script>

<style lang="scss" scoped>
.img_content_wrap {
    width: 100%;
    height: 555px;
    background-image: url(~/assets/image/mainHeader_03@2x.jpg);
    background-position: center bottom;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    @media screen and (max-width: 767px) {
      height: 73vh;
    }
    .name_block_wrap {
      display: flex;
      justify-content: space-between;
      width: 720px;
      margin: 0 auto;
      position: absolute;
      top: 35%;
      left: 50%;
      transform: translate(-50%, -50%);
      @media screen and (max-width: 767px) {
        width: 180px;
        height: 135px;
        top: 30%;
        left: 3%;
        margin: 0;
        transform: translate(0%);
        flex-wrap: wrap;
        flex-direction: column;
        position: relative;
      }
      .block_name_02 {
        @media screen and (max-width: 767px) {
          position: absolute;
          bottom: 0;
          left: 30%;
        }
      }
      .job_name {
        font-size: 20px;
        margin-right: 10px;
        letter-spacing: 0.05rem;
        color: #fff;
        text-align: right;
        font-family: var(--main-fonts);
        @media screen and (max-width: 767px) {
          font-size: 12px;
          text-align: left;
        }
      }
      .my_name {
        font-size: 64px;
        letter-spacing: .4rem;
        line-height: 1;
        color: #ffffff;
        text-shadow: 4px 0px 3px rgba(15, 37, 63, 0.8);
        font-family: var(--title-fonts);
        @media screen and (max-width: 767px) {
          font-size: 40px;
        }
      }
    }
    .top_mv_message_wrap {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(102, 102, 102, .3);
      display: flex;
      align-items: center;
      padding: 20px 0;
      @media screen and (max-width: 767px) {
        top: 0;
        right: 0;
        bottom: 0;
        left: 70%;
      }
      .mv_inner_message {
        color: #fff;
        width: 63.5%;
        margin: 0 auto;
        font-size: 20px;
        letter-spacing: .2rem;
        line-height: 1.75;
        @media screen and (max-width: 767px) {
          width: 90%;
          font-size: 16px;
          writing-mode: vertical-rl;
          display: flex;
          align-items: center;
        }
      }
    }
  }
</style>

<template>
  <section id="works_content_wrap" class="works_content_wrap">
    <article class="works_inner">
      <h2 class="section_title left_line">
        <span class="works_first_txt">W</span>orks
      </h2>
      <ul class="work_content">
        <li v-for="(item, index) in items" :key="index" class="work_item ani">
          <h3 class="items_title">
            {{ item.title }}
            <a :href="item.link" target="_blank">
              <figure class="works_coding">
                <img :src="item.image" :alt="item.alt">
              </figure>
              <p
                class="works_coding_caption"
                v-html="item.contentTxt"
              />
            </a>
          </h3>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>

export default {
  name: 'TopWorksContent',
  data () {
    return {
      items: [
        {
          title: 'CODING',
          link: 'https://www.tobu.co.jp/sl/',
          image: require('@/assets/image/toub/tobu_sltaijyu.jpg'),
          alt: 'SL大樹',
          contentTxt: '鉄道会社でフロントエンド・<br>コーダーとして制作'
        },
        {
          title: 'CODING',
          link: 'https://www.sumida-machi.or.jp/',
          image: require('@/assets/image/toub/sumidamachizukuri.jpg'),
          alt: '墨田まちづくり公社',
          contentTxt: '鉄道会社でフロントエンド・<br>コーダーとして制作'
        },
        {
          title: 'DESING/DESING',
          link: 'https://shop.mu-mo.net/',
          image: require('@/assets/image/avex/yoshikiWorks.jpg'),
          alt: 'ミューモ',
          contentTxt: '大手音楽事務所でバナーデザイン・<br>WEBサイトデザイン・サイトを制作'
        },
        {
          title: 'DESING',
          link: 'https://shop.mu-mo.net/',
          image: require('@/assets/image/avex/shuta1280_800.jpg'),
          alt: 'ミューモ',
          contentTxt: '大手音楽事務所でバナー広告を作成'
        },
        {
          title: 'CODING',
          link: 'https://shop.mu-mo.net/',
          image: require('@/assets/image/avex/wasta.jpg'),
          alt: 'わーすた',
          contentTxt: '大手音楽事務所でバナーデザイン・<br>WEBサイトデザイン・サイトを制作'
        },
        {
          title: 'DESING',
          link: 'https://shibuyastream.jp/',
          image: require('@/assets/image/firstvision/shibuyastream.jpg'),
          alt: '渋谷ストリーム',
          contentTxt: '制作会社でアシスタントとして<br>ワイヤーフレーム作成'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .works_content_wrap {
    position: relative;
    &::after {
      position: absolute;
      content: "";
      background: #8f8f8f;
      height: 2px;
      top: 90px;
      right: 0;
      width: 60%;
      max-width: 1130px;
      @media screen and (max-width: 767px) {
        top: 50px;
        width: 100%;
        background: #77c066;
        height: 3px;
      }
    }
    .works_inner {
      max-width: 920px;
      width: 100%;
      margin: 0 auto;
      padding: 46px 0;
      @media screen and (max-width: 767px) {
        padding: 0;
        margin: 100px auto;
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
        .works_first_txt {
          color: #77c066;
        }
      }
    }
    .work_content {
      display: flex;
      justify-content: space-between;
      margin-top: 100px;
      flex-wrap: wrap;
      @media screen and (max-width: 767px) {
        margin-top: 50px;
        padding: 0 30px;
      }
      .work_item {
        width: 48%;
        margin-bottom: 60px;
        opacity: 1;
        @media screen and (max-width: 767px) {
          width: 100%;
          &:nth-last-of-type(1) {
            margin-bottom: 0;
          }
        }
        .works_coding {
          width: 100%;
          height: clamp(160px, 165px, 200px);
          outline: 1px solid #cff3d4;
          overflow: hidden;
          box-shadow: 27px 27px 0 -5px #cff3d4;
          position: relative;
          margin: 10px 0 30px;
          @media screen and (max-width: 767px) {
            box-shadow: 14px 14px 0 -2px #cff3d4;
          }
        }
        .works_coding_caption {
          margin: 30px auto 0;
          font-family: var(--main-fonts);
          font-weight: 500;
          font-size: 16px;
          color: rgb(79, 79, 79);
          display: flex;
          justify-content: center;
          text-align: center;
        }
      }
    }
  }
</style>

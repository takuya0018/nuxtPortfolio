<!-- eslint-disable vue/no-v-html -->
<template>
  <section id="service_content_wrap" class="service_content_wrap">
    <h2 id="targe" v-scroll="handleScroll" class="section_title center_line">
      <span class="service_first_txt">S</span>ervice
    </h2>
    <ul class="service_item_list">
      <li v-for="item in contents" :key="item.id" class="service_items item_list01">
        <h3 class="service_name">
          {{ item.title }}
        </h3>
        <p class="item_name">
          {{ item.subtitle }}
        </p>
        <div class="icon_wrap" :class="item.iconColor">
          <figure class="item_logo_wrap">
            <img :src="item.images" alt="ディレクション">
          </figure>
        </div>
        <p class="service_txt" v-html="item.itemstext" />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'TopServiceContent',
  data () {
    return {
      contents: [
        {
          title: 'DIRECTION',
          subtitle: 'ディレクション',
          iconColor: 'note_wrap',
          images: require('@/assets/image/direction_logo.png'),
          itemstext: 'お客様の要望を聞き、問題点と方向性を決めさせて頂きます。<br>その上で効果的なプランを作成しご提案いたします。サイトを制作するには最初のステップになり、とても重要な場所になります。何を必要とし必要で無いかを洗い出し、費用対効果の高いWebサイトを作る上での重要な箇所になります。'
        },
        {
          title: 'WEB SITE DESIGN',
          subtitle: 'デザイン',
          iconColor: 'pencil_wrap',
          images: require('@/assets/image/design_logo.png'),
          itemstext: 'ディレクションに沿ったデザインを作成いたします。<br>この場所で大まかな見た目、完成にほぼほぼ近いデザインになります。ユーザーインターフェースを考え使う人が分かりやすいサイトデザインにします。定時させていただいたデザインの修正などはここで行います。'
        },
        {
          title: 'CODING',
          subtitle: '制作',
          iconColor: 'dating_wrap',
          images: require('@/assets/image/coding_logo.png'),
          itemstext: 'デザインで作成した通りに制作・プログラムしていきます。<br>ここでは実際にサイト上に公開する最終段階になります。html/cssや動きのあるコンテンツをjavascriptで作成していきます。なるべく編集やカスタマイズしやすい様に心掛け作成しています。こちらが終わると納期になります。'
        }
      ]
    }
  },
  // props: {
  //   title: {
  //     type: String,
  //     required: true
  //   },
  //   subtitle: {
  //     type: String,
  //     required: true
  //   },
  //   img: {
  //     type: String,
  //     required: true
  //   },
  //   itemstext: {
  //     type: String,
  //     required: true
  //   }
  // },
  methods: {
    handleScroll (evt, el) {
      // const targe = document.getElementById('targe')
      // const kyori = el.getBoundingClientRect()
      // console.log(el.getBoundingClientRect().top)
      const elementTop = el.getBoundingClientRect().top
      const scrolled = window.scrollY
      if (scrolled >= (elementTop + 1000)) {
        el.setAttribute(
          'style',
          'opacity: 1; transform: translate3d(0, -10px, 0)'
        )
        // console.log('50こえた')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
/** service **/
  .service_content_wrap {
    margin: 107px auto 160px;
    @media screen and (max-width: 767px) {
      margin: 100px auto 80px;
    }
    h2 {
      background: #b2ddfb;
      padding: 46px 0;
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
        padding: 20px 0;
      }
      .service_first_txt {
        color: #0082ff;
      }
    }
    .service_item_list {
      display: flex;
      justify-content: space-between;
      max-width: 920px;
      margin: 80px auto;
      @media screen and (max-width: 767px) {
        padding: 0 40px;
        margin: 50px auto;
        flex-wrap: wrap;
      }
      .service_items {
        width: 30%;
        @media screen and (max-width: 767px) {
          width: 100%;
          margin-bottom: 60px;
          &:nth-last-of-type(1) {
            margin-bottom: 0;
          }
        }
        .service_name {
          font-size: 24px;
          text-align: center;
          font-family: var(--title-fonts);
          color: #5d5d5d;
          letter-spacing: 1px;
        }
        .item_name {
          color: #5d5d5d;
          text-align: center;
          margin: 30px 0;
          font-family: var(--title-fonts);
          letter-spacing: 2px;
          @media screen and (max-width: 767px) {
            margin: 10px 0 20px;
          }
        }
        .icon_wrap {
          width: 190px;
          height: 190px;
          border: 5px solid;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 60px auto 45px;
          @media screen and (max-width: 767px) {
            width: 150px;
            height: 150px;
            margin: 30px auto 30px;
            border: 2px solid;
          }
          .item_logo_wrap {
            width: 100px;
            @media screen and (max-width: 767px) {
              width: 80px;
            }
          }
        }
        .note_wrap {
          border-color: #ffbb5b;
        }
        .pencil_wrap {
          border-color: #77c066;
        }
        .dating_wrap {
          border-color: #0082ff;
        }
      }
    }
  }
</style>

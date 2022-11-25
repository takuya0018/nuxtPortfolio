<template>
  <header class="w-full absolute md:static bg-black px-2 py-2 z-50">
    <div class="flex">
      <div
        class="mqContents"
      >
        <h1>
          <nuxt-link to="/" class="">
            <NewLogoSvg />
          </nuxt-link>
        </h1>
      </div>
      <nav>
        <ul class="md:flex md:justify-end md:items-end">
          <li v-for="(item, index) in lists" :key="index">
            <a :href="item.link">{{ item.txt }}</a>
            <p>{{ item.isClass }}</p>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import NewLogoSvg from '@/assets/svg/logo.svg'

export default {
  name: 'BaseHeaderMenu',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    NewLogoSvg
  },
  data () {
    return {
      lists: [
        {
          link: '/about/',
          txt: 'About',
          elementLink: ''
        },
        {
          link: '../#service_content_wrap',
          txt: 'Service'
          // elementLink: '#service_content_wrap'
        },
        {
          link: '../#works_content_wrap',
          txt: 'Work'
          // elementLink: '#works_content_wrap'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.abc {
  color: red;
}
header {
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
  position: fixed;
  z-index: 999;
  background-color: white;
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1067px;
    margin: 0 auto;
    .mqContents {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin: 0 auto;
      h1 {
        width: 80px;
        line-height: 0;
      }
    }
    .mqClick {
      display: none;
      @media screen and (max-width: 766px) {
        display: block;
      }
      button {
        cursor: pointer;
        background-color: transparent;
      }
    }
    ul {
      display: flex;
      font-family: var(--title-fonts);
      width: 322px;
      justify-content: space-between;
      li {
        &:nth-of-type(1) {
          a {
            &:hover {
              color: #ffbb5b;
              transition: all .4s;
            }
          }
        }
        &:nth-of-type(2) {
          a {
            &:hover {
              color: #0082ff;
              transition: all .4s;
            }
          }
        }
        &:nth-of-type(3) {
          a {
            &:hover {
              color: #77c066;
              transition: all .4s;
            }
          }
        }
        &:nth-of-type(4) {
          a {
            &:hover {
              color: #666666;
              transition: all .4s;
            }
          }
        }
        a {
          color: #3e3e3e;
          position: relative;
          display: inline-block;
          text-decoration: none;
          transition: all 1s;
          font-size: 18px;
          &::after {
            position: absolute;
            bottom: -4px;
            left: 0;
            content: '';
            width: 100%;
            height: 1px;
            background: #333;
            transform: scale(0, 1);
            transform-origin: right top;
            transition: transform .3s;
          }
          &:hover {
            &::after {
              transform-origin: left top;
                transform: scale(1, 1);
            }
          }
        }
      }
    }
  }
}
</style>

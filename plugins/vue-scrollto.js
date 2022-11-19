import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
  duration: 700, // スクロールアニメーションの長さ（ミリ秒）
  easing: [0, 0, 0.1, 1], // easingとはエフェクトの動きを加速/減速させるためのもの
  offset: -118 // 遷移後の位置調整
})

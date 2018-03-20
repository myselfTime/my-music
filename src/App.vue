<template>
  <div id="app">
    <div class="gxs-vh">
        <transition name="custom-classes-transition" enter-active-class="animated slideInDown fast"
                        leave-active-class="animated slideOutUp" mode="out-in">
              <search v-if="isSearch"></search>
        </transition>
        <transition name="custom-classes-transition" enter-active-class="animated slideInDown fast"
                        leave-active-class="animated slideOutUp" mode="out-in">
              <poster v-if="isPoster"></poster>
        </transition>
        <transition name="custom-classes-transition" enter-active-class="animated slideInDown fast"
                        leave-active-class="animated slideOutUp" mode="out-in">
              <recommend v-if="isRecommend"></recommend>
        </transition>
    </div>
  </div>
</template>

<script>
  import Search from './components/Search'
  import Poster from './components/Poster'
  import Recommend from './components/Recommend'
export default {
  name: 'app',
  data () {
    return {
      isSearch: true,
      isPoster: true,
      isRecommend: true
    }
  },
   components: {
        Search ,Poster ,Recommend
      },
}
</script>

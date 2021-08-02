<template>
  <div
    class="top-bar"
    :class="{ 'hidden-navbar': !showNavbar }"
  >
    <ul>
      <span>LOGO</span>

      <div
        @click="toggle"
        class="sidebarToggle hamburger hamburger--spin"
        :class="{ isActive: drawer }"
        type="button"
      >
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  name: 'TopBar',
  data () {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0
    }
  },

  methods: {
    ...mapMutations({ toggle:  "drawer/toggle" }),

    onScroll () {
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    }
  },

  computed: {
    ...mapGetters({ drawer:  "drawer/getDrawerState" })
  },

  mounted () {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
    const viewportMeta = document.createElement('meta')
    viewportMeta.name = 'viewport'
    viewportMeta.content = 'width=device-width, initial-scale=1'
    document.head.appendChild(viewportMeta)
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },

}

</script>

<style lang="scss">
  .top-bar {
    align-items: center;
    background-color: var(--aside-color);
    display: flex;
    height: 50px;
    left: 0;
    padding: 0 25px;
    position: fixed;
    top: 0;
    width: calc(100% - 50px);
    z-index: 100;
    @media (min-width: 720px) {
      display: none;
    }


    ul {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }
</style>

<template>
  <div class="top-bar">
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

  methods: {
    ...mapMutations({ toggle:  "drawer/toggle" })
  },
  computed: {
    ...mapGetters({ drawer:  "drawer/getDrawerState" })
  }
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
    z-index: 2;
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

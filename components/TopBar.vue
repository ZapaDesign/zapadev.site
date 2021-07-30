<template>
  <div class="top-bar">
    <ul>
      <span>LOGO</span>

      <div
        @click="toggle"
        class="sidebarToggle hamburger hamburger--spin"
        :class="{ isActive: isActive }"
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
export default {
  name: 'TopBar',
  data: () => ({
    openerText: 'Open',
    isOpen: false,
    isActive: false,
  }),
  methods: {
    open() {
      this.openerText = 'Close'
      this.isOpen = true
      this.isActive = true
    },
    close() {
      this.openerText = 'Open'
      this.isOpen = false
      this.isActive = false
    },
    toggle() {
      if (this.isOpen) {
        this.close()
      } else {
        this.open()
      }
    }
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

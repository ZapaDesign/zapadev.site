<template>
  <div class="top-bar">
    <ul>
      <span>LOGO</span>
      <span>MOD</span>
      <span>LANG</span>
      <span>NAV</span>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TopBar'
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

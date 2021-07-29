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
    padding: 0 15px;
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

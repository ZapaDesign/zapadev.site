<template>
  <div class="bottom-bar">
    <nuxt-link :to="'/' + $i18n.locale + '/aboutme'">
      <div class="bottom-bar__item">
        <svg>
          <use xlink:href="../assets/icons.svg#icon_about"></use>
        </svg>
      </div>
    </nuxt-link>

    <nuxt-link :to="'/' + $i18n.locale + '/skills'">
      <div class="bottom-bar__item">
        <svg>
          <use xlink:href="../assets/icons.svg#icon_skills"></use>
        </svg>
      </div>
    </nuxt-link>

    <nuxt-link :to="'/' + $i18n.locale + '/portfolio'">
      <div class="bottom-bar__item">
        <svg>
          <use xlink:href="../assets/icons.svg#icon_portfolio"></use>
        </svg>
      </div>
    </nuxt-link>

    <nuxt-link :to="'/' + $i18n.locale + '/blog'">
      <div class="bottom-bar__item">
        <svg>
          <use xlink:href="../assets/icons.svg#icon_blog"></use>
        </svg>
      </div>
    </nuxt-link>

  </div>
</template>

<style lang="scss">
  .bottom-bar {
    background-color: var(--aside-color);
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: space-around;
    bottom: 0;
    width: calc(100% - 50px);
    padding: 0 25px;
    height: 50px;
    @media (min-width: 720px) {
      display: none;
    }

    &__item {
      svg {
        width: 20px;
        height: 20px;
        fill: var(--main-text-color);
      }
    }
  }
</style>

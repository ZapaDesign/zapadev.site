<template>
  <div class="page portfolio">
    <header>
      <h1 class="slideLeft">
        {{ $t('portfolio.title') }}
        <span>
          {{ $t('portfolio.description') }}
        </span>
      </h1>
    </header>
    <div class="grid_container">
      <nuxt-link
        v-for="(post, $index) in posts"
        :key="`post-${$index}`"
        :to="localePath(post.path)"
        :class="'portfolio_item_' + $index"
        class="portfolio_item"
        :style="{ backgroundImage: 'url(portfolio/' + post.thumbnail + ')' }"
      >
        <div class="link">
          <span>{{ post.title }}</span>
          <span>глянуть ⟶</span>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>


<script>
export default {
  name: 'portfolio',
  async asyncData(context) {
    const { $content, app } = context
    const defaultLocale = app.i18n.locale
    const posts = await $content(`${defaultLocale}/portfolio`).fetch()
    return {
      posts: posts.map((post) => ({
        ...post,
        path: post.path.replace(`/${defaultLocale}`, ''),
      })),
    }
  },
}
</script>

<style lang="scss">
.page.portfolio {
  padding-left: 0;
  .grid_container {
    overflow: hidden;
    flex: 1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-auto-rows: minmax(250px, auto);
    padding-top: 1rem;
    .portfolio_item {
      overflow: hidden;
      position: relative;
      transition: 0.3s;
      display: flex;
      flex-direction: column-reverse;
      background-size: cover;
      background-position: 50% 50%;
      &:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        // background-color: rgba(#0000, .2);
        transition: all 1s ease;
      }
      .link {
        position: relative;
        bottom: 0;
        background-color: $linkc;
        padding: 0.75rem;
        padding-left: 1rem;
        display: flex;
        span:first-child {
          flex: 1;
          font-family: $robs;
        }
        span:last-child {
          color: $acf;
          letter-spacing: 0.2rem;
          font-family: $opxc;
          margin: auto;
        }
      }
    }

    @media (hover) {
      .portfolio_item {
        filter: grayscale(100%);
        .link {
          position: relative;
          bottom: -30%;
          transition: all 0.5s ease;
        }
        &:hover {
          transform: scale(1.04);
          transition-timing-function: ease-out;
          // box-shadow: 0 0 5px 5px rgba(0,0,0,0.55);
          filter: none;
          &:after {
            background-color: rgba(#0000, 0);
          }
          z-index: 200;
          .link {
            bottom: 0;
          }
        }
      }
    }
    .portfolio_item {
      opacity: 0;
    }
  }
}

.portfolio_item_0 {
  animation: portfolioItemsUp 0.5s 0s forwards;
}
.portfolio_item_1 {
  animation: portfolioItemsUp 0.5s 0.1s forwards;
}
.portfolio_item_2 {
  animation: portfolioItemsUp 0.5s 0.2s forwards;
}
.portfolio_item_3 {
  animation: portfolioItemsUp 0.5s 0.3s forwards;
}
.portfolio_item_4 {
  animation: portfolioItemsUp 0.5s 0.4s forwards;
}
.portfolio_item_5 {
  animation: portfolioItemsUp 0.5s 0.5s forwards;
}
.portfolio_item_6 {
  animation: portfolioItemsUp 0.5s 0.6s forwards;
}
.portfolio_item_7 {
  animation: portfolioItemsUp 0.5s 0.7s forwards;
}
.portfolio_item_8 {
  animation: portfolioItemsUp 0.5s 0.8s forwards;
}
.portfolio_item_9 {
  animation: portfolioItemsUp 0.5s 0.9s forwards;
}
.portfolio_item_10 {
  animation: portfolioItemsUp 0.5s 1s forwards;
}
.portfolio_item_11 {
  animation: portfolioItemsUp 0.5s 1.1s forwards;
}

@keyframes portfolioItemsUp {
  from {
    opacity: 0;
    transform: translateY(60%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

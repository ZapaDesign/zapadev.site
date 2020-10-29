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

		<div class="portfolio__nav">
			<ul>
				<li><a href="#">[All]</a></li>
				<li><a href="#">[Education/JS]</a></li>
				<li><a href="#">[Design]</a></li>
				<li><a href="#">[Webdesign]</a></li>
				<li><a href="#">[Wordpress]</a></li>
				<li><a href="#">[JS/Vue]</a></li>
				<li><a href="#">[JS/React]</a></li>
			</ul>
		</div>


    <div class="grid_container">
      <nuxt-link
        v-for="(post, $index) in posts"
        :key="`post-${$index}`"
        :to="localePath(post.path)"
        :class="'portfolio_item_' + $index"
        class="portfolio_item"
        :style="{	
					backgroundImage: 'url(' + require(`~~/assets/portfolio/${post.thumbnail}`) + ')',
					animationDelay: `${$index}00ms`
				}"
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
		const posts = await $content(`${defaultLocale}/portfolio`)
		.sortBy('slug', 'asc')
		.fetch()
		
		return {
      posts: posts.map((post) => ({
        ...post,
        path: post.path.replace(`/${defaultLocale}`, ''),
      })),
    }
  }
}
</script>

<style lang="scss">
.page.portfolio {
  .grid_container {
		margin-left: -3vw;
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
					font-family: $accFont;
					font-size: 1rem;
					font-weight: 3;
					// letter-spacing: 0.1em;
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
			animation: portfolioItemsUp 0.5s forwards;
    }
  }
}

.portfolio__nav {
	// padding-top: 1rem;
	padding-bottom: 1rem;
	ul {
		max-width: 80%;
		margin-right: 0;
		margin-left: auto;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		flex-wrap: wrap;
		li{
			padding-right: 1.5rem;
			font-family: $accFont;
			font-weight: 400;
			font-size: 0.8rem;
			letter-spacing: 0.15rem;
			a {
				color: $stc;
			}
		}
		li:first-child a {
			color: $acf;
		}
	}
}

@keyframes portfolioItemsUp {
  from {
    opacity: 0;
    transform: translateY(3vw);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

<template>
	<div class="grid_container">
		<nuxt-link
			v-for="(post, $index) in posts"
			:key="`post-${$index}`"
			:to="localePath(post.path)"
			:class="'portfolio-item portfolio__item_' + $index"
			class="portfolio-item portfolio__item"
			:style="{
				backgroundImage:
					'url(' + require(`~~/assets/portfolio/${post.thumbnail}`) + ')',
				animationDelay: `${$index}00ms`,
			}"
		>
			<div class="portfolio-item__link">
				<span>{{ post.title }}</span>
				<span>глянуть ⟶</span>
			</div>
		</nuxt-link>
	</div>
</template>


<script>
export default {
	name: 'PortfolioGrid',
	props: {
		posts: {
			type: [Array],
			required: true,
		},
	},
}
</script>


<style lang="scss">

.portfolio {

  &__item {
    margin: 0.75rem;
  }
}

.portfolio-item {
  border-radius: 5px;
  background-size: cover;
  background-position: 50% 50%;
  display: flex;
  overflow: hidden;
  position: relative;
  transition: 0.3s;
  flex-direction: column-reverse;
  opacity: 0;
  animation: portfolioItemsUp 0.5s forwards;

  @media (hover:hover) {
    &:hover {
      transform: scale(1.04);
      transition-timing-function: ease-out;
      &:after {
        background-color: rgba(#0000, 0);
      }
      z-index: 200;
      .portfolio-item__link {
        bottom: 0;
      }
    }
    .portfolio-item__link {
      position: relative;
      bottom: -30%;
      transition: all 0.5s ease;
    }
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transition: all 1s ease;
  }

  &__link {
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
    }
    span:last-child {
      color: $acf;
      letter-spacing: 0.2rem;
      font-family: $opxc;
      margin: auto;
    }
  }
}


.page.portfolio {
	.grid_container {
		margin-left: -3vw;
		overflow: hidden;
    padding-top: 1rem;
		flex: 1;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
		grid-auto-rows: minmax(315px, auto);
    @media (min-width: 1920px) {
      grid-template-columns: repeat(auto-fit, minmax(25vw, 1fr));
      grid-auto-rows: minmax(17.5vw, auto);
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


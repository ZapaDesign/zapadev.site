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

.page.portfolio {
    .grid_container {
        overflow: hidden;
        padding-top: 1rem;
        flex: 1;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
        grid-auto-rows: minmax(315px, auto);
        margin-right: -15px;
        margin-left: -15px;

        @media (min-width: 720px) {
            grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
        }

        @media (min-width: 1200px) {
            margin-left: calc(-3vw + 15px);
            margin-right: 0;
        }

        @media (min-width: 1920px) {
            grid-template-columns: repeat(auto-fit, minmax(25vw, 1fr));
            grid-auto-rows: minmax(17.5vw, auto);
        }
    }
}

.portfolio {
    &__item {
        margin: 15px;
        margin-bottom: 0;

        @media (min-width: 1200px) {
            margin-bottom: 15px;
        }

        @media (min-width: 1920px) {
            margin: vw(15);
        }
    }
}

.portfolio-item {
    border-radius: 10px;
    background-size: cover;
    background-position: center;
    display: flex;
    overflow: hidden;
    position: relative;
    transition: 0.3s;
    flex-direction: column-reverse;
    opacity: 0;
    animation: portfolioItemsUp 0.5s forwards;
    @media (min-width: 1920px) {
        border-radius: vw(10);
    }

    @media (hover: hover) {
        &:hover {
            transform: scale(1.04);
            transition-timing-function: ease-out;
            z-index: 200;

            &:after {
                background-color: rgba(#0000, 0);
                transform: scale(1.1);
            }

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
        background: inherit;
        background-size: cover;
        transform-origin: center;
        transition: transform .5s ease-in-out;
    }

    &__link {
        position: relative;
        bottom: 0;
        background-color: var(--sub-text-color);
        padding: 0.75rem;
        padding-left: 1rem;
        display: flex;
        z-index: 1;

        span:first-child {
            flex: 1;
            font-family: $accFont;
            font-size: 1rem;
            font-weight: 3;
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


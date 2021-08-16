<template>
	<div class="page porfolio_item">
		<PageHeader :title="post.title" :description="post.description" />
        <PortfolioCategory />
		<div class="content">
			<div class="portfolio__info">
				<div class="portfolio__navigation">
					<nuxt-link :to="'/' + $i18n.locale + '/portfolio/'"> ✕ </nuxt-link>
					<div>
						<span>
							<nuxt-link
								v-if="prev"
								:to="'/' + $i18n.locale + '/portfolio/' + prev.slug"
							>
								⟵
							</nuxt-link>
							<div v-else>⟵</div>
						</span>
						<span>
							<nuxt-link
								v-if="next"
								:to="'/' + $i18n.locale + '/portfolio/' + next.slug"
							>
								⟶
							</nuxt-link>
							<div v-else>⟶</div>
						</span>
					</div>
				</div>
				<div class="portfolio__thumbnail slideUp">
					<img
						:src="require(`~~/assets/portfolio/${post.thumbnail}`)"
						alt="post.title"
					/>
				</div>
				<div class="portfolio__date slideUp">{{ getDate }}</div>
				<div class="portfolio__list slideUp">{{ post.list }}</div>
				<div class="portfolio__excerpt slideUp">{{ post.excerpt }}</div>
                <a v-if="post.link" :href="`http://${post.link}`">перейти на {{ post.link }}</a>
			</div>
			<div class="portfolio__img slideLeftInOut">
                <nuxt-content :document="post" />
			</div>
		</div>
	</div>
</template>

<script>
import { format } from 'date-fns'
import PortfolioCategory from "../../components/PortfolioCategory";

const head = function () {
	return {
		title: this.post.title,
		htmlAttrs: {
			lang: this.$i18n.locale,
		},
		meta: [
			{
				hid: 'og:description',
				property: 'og:description',
				content: this.post.description,
			},
			{
				property: 'og:title',
				hid: 'og:title',
				content: this.post.title,
			},
			{
				hid: 'og:image',
				property: 'og:image',
				content: this.post.media,
			}
		]
	}
}

const computed = {
	getDate() {
		return format(new Date(this.post.createdAt), 'yyyy.MM.dd')
	},
	otherLanguages() {
		return this.post.otherLanguages || []
	},
}

export default {
	name: 'post',
    components: {PortfolioCategory},
    head,
	computed,

	async asyncData(context) {
		const { $content, params, app, route, redirect } = context
		const slug = params.slug
		const post = await $content(`${app.i18n.locale}/portfolio`, slug).fetch()
		const [prev, next] = await $content(`${app.i18n.locale}/portfolio`)
			.only(['title', 'slug'])
			.sortBy('createdAt', 'desc')
			.surround(params.slug)
			.fetch()

		return {
			post,
			prev,
			next,
		}
	},
}
</script>





<style lang="scss">

.portfolio {

    &__navigation {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        padding: 1rem;
        margin-right: 0.75vw;
        background-color: var(--body-color);
        z-index: 100;

        a,
        a:active,
        a:visited {
            color: $acf;
        }

        span {
            display: inline-block;
            a {
                color: $acf;
            }
        }
    }

    &__info {
        flex-basis: 20%;
        min-width: 240px;
        color: $stc;
    }

    &__thumbnail {
        padding-top: 0.75vw;
        padding-right: 0.75vw;

        img {
            border-radius: 5px;
            max-width: 100%;
            @media (min-width: 1920px){
                border-radius: vw(5);
            }
        }
    }

    &__date {
        text-align: right;
        font-size: 0.75em;
        padding-top: 1rem;
        padding-right: 0.75vw;
    }

    &__text {
        padding-right: 0.75vw;
        font-weight: 300;

        ul {
            padding-top: 1vh;
            color: $ftc;
            list-style: none;
            padding-left: 0;

            li {
                padding-bottom: 1rem;
            }
        }

        p {
            line-height: 1.75;
            padding-bottom: 1rem;
        }

        a {
            // text-decoration: underline;
            font-size: 0.875rem;
            color: $acf;
            letter-spacing: 0.1rem;
        }
    }

    &__img {
        overflow: auto;
        padding: 0 0.75vw;
        flex: 1;
        img {
            display: block;
            max-width: 100%;
        }
    }
}

</style>

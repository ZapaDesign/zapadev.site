<template>
	<div class="page blog__article article">
		<PageHeader :title="post.title" :description="post.description" />
		<div class="content">
			<NavigationBlog :posts="posts" />
			<article class="article__content slideLeftInOut">
				<nuxt-content :document="post" />
			</article>
		</div>
	</div>
</template>



<script>
import { format } from 'date-fns'

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
		return format(new Date(this.post.createdAt), 'dd/MM')
	},
	otherLanguages() {
		return this.post.otherLanguages || []
	},
}

export default {
	name: 'slug',
	head,
	computed,
	async asyncData(context) {
		const { $content, params, app, route, redirect } = context
		const slug = params.slug
		const defaultLocale = app.i18n.locale
		const posts = await $content(`${defaultLocale}/blog`)
			.sortBy('title', 'asc')
			.fetch()
		const post = await $content(`${defaultLocale}/blog`, slug).fetch()

		return {
			posts: posts.map((post) => ({
				...post,
				path: post.path.replace(`/${defaultLocale}`, ''),
			})),
			post,
		}
	},
	methods: {
		scrollToTop() {
			window.scrollTo({ top: 0 })
		},
	},
}
</script>

<style lang="scss">

.hide {
	display: none;
}

.article {
    &__content {
        padding: 0 0.75vw;
        flex: 1;
        width: 100%;
        color: var(--main-text-color);
        margin-left: auto;
        margin-right: auto;

        p {
            font-size: 1rem;
            line-height: 1.5;
        }

        pre {
            font-size: 1rem;
        }

        .title {
            font-size: inherit;
        }

        &.slideLeftInOut {
            animation-duration: 0.5s;
            animation-delay: 0.3s;
        }

        p code,
        li code {
            // color: #1a202c;
            // font-weight: 400;
            // font-size: .875em;
            // color: var(--white);
            background-color: #282a36;
            padding: 0.25rem;
            border-width: 1px;
            border-color: var(--sub-text-color);
            border-radius: 0.25rem;
        }

        blockquote {
            border: 1px solid var(--sub-text-color);
            padding: 1rem;
            padding-bottom: 0;
            margin-top: 1rem;
            margin-bottom: 1rem;
            border-radius: 0.25rem;
        }

        hr {
            margin-top: 2rem;
            margin-bottom: 1rem;
            background-color: $linesColor;
            height: 1px;
            border: none;
        }

        table {
            text-align: left;
            border-collapse: collapse;
            margin: 10px;
            border: 1px solid $linesColor;
        }

        table th {
            color: var(--main-color);
            font-weight: 300;
            border-bottom: 1px solid $linesColor;
            border-right: 1px solid $linesColor;
            padding: 12px 17px;
        }

        table td {
            border-bottom: 1px solid $linesColor;
            border-right: 1px solid $linesColor;
            padding: 7px 17px;
        }

        table tr:last-child td {
            border-bottom: none;
        }

        table td:last-child {
            border-right: none;
        }

        table tr:hover td {
            text-decoration: underline;
        }
    }
}

.AnimationState-leave-active .blog_article.slideLeftInOut {
	animation-delay: 0s;
}

@media (max-width: 960px) {
	.blog_article .blog_navigation {
		display: none;
	}
}
</style>

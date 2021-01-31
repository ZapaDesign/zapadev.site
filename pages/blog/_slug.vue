<template>
	<div class="page blog_article">
		<PageHeader :title="post.title" :description="post.description" />
		<div class="content">
			<NavigationBlog :posts="posts" />
			<article class="article_content slideLeftInOut">
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
			},
		],
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
}
</script>





<style lang="scss">
.back-to-top-fade-enter-active,
.back-to-top-fade-leave-active {
	transition: opacity 0.7s;
}
.back-to-top-fade-enter,
.back-to-top-fade-leave-to {
	opacity: 0;
}

.vue-back-to-top {
	cursor: pointer;
	position: fixed;
	z-index: 1000;
}

.vue-back-to-top .default {
	background-color: #f5c85c;
	border-radius: 3px;
	color: #ffffff;
	height: 30px;
	line-height: 30px;
	text-align: center;
	width: 160px;
}

.vue-back-to-top .default span {
	color: #ffffff;
}

.vue-back-to-top--is-footer {
	bottom: 50% !important;
	position: absolute;
	transform: translateY(50%);
}

.hide {
	display: none;
}

.article_content {
	font-weight: 300;
	font-family: $dmx;
	padding: 0 0.75vw;
	flex: 1;
	width: 100%;
	color: $stc;
	max-width: 800px;
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
		// color: $wc;
		background-color: #282a36;
		padding: 0.25rem;
		border-width: 1px;
		border-color: $stc;
		border-radius: 0.25rem;
	}
	blockquote {
		border: 1px solid $stc;
		padding: 1rem;
		padding-bottom: 0;
		margin-top: 1rem;
		margin-bottom: 1rem;
		border-radius: 0.25rem;
	}
	hr {
		margin-top: 2rem;
		margin-bottom: 1rem;
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

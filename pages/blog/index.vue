<template>
	<div class="page blog">
		<PageHeader
			:title="$t('blog.title')"
			:description="$t('blog.description')"
		/>
		<div class="content">
			<BlogNavigation :posts="posts" />
			<div class="blog_article slideLeftImg"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'blog',
	async asyncData(context) {
		const { $content, app } = context
		const defaultLocale = app.i18n.locale
		const posts = await $content(`${defaultLocale}/blog`).fetch()

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
.blog_article {
	overflow: auto;
	flex: 1;
}

@media (min-width: 1200px) {
	.page.blog {
		height: 100vh;
		overflow: hidden;
	}
}
</style>

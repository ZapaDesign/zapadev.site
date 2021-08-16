<template>
	<div class="page portfolio">
		<PageHeader :title="tag.title" :description="tag.description" />
		<PortfolioCategory />

		<PortfolioGrid :posts="posts" />
	</div>
</template>

<script>
export default {
	name: 'tag',
	async asyncData(context) {
		const { $content, app, params } = context
		const defaultLocale = app.i18n.locale
		const tags = await $content(`${defaultLocale}/tags`)
			.where({ slug: { $contains: params.tag } })
			.limit(1)
			.fetch()
		const tag = tags.length > 0 ? tags[0] : {}
		const posts = await $content(`${defaultLocale}/portfolio`)
			.where({ tags: { $contains: tag.name } })
			.sortBy('createdAt', 'desc')
			.fetch()

		return {
			posts: posts.map((post) => ({
				...post,
				path: post.path.replace(`/${defaultLocale}`, ''),
			})),
			tag,
		}
	},
}
</script>

<style lang="scss">
</style>

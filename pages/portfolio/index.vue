<template>
	<div class="page portfolio">
		<PageHeader
			:title="$t('portfolio.title')"
			:description="$t('portfolio.description')"
		/>
		<NavigationPortfolio />
		<PortfolioGrid :posts="posts" />
	</div>
</template>

<script>
export default {
	name: 'portfolio',
	async asyncData(context) {
		const { $content, app } = context
		const defaultLocale = app.i18n.locale
		const posts = await $content(`${defaultLocale}/portfolio`)
			.sortBy('createdAt', 'desc')
			.fetch()

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
</style>

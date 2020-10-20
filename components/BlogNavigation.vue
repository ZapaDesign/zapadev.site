<template>
	<div class="blog_navigation">
		<div class="blog_form">
			<input
				type="search"
				v-model="search"
				autocomplete="off"
				placeholder="Что хотите найти?"
			/>
		</div>
		<ul v-if="posts" class="blog_items">
			<li v-for="(post, $index) in filteredPosts" :key="`post-${$index}`">
				<nuxt-link :to="localePath(post.path)">
					<div class="link">
						<span>{{ post.title }}</span>
					</div>
				</nuxt-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'BlogNavigation',
		props: {
			posts: {
				type: [Array],
				required: true
			}
		},
		data() {
			return {
				search: '',
			}
		},
		computed: {
			filteredPosts: function () {
				return this.posts.filter((post) => {
					return post.title.toLowerCase().match(this.search.toLowerCase())
				})
			}
		}
	}
</script>

<style lang="scss">
</style>
<template>
	<div class="blog_navigation">
		<div class="blog_form">
			<input
				type="search"
				v-model="search"
				autocomplete="off"
				placeholder="Что хотите найти?"
				autofocus
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
	name: 'NavigationBlog',
	props: {
		posts: {
			type: [Array],
			required: true,
		},
	},
	data() {
		return {
			search: '',
		}
	},
	mounted() {
		this.search = JSON.parse(sessionStorage.getItem('search')) || ''
	},
	watch: {
		search(newValue, oldValue) {
			sessionStorage.setItem('search', JSON.stringify(newValue))
		},
	},
	computed: {
		filteredPosts: function () {
			return this.posts.filter((post) => {
				return post.title.toLowerCase().match(this.search.toLowerCase())
			})
		},
	},
}
</script>

<style lang="scss" scoped>
.hide {
	display: none;
}
.blog_navigation {
	border-right: 1px solid #808080;
	flex-basis: 20%;
	min-width: 240px;
	color: $stc;
	.blog_form {
		padding: 1rem 1rem 1rem 0;
		color: $acf;
		border-bottom: 1px solid #808080;
		input {
			background-color: transparent;
			width: 100%;
			border: none;
			color: $wc;
			outline: none;
			font-size: 1rem;
			color: $stc;
			&:focus {
				border: none;
			}
		}
	}
	.blog_items {
		li {
			padding: 1rem 1rem 1rem 0;
		}
	}
}
</style>
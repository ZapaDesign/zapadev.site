<template>
  <div class="page blog">
    <header>
      <h1 class="slideLeft">
        {{ $t('blog.title') }}
        <span>
          {{ $t('blog.description') }}
        </span>
      </h1>
    </header>

    <div class="content">
      <div class="blog_navigation">
        <div class="blog_form">
					<input type="text" v-model="search" placeholder="живой поиск" autofocus>
        </div>
				<ul class="blog_items">
					<li v-for="(post, $index) in posts" :key="`post-${$index}`">
					<nuxt-link :to="localePath(post.path)">
						<div class="link">
							<span>{{ post.title }}</span>
						</div>
     			</nuxt-link>
					</li>
				</ul>
      </div>
      <div class="blog_article slideLeftImg">
				
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'blog',
	data: {
		search:'',
	},

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

	computed: {
		filteredPosts: function () {
			var self = this
			return this.posts.filter(function (post) {
        return post.title.indexOf(self.search) >= 0
    	});
    }
  }
	
}
</script>

<style lang="scss">
	.blog_navigation {
		overflow: auto;
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
				border:none;
				color: $wc;
				outline:none;
				&:focus {
					border:none;
				}
			}
		}
		.blog_items {
			li {
				padding: 1rem 1rem 1rem 0;
			}
		}
	}
	.blog_article {
		 overflow: auto;
		padding: 0 0.75vw;
		flex: 1;
	}

</style>

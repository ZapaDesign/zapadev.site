<template>
  <div class="page blog">
		<PageHeader :title="$t('blog.title')"	:description="$t('blog.description')"/>
    <div class="content">
			<BlogNavigation :posts="posts" />
    	<div class="blog_article slideLeftImg">
				Выберете статью из списка либо начните вводить что-то в поле поиск 
      </div>
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
	}	
}
</script>

<style lang="scss">
	.hide {
		display: none;
	}
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
				font-size: 1rem;
				color: $stc;
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

	@media (min-width: 1200px) {
  .page.blog {
    height: 100vh;
    overflow: hidden;
  }
}

</style>

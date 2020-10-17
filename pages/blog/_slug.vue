<template>
  <div class="page blog">
    <header>
      <h1 class="slideLeft">
        {{ post.title }}
        <span>
          {{ post.description }}
        </span>
      </h1>
    </header>

    <div class="content">
      <div class="blog_navigation">
        <div class="blog_form">
					<input type="search" autocomplete="off" placeholder="Search title.." />
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
      <article class="blog_article slideLeftInOut">
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
    const posts = await $content(`${defaultLocale}/blog`).fetch()
    const post = await $content(`${app.i18n.locale}/blog`, slug).fetch()

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
		color: $stc;
		max-width: 800px;
		margin-left: auto;
		margin-right: auto;
		p {
			font-size: 1.125rem;
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
	}
	.AnimationState-leave-active .blog_article.slideLeftInOut {
			animation-delay: 0s;
	}


	@media (min-width: 1200px) {
  .page.blog {
    height: 100vh;
    overflow: hidden;
  }
}



.nuxt-content {
  h1,
  h2,
  h3,
  h4 {
    position: relative;
    font-weight: 700;
		margin-bottom: 2rem;
		color: $wc;
		padding-top: 2rem;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.75rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.25rem;
  }

  ul {
    list-style: disc;
  }

  ul,
  ol {
    margin: 1rem 0;
    padding-left: 40px;
  }

  ul,
  ol > li:last-child {
    margin-bottom: 10px;
  }

  table {
    margin-bottom: 10px;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 0.5rem;
  }

  p {
    margin-bottom: 1rem;

    img {
      display: block;
    }

    img + em {
      display: block;
      margin-top: 0.5rem;
      font-size: 12px;
    }
  }
}
</style>

<template>
  <div class="page porfolio_item">
    <header>
      <h1 class="slideLeft">
        {{ post.title }}
        <span>
          {{ post.description }}
        </span>
      </h1>
    </header>

    <div class="content">
      <div class="post_info">
        <div class="post_navigation">
          <nuxt-link to="/portfolio">
            ✕
          </nuxt-link>
          <div>
            <span>
              <nuxt-link to="/portfolio/razrabotka-saita-002">
                ⟵
              </nuxt-link>
            </span>
            <span>
              <nuxt-link to="/portfolio/razrabotka-saita-001">
                ⟶
              </nuxt-link>
            </span>
          </div>
        </div>
        <div class="post_thumbnail slideUp">
          <img :src="require(`~~/assets/portfolio/${post.thumbnail}`)" alt="post.title" />
        </div>
        <div class="post_date slideUp">25.12.2025</div>
        <div class="post_text slideUp">
          <nuxt-content :document="post" />
        </div>
      </div>
      <div class="post_img slideLeftImg">
				<img :src="require(`~~/assets/portfolio/${post.img}`)" />
      </div>
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
  name: 'post',
  head,
  computed,

  async asyncData(context) {
    const { $content, params, app, route, redirect } = context
    const slug = params.slug
    const post = await $content(`${app.i18n.locale}/portfolio`, slug).fetch()

    return {
      post,
    }
  }
}
</script>














<style lang="scss">
.post_info {
  overflow: auto;
  border-right: 1px solid #808080;
  flex-basis: 20%;
  min-width: 240px;
  color: $stc;

  .post_thumbnail {
    padding-top: 0.75vw;
    padding-right: 0.75vw;
    img {
      max-width: 100%;
    }
  }
  .post_navigation {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 1rem 1rem 1rem 0;
    color: $acf;
		border-bottom: 1px solid #808080;
    a,
    a:active,
    a:visited {
      color: $acf;
    }
  }
  .post_date {
    text-align: right;
    font-size: 0.75em;
    padding-top: 1rem;
    padding-right: 1rem;
  }
  .post_text {
    padding-right: 1rem;
    ul {
      padding-top: 1vh;
			color: $ftc;
			list-style: none;
			padding-left: 0;
      li {
        padding-bottom: 1rem;
      }
    }
    p {
      line-height: 1.75;
      padding-bottom: 1rem;
    }
    a {
      // text-decoration: underline;
      font-size: 0.875rem;
      color: $acf;
      letter-spacing: 0.1rem;
    }
  }
}
.post_img {
  overflow: auto;
  padding: 0 0.75vw;
  flex: 1;
  img {
    display: block;
    max-width: 100%;
  }
}

@media (min-width: 1200px) {
  .page.porfolio_item {
    height: 100vh;
    overflow: hidden;
  }
}

</style>
<template>
  <div>
    <section>
      <article v-for="(post, $index) in posts" :key="`post-${$index}`">
        <img :src="post.img" :alt="post.title" />
        <div>
          <h3>{{ post.title }}</h3>
          <p>
            {{ post.description }}
          </p>
        </div>
        <footer>
          <nuxt-link :to="localePath(post.path)">
            <button>
              {{ $t('read-more') }}
            </button>
          </nuxt-link>
        </footer>
      </article>
    </section>
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

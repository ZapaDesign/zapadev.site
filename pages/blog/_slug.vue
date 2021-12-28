<template>
    <div class="page blog article article--blog">
        <PageHeader :title="post.title" :description="post.description"/>
        <div class="content">
            <NavigationBlog :posts="posts"/>
            <article class="article__content slideLeftInOut">
                <div
                    v-if="post.toc != false"
                    class="article__nav article-nav content-sidebar content-sidebar--end"
                    :class="{ isHide: sidebarState }">
                    <div class="content-sidebar__title">Post Navigation</div>
                    <ul class="article-nav__list">
                        <li
                            v-for="link of post.toc"
                            :key="link.id"
                            :class="{ 'toc2': link.depth === 2, 'toc3': link.depth === 3 }"
                        >
                            <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
                        </li>
                    </ul>
                    <button
                        @click="sidebarToggle"
                        class="content-sidebar__btn">
                        >
                    </button>
                </div>
                <nuxt-content :document="post"/>
            </article>
        </div>
    </div>
</template>


<script>
import {format} from 'date-fns'

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
            }
        ]
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
        const {$content, params, app, route, redirect} = context
        const slug = params.slug
        const defaultLocale = app.i18n.locale
        const posts = await $content(`${defaultLocale}/blog`)
            .sortBy('title', 'asc')
            .fetch()
        const post = await $content(`${defaultLocale}/blog`, slug).fetch()

        return {
            posts: posts.map((post) => ({
                ...post,
                path: post.path.replace(`/${defaultLocale}`, ''),
            })),
            post,
        }
    },
    data() {
        return {
            sidebarState: false,
        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo({top: 0})
        },
        sidebarToggle: function () {
            this.sidebarState = !this.sidebarState;
        }
    },
}
</script>

<style lang="scss">

@import '~/assets/css/article.scss';

.hide {
    display: none;
}

.AnimationState-leave-active .blog_article.slideLeftInOut {
    animation-delay: 0s;
}

</style>

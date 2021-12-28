<template>
    <div class="blog-nav content-sidebar content-sidebar--start"
         :class="{ isHide: sidebarState }">
        <div class="content-sidebar__wrap">
            <div class="blog-nav__form content-sidebar__title">
                <input
                    type="search"
                    v-model="search"
                    autocomplete="off"
                    placeholder="Что хотите найти?"
                    autofocus
                />
            </div>
            <ul v-if="posts" class="blog-nav__items">
                <li v-for="(post, $index) in filteredPosts" :key="`post-${$index}`">
                    <nuxt-link :to="localePath(post.path)">
                        <div class="link">
                            <span>{{ post.title }}</span>
                        </div>
                    </nuxt-link>
                </li>
            </ul>
        </div>
        <button
            @click="sidebarToggle"
            class="content-sidebar__btn">
            <
        </button>
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
            sidebarState: false,
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
            }).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        },
    },
    methods: {
        sidebarToggle: function () {
            this.sidebarState = !this.sidebarState;
        }
    }
}
</script>

<style lang="scss" scoped>

.hide {
    display: none;
}


.blog-nav {

    &__form {
        color: var(--main-color);

        input {
            background-color: transparent;
            width: 100%;
            border: none;
            border-radius: 0;
            outline: none;
            font-size: 16px;
            padding: 0;
            color: var(--sub-text-color);
            border-bottom: 1px solid #808080;

            @media (min-width: 1920px) {
                font-size: vw(16);
            }

            &:focus {
                border: none;
            }
        }
    }

    &__items {
        padding: 20px;

        li {
            padding-bottom: 10px;

            @media (min-width: 1920px) {
                padding-bottom: vw(10);
            }
        }
    }
}
</style>

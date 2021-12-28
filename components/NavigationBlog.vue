<template>
    <div class="blog-nav">
        <div class="blog-nav__form">
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
            }).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        },
    },
}
</script>

<style lang="scss" scoped>

.hide {
    display: none;
}


.blog-nav {
    flex-basis: 15%;
    min-width: 240px;
    background-color: var(--dark-blue-gray);
    color: var(--sub-text-color);
    position: sticky;
    top: 0;
    max-height: 100vh;
    overflow: scroll;
    border-radius: 0 20px 0 0 ;
    direction:rtl;

    @media (min-width: 1920px) {
        min-width: vw(240);
    }

    &__form {
        padding: 16px 16px 16px 0;
        background-color: var(--black);
        color: var(--main-color);
        //border-bottom: 1px solid #808080;
        direction:ltr;

        @media (min-width: 1920px) {
            padding: vw(16) vw(16) vw(16) 0;
        }

        input {
            background-color: transparent;
            width: 100%;
            border: none;
            outline: none;
            font-size: 16px;
            color: var(--sub-text-color);

            @media (min-width: 1920px) {
                font-size: vw(16);
            }

            &:focus {
                border: none;
            }
        }
    }

    &__items {
        direction:ltr;
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

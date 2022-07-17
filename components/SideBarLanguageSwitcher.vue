<template>

    <div class="lang">
        <nuxt-link :to="switchLocalePath('ru')">rus</nuxt-link>
        <nuxt-link :to="switchLocalePath('en')">eng</nuxt-link>
        <nuxt-link :to="switchLocalePath('uk')">ukr</nuxt-link>
    </div>

</template>

<script>

export default {
    name: 'SideBarLanguageSwitcher',
}

</script>

<style lang="scss">

.lang {
    display: inline-block;
    a {
        font-size: 12px;
        display: inline-block;
        cursor: pointer;
        margin: 0 15px;
        color: var(--white);
        text-decoration: none;
        @media (min-width: 1920px) {
            font-size: vw(12);
        }
    }

    .nuxt-link-active {
        border-bottom: 1px solid var(--main-color);
    }
}

</style>

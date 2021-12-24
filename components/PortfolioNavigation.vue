<template>
    <div class="portfolio__navigation">
        <nuxt-link :to="'/' + $i18n.locale + '/portfolio/'"> ✕</nuxt-link>
        <div>
            <span>
                <nuxt-link
                    v-if="prev"
                    :to="'/' + $i18n.locale + '/portfolio/' + prev.slug"
                >
                    ⟵
                </nuxt-link>
                <div v-else>⟵</div>
            </span>
            <span>
                <nuxt-link
                    v-if="next"
                    :to="'/' + $i18n.locale + '/portfolio/' + next.slug"
                >
                    ⟶
                </nuxt-link>
                <div v-else>⟶</div>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "PortfolioNavigation"
}
</script>

<style lang="scss">

</style>

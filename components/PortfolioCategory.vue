<template>
	<div class="portfolio__nav">
		<ul>
			<li><nuxt-link :to="'/' + $i18n.locale + '/portfolio'">[All]</nuxt-link></li>
			<li><nuxt-link :to="'/' + $i18n.locale + '/portfolio/tag/edu_js'">[Education/JS]</nuxt-link></li>
			<li><nuxt-link :to="'/' + $i18n.locale + '/portfolio/tag/graphdesign'">[GraphDesign]</nuxt-link></li>
			<li><nuxt-link :to="'/' + $i18n.locale + '/portfolio/tag/webdesign'">[WebDesign]</nuxt-link></li>
			<li><nuxt-link :to="'/' + $i18n.locale + '/portfolio/tag/wordpress'">[Wordpress]</nuxt-link></li>
			<li><nuxt-link :to="'/' + $i18n.locale + '/portfolio/tag/js_vue_nuxt'">[JS/Vue/Nuxt]</nuxt-link></li>
			<li><nuxt-link :to="'/' + $i18n.locale + '/portfolio/tag/js_react'">[JS/React]</nuxt-link></li>
			<li><nuxt-link :to="'/' + $i18n.locale + '/portfolio/tag/target_fb_insta'">[Target Insta/FB]</nuxt-link></li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'PortfolioCategory',
}
</script>

<style lang="scss">

.portfolio__nav {
	padding-bottom: 1rem;
	ul {
		max-width: 80%;
		margin-right: 0;
		margin-left: auto;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		flex-wrap: wrap;

		li {
			padding-right: 24px;
			font: var(--acc-font);
            letter-spacing: 0.15em;
            @media (min-width: 1920px){
                padding-right: vw(24);
                font-size: vw(12);
            }

			a {
				color: var(--sub-text-color);

                &.nuxt-link-exact-active {
                    color: var(--main-color);
                }
			}
		}
    }
}

</style>

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
	name: 'NavigationPortfolio',
}
</script>

<style lang="scss">
.portfolio__nav {
	// padding-top: 1rem;
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
			padding-right: 1.5rem;
			font-family: $accFont;
			font-weight: 400;
			font-size: 0.8rem;
			letter-spacing: 0.15rem;
			a {
				color: $stc;
			}
		}
		li a.nuxt-link-exact-active {
			color: $acf;
		}
	}
}
</style>

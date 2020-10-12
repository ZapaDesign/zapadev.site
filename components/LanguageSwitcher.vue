<template>


	<div class="lang">
		<nuxt-link :to="switchLocalePath('ru')">rus</nuxt-link>
    <nuxt-link :to="switchLocalePath('en')">eng</nuxt-link>
    <nuxt-link :to="switchLocalePath('uk')">ukr</nuxt-link>
	</div>

</template>

<script>

export default {
	name: 'LanguageSwitcher',
}

</script>

<style lang="scss" scoped>

.lang {
	a {
		font-size: 0.75rem;
		display: inline-block;
		cursor: pointer;
		&:not(:first-child) {
			margin-left: 45px;
		}
	}
	a {
		color: $wc;
		text-decoration: none;
	}
	.nuxt-link-active {
		border-bottom: 1px solid $acf
	}
}

</style>

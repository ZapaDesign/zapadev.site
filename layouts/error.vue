<template>
	<div>
		<h1 v-if="error.statusCode === 404">{{ $t('error-page-404') }}</h1>
		<h1 v-else>{{ $t('error-page') }}</h1>
		<NuxtLink :to="'/' + $i18n.locale + '/aboutme'">
			{{ $t('links.aboutme') }}
		</NuxtLink>
	</div>
</template>

<script>
export default {
	props: ['error'],
	layout: 'error', // you can set a custom layout for the error page
}
</script>
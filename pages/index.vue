<template>
  <div class="page home">
		<PageHeader :title="$t('home.title')"	:description="$t('home.description')"/>
    <div class="content">
      <div  v-if='cover_letter'>
				<nuxt-content :document="cover_letter" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'home',

	async asyncData(context) {
		const { $content, app } = context
		const defaultLocale = app.i18n.locale
		const cover_letter = await $content(`${defaultLocale}/home/cover_letter`,).fetch()
	
		return {
			cover_letter,
		}
	}
}
</script>

<style lang="scss" scoped>

.content {
	justify-content: center;
	align-items: flex-start;
	::v-deep .nuxt-content {
		max-width: 800px; 
	}
}



.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}


</style>

<template>
  <div class="page aboutme">
		<PageHeader :title="$t('aboutme.title')"	:description="$t('aboutme.description')"/>
    <div class="content">
      <div class="aboume__info">
				<AboutMeTabs :aboutMeItems="aboutMeItems"/>
      </div>
      <div class="aboume__img">
        <transition name="an1" appear>
          <img src="~/assets/zapa.png" alt="" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
// import PageHeader from '@/components/PageHeader.vue'

export default {
	name: 'aboutme',
	async asyncData(context) {
		const { $content, app } = context
		const defaultLocale = app.i18n.locale
		const aboutMeItems = await $content(`${defaultLocale}/aboutme`,).sortBy('id').fetch()
	
		return {
			aboutMeItems
		}
	}
}
</script>

<style lang="scss">

.aboume__info {
  flex: 5;

}
.aboume__img {
  flex: 6;
  overflow: hidden;
  img {
    // position: absolute;
    bottom: 0;
    max-height: 100vh;
    max-width: 100%;
  }
}



@media (min-width: 960px) {
  .content__text {
    flex: 6;
  }
  .content__img {
    flex: 6;
  }
}

@media (min-width: 1200px) {
  .content__text {
    flex: 5;
  }
  .content__img {
    flex: 6;
  }
}
</style>


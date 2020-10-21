<template>
  <div class="page skills">
		<PageHeader :title="$t('skills.title')"	:description="$t('skills.description')"/>
		<div class="content">
			<section>
				<div v-if="skills[0]">
					<h2>{{ skills[0].title }}</h2>
					<nuxt-content :document="skills[0]" />
				</div>
			</section>
			<section>
				<div v-if="skills[1]">
					<h2>{{ skills[1].title }}</h2>
					<nuxt-content :document="skills[1]" />
				</div>
			</section>
			<section>
				<div v-if="skills[2]">
					<h2>{{ skills[2].title }}</h2>
					<nuxt-content :document="skills[2]" />
				</div>
			</section>
		</div>
  </div>
</template>

<script>
export default {
	name: 'skills',

	async asyncData (context) {
    const { $content, app } = context
		const defaultLocale = app.i18n.locale
		const skills = await $content(`${defaultLocale}/skills`).fetch()

    return {
			skills
    }
  }
}
</script>

<style lang="scss">
	.skills {
		section {
			flex:3;
			padding: 2rem;
		}
		section:last-child {
			flex:2;
		}
		h2 {
			font-family: $dmx;
			font-weight: 400;
			color: $ac3;
			font-size: 1.5rem;	
		}
		.nuxt-content {
			ul {
				padding: 0;
				padding-bottom: 1rem;
				list-style: none;
				li {
					color: $ftc;
					font-size: 1rem;
					font-weight: 300;
					font-family: $dmx;
				}
			}
		}
	}

</style>


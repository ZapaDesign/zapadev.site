<template>
	<div class="page skills">
		<PageHeader
			:title="$t('skills.title')"
			:description="$t('skills.description')"
		/>
		<div class="content">
			<section>
				<div v-if="skillsWebdesign">
					<h2>{{ skillsWebdesign.title }}</h2>
					<nuxt-content :document="skillsWebdesign" />
				</div>
			</section>
			<section>
				<div v-if="skillsDesign">
					<h2>{{ skillsDesign.title }}</h2>
					<nuxt-content :document="skillsDesign" />
				</div>
			</section>
			<section>
				<div v-if="skillsOther">
					<h2>{{ skillsOther.title }}</h2>
					<nuxt-content :document="skillsOther" />
				</div>
			</section>
		</div>
	</div>
</template>

<script>
export default {
	name: 'skills',

	async asyncData(context) {
		const { $content, app } = context
		const defaultLocale = app.i18n.locale
		const skillsWebdesign = await $content(
			`${defaultLocale}/skills/skills_webdesign`
		).fetch()
		const skillsDesign = await $content(
			`${defaultLocale}/skills/skills_design`
		).fetch()
		const skillsOther = await $content(
			`${defaultLocale}/skills/skills_other`
		).fetch()

		return {
			skillsWebdesign,
			skillsDesign,
			skillsOther,
		}
	},
}
</script>

<style lang="scss">
.skills {
	.content {
		flex-wrap: wrap;
	}
	section {
		flex: 3;
		min-width: 250px;
		padding-right: 2vw;
        @media (min-width: 1920px){
            min-width: vw(250);
        }
	}
	section:last-child {
		flex: 4;
	}
    section:first-child {
        //flex: 4;
    }
	h2 {
		font-weight: 400;
		font-size: 1.5rem;
		border-bottom: 1px solid var(--main-color);
        margin-bottom: 30px;
        @media (min-width: 1920px){
            margin-bottom: vw(30);
        }
	}
	.nuxt-content {
		& > ul {
			padding: 0;
			padding-bottom: 1rem;
			list-style: none;
			li {
				color: var(--main-text-color);
				font: var(--main-font);
				strong {
					font-weight: 700;
				}
			}
		}
		ul > ul {
			padding: 0;
			margin: 0;
		}
		hr {
			height: 1px;
			border: none;
			background-color: var(--sub-text-color);
		}
	}
}
</style>

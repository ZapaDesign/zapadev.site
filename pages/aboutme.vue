<template>
  <div class="page page_aboutme">
		<PageHeader :title="$t('aboutme.title')"	:description="$t('aboutme.description')"/>
    <div class="content">
      <div class="aboutme__info">
				<AboutMeTabs :aboutMeItems="aboutMeItems"/>
				<div class="aboume__info__footer">
					<div class="social_profiles">
						<SocialProfiles />
					</div>
					<div class="paper_cv_link">
						<span>
							Скачать CV в формате .pdf ⟶
						</span>
						<a href="#">
							<svg><use xlink:href="../assets/icons.svg#icon_pdf"></use></svg>
						</a>
					</div>
				</div>
      </div>
			<div class="aboume__img__container">
				<div class="aboume__img__bg" >
						<img class="slideLeftInOut" src="~/assets/zapa_d.png" alt="" />
				</div>
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
.page_aboutme {
	.content {
		overflow: visible;
	}
}

.aboutme__info {
	display: flex;
	flex: 3;
	flex-direction: column;
	justify-content: space-between;
	// max-width: 500px;
}

.tabs__nav {
	text-align: right;
	padding-bottom: 1rem;
}

.tabs__nav__item {
	display: inline-block;
	padding-left: 1rem;
	font-family: $accFont;
	font-weight: 400;
	font-size: 0.85rem;
	letter-spacing: 0.15rem;
	a {
		cursor: pointer;
		color: $stc;
	}
	a.active {
		color: $acf;
		cursor: default;
	}
}

.social_profiles {
	position: relative;
	display: inline-block;
	background-color: $linkc;
	margin-bottom: 3vw;
	&:before {
		content:'';
		background-color: $linkc;
		position: absolute;
		height: 100%;
		width: 100%;
		left: -100%;
	}
}

.paper_cv_link {
		margin-bottom: 3vw;
		color: $stc;
		font-family: $accFont;
		font-weight: 400;
		font-size: 0.85rem;
		letter-spacing: 0.15rem;
		display: flex;
		align-items: center;
		svg {
			fill: $stc;
			width: 2rem;
			height: 2rem;
			padding-left: 1rem;
			&:hover {
				fill: $acf;
			}
		}
}

.aboume__img__container {
  flex: 6;
	position: relative;

}

.aboume__img__bg {
	background-repeat: no-repeat;
	position: absolute;
	top: -15%;
	bottom: 0;
	height: 115%;
	width: 100%;
	background-image: url(../assets/zapa_bg.png);
	img {
		object-fit: cover;
		object-position: top left;
		bottom: 0;
		height: 100%;
		width: 100%;
  }
}



@media (min-width: 960px) {
  .aboutme__info {
    flex: 6;
  }
  .aboume__img__container {
    flex: 6;
  }
}

@media (min-width: 1200px) {
  .aboutme__info {
    flex: 4;
  }
  .aboume__img__container {
    flex: 6;
  }
}
</style>


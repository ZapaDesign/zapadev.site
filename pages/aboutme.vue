<template>
	<div class="page page_aboutme">
		<PageHeader
			:title="$t('aboutme.title')"
			:description="$t('aboutme.description')"
		/>
		<div class="content">
			<div class="aboutme__info">
				<AboutMeTabs :aboutMeItems="aboutMeItems" />
			</div>
			<div class="aboume__info__footer">
				<div class="social_profiles">
					<SocialProfiles />
				</div>
				<div class="paper_cv_link">
					<span> Скачать CV ⟶ </span>
					<a href="#">
						<svg><use xlink:href="../assets/icons.svg#icon_pdf"></use></svg>
					</a>
				</div>
			</div>
			<div class="aboume__img__container">
				<div class="aboume__img__bg">
					<!-- <img class="slideLeftInOut" src="~/assets/zapa_d.png" alt="" /> -->
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
		const aboutMeItems = await $content(`${defaultLocale}/aboutme`)
			.sortBy('id')
			.fetch()

		return {
			aboutMeItems,
		}
	},
}
</script>

<style lang="scss">
.page {
	background-image: url(../assets/bg_img_grid.svg);
	background-size: 100%;
	background-position: 10vw center;
	background-attachment: fixed;
}

.page_aboutme .content {
	grid-gap: 5vw 2vw;
	overflow: visible;
	display: grid;
	grid-template-rows: auto 1fr 2fr;
	grid-template-columns: 1fr;
	grid-template-areas:
		'infoItems'
		'infoFooter'
		'infoImg';
}

@media (min-width: 720px) {
	.page_aboutme .content {
		grid-template-rows: auto 50%;
		grid-template-columns: 1fr 2fr;
		grid-template-areas:
			'infoItems infoItems'
			'infoFooter infoImg';
	}
}

@media (min-width: 1200px) {
	.page_aboutme .content {
		grid-template-rows: 1fr 25%;
		grid-template-columns: 40% auto;
		grid-template-areas:
			'infoItems infoImg'
			'infoFooter infoImg';
	}
}

.aboutme__info {
	grid-area: infoItems;
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

.aboume__info__footer {
	grid-area: infoFooter;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
}

.social_profiles {
	position: relative;
	display: inline-block;
	margin-bottom: 3vw;
	&:before {
		content: '';
		background-color: $linkc;
		position: absolute;
		height: 100%;
		width: 100%;
		left: -100%;
	}
	li {
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
	grid-area: infoImg;
	position: relative;
}

.aboume__img__bg {
	background-repeat: no-repeat;
	width: 100%;
	height: 110%;
	position: absolute;
	bottom: 0;
	background-image: url(../assets/zapa_d.png), url(../assets/zapa_bg.png);
	background-position: left top;
	background-size: cover;
	img {
		object-fit: cover;
		object-position: left bottom;
		width: 100%;
		height: inherit;
	}
}

// @media (min-width: 960px) {
// 	.aboutme__info {
// 		flex: 6;
// 	}
// 	.aboume__img__container {
// 		flex: 6;
// 	}
// }

// @media (min-width: 1200px) {
// 	.aboutme__info {
// 		flex: 4;
// 	}
// 	.aboume__img__container {
// 		flex: 6;
// 	}
// }
</style>


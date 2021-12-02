<template>
	<div class="page about-me">
		<PageHeader
			:title="$t('aboutme.title')"
			:description="$t('aboutme.description')"
		/>
		<div class="content">
			<div class="about-me__info">
				<AboutMeTabs :aboutMeItems="aboutMeItems" />
			</div>
			<div class="about-me__footer">
                <AboutMeSocialProfiles />
                <AboutMeDownloadCv />
			</div>
			<div class="about-me__img-container">
<!--				<div class="aboume__img-bg">-->
<!--				<div class="about-me__img">-->
					<img class="slideLeftInOut" src="~/assets/zapa_d.png" alt="" />
<!--				</div>-->
			</div>
		</div>
	</div>
</template>

<script>
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
	}
}
</script>

<style lang="scss">

.about-me {

    .content {
        //grid-gap: 5vw 2vw;
        overflow: visible;
        display: grid;
        align-items: stretch;
        grid-template-rows: auto 1fr 2fr;
        grid-template-columns: 1fr;
        grid-template-areas:
		'infoItems'
		'infoFooter'
		'infoImg';

        @media (min-width: 720px) {
            grid-template-rows: auto 50%;
            grid-template-columns: 1fr 2fr;
            grid-template-areas:
			'infoItems infoItems'
			'infoFooter infoImg';
        }

        @media (min-width: 1200px) {
            grid-template-rows: 1fr 25%;
            grid-template-columns: 40% auto;
            grid-template-areas:
			'infoItems infoImg'
			'infoFooter infoImg';
        }
    }

    &__info {
        grid-area: infoItems;
    }

    &__footer {
        grid-area: infoFooter;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    &__img {
        //position: absolute;
        //top: 50px;

        &-container {
            grid-area: infoImg;
            justify-self: stretch;
            align-self: stretch;
            overflow: hidden;
            position: relative;
            img {
                position: absolute;
                width: 100%;
                height: 100%;
                object-fit: contain;
                object-position: center;
            }
        }

        &-bg {
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
    }
}

.tabs__nav {
	text-align: right;
	padding-bottom: 16px;
  @media (min-width: 1920px){
    padding-bottom: vw(16);
  }
}

.tabs__nav__item {
	display: inline-block;
	padding-left: 16px;
	font: var(--acc-font);
	letter-spacing: 0.15rem;
    @media (min-width: 1920px){
        font-size: vw(12);
        padding-left: vw(16);
    }
	a {
		cursor: pointer;
		color: var(--sub-text-color);
	}
	a.active {
		color: var(--main-color);
		cursor: default;
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


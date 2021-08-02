<template>
	<nav id="nav" class="mainNavigation">
		<nuxt-link
            :to="'/' + $i18n.locale + '/aboutme'" class="logo"
            v-on:click.native="toggle"
        >
			<Logo />
		</nuxt-link>

		<!-- <nuxt-link
		:to="'/' + $i18n.locale + '/'" exact
		v-on:click.native="toggle"
		>
			<div>{{ $t('links.home') }}</div>
			<div class="mainNavigation_icon">
				<svg>
					<use xlink:href="../assets/icons.svg#icon_services"></use>
				</svg>
			</div>
		</nuxt-link> -->

		<nuxt-link
            :to="'/' + $i18n.locale + '/aboutme'"
            v-on:click.native="toggle"
        >
			<div>{{ $t('links.aboutme') }}</div>
			<div class="mainNavigation_icon">
				<svg>
					<use xlink:href="../assets/icons.svg#icon_about"></use>
				</svg>
			</div>
		</nuxt-link>

		<nuxt-link
            :to="'/' + $i18n.locale + '/skills'"
            v-on:click.native="toggle"
        >
			<div>{{ $t('links.skills') }}</div>
			<div class="mainNavigation_icon">
				<svg>
					<use xlink:href="../assets/icons.svg#icon_skills"></use>
				</svg>
			</div>
		</nuxt-link>

		<nuxt-link
            :to="'/' + $i18n.locale + '/portfolio'"
            v-on:click.native="toggle"
        >
			<div>{{ $t('links.portfolio') }}</div>
			<div class="mainNavigation_icon">
				<svg>
					<use xlink:href="../assets/icons.svg#icon_portfolio"></use>
				</svg>
			</div>
		</nuxt-link>
		<!--
        <nuxt-link
            :to="'/' + $i18n.locale + '/
            v-on:click.native="toggle"
        >
          <div>{{ $t('links.wprocess') }}</div>
          <div class="mainNavigation_icon">
            <svg>
              <use xlink:href="../assets/icons.svg#icon_wprocess"></use>
            </svg>
          </div>
        </nuxt-link> -->

		<nuxt-link
            :to="'/' + $i18n.locale + '/blog'"
            v-on:click.native="toggle"
        >
			<div>{{ $t('links.blog') }}</div>
			<div class="mainNavigation_icon">
				<svg>
					<use xlink:href="../assets/icons.svg#icon_blog"></use>
				</svg>
			</div>
		</nuxt-link>
	</nav>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
	name: 'SideBarNavigationMain',
    methods: {
        ...mapMutations({ toggle:  "drawer/toggle" })
    }
}
</script>

<style lang="scss">
.mainNavigation {
	text-align-last: left;
	text-align: left;
	a {
		display: flex;
		justify-content: space-between;
		margin: 3% 0;
		font-family: $opxc;
		font-size: 16px;
		font-weight: 400;
		letter-spacing: 0.125em;
		color: #ddd;
		text-decoration: none;
        @media (min-width: 720px) {
            letter-spacing: 0.05em;
         }
        @media (min-width: 960px) {
            font-size: 18px;
            letter-spacing: 0.15em;
        }
        @media (min-width: 1920px){
            font-size: vw(18);
        }
		div:first-child {
			flex: 1;
			padding: 1% 0 1% 10%;
			background-image: linear-gradient(
				to left,
				transparent,
				transparent 50%,
				#3d3d3d 50%,
				#3d3d3d
			);
			background-position: 100% 0;
			background-size: 200% 100%;
			transition: all 1s ease-in;
			position: relative;
            @media (min-height: 440px){
                padding: 3% 0 3% 10%;
            }
			&:after {
				content: '';
				height: 1px;
				width: 0px;
				display: block;
				background-color: $acf;
				transition: all 1s ease-in;
				transform: rotate(180deg);
				position: absolute;
				right: 0;
				bottom: 5px;
			}
		}
		div:last-child {
			width: 50px;
            @media (min-width: 1920px){
                width: vw(50);
            }
		}

		&.nuxt-link-active {
			background-position: 0 0;
			svg {
				fill: $acf;
			}
			div:first-child {
				background-position: 0 0;
				background-size: 200% 100%;
				&:after {
					content: '';
					width: 65%;
				}
			}
		}
	}
	a:first-child {
		margin: 0;
	}
	.mainNavigation_icon svg {
		position: relative;
		top: 25%;
		display: block;
		margin: 0 auto;
		width: 16px;
		height: 16px;
		fill: $sbic;
        @media (min-width: 1920px){
            width: vw(16);
            height: vw(16);
        }
	}
}

</style>

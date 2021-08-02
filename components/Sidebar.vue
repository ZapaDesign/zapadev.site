<template>
	<aside :class="{isOpen: drawer}">
		<transition>
			<div class="sidebar" :class="{ isOpen: drawer }" >
				<div>
					<div
						@click="toggle"
						class="sidebarToggle hamburger hamburger--spin"
            :class="{ isActive: drawer }"
						type="button"
					>
						<div class="hamburger-box">
							<div class="hamburger-inner"></div>
						</div>
					</div>
					<LanguageSwitcher />
					<NavigationMain />
				</div>
				<div>
					<ul class="contacts">
						<li><a href="tel:+380509778230">+38 (050) 977 82 30</a></li>
						<li>
							<a href="mailto:inbox.zds@gmail.com">inbox.zds@gmail.com</a>
						</li>
					</ul>
					<ul class="messenger">
						<li>
							<a href="#">
								<svg>
									<use xlink:href="../assets/icons.svg#icon-emailpopap"></use>
								</svg>
							</a>
						</li>
						<li>
							<a href="skype:zapa_perec?chat">
								<svg>
									<use xlink:href="../assets/icons.svg#icon-skype"></use>
								</svg>
							</a>
						</li>
						<li>
							<a href="viber://chat?number=+380661212649">
								<svg>
									<use xlink:href="../assets/icons.svg#icon-viber"></use>
								</svg>
							</a>
						</li>
						<li>
							<a href="tg://resolve?domain=zapadesign">
								<svg>
									<use xlink:href="../assets/icons.svg#icon-telegram"></use>
								</svg>
							</a>
						</li>
						<li>
							<a href="#">
								<svg>
									<use xlink:href="../assets/icons.svg#icon-fmessenger"></use>
								</svg>
							</a>
						</li>
					</ul>
					<div class="copyright">Created by ZapaDesign © 2013-2019</div>
				</div>
			</div>
		</transition>
	</aside>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'Sidebar',
    computed: {
        ...mapGetters({ drawer:  "drawer/getDrawerState" })
    },
    methods: {
        ...mapMutations({ toggle:  "drawer/toggle" })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

aside {
    width: 0;
    position: relative;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
    @media (min-width: 720px) {
    width: 50px;
    }
    @media (min-width: 1920px){
      width: vw(50);
    }
    &.isOpen {
        width: 100%;
        @media (min-width: 400px) {
          width: 250px;
        }
        @media (min-width: 1920px){
            width: vw(250);
        }
    }
}

.sidebar {
    background-repeat: repeat-y;
    background-position: 50% 0;
    background-size: 20%;
    background-color: $sbbgc;
    bottom: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    overflow-y: auto;
    position: fixed;
    padding: 12px 0;
    width: 100vw;
    top: 0;
    transform: translateX(-100vw);
    transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
    text-align: center;
    z-index: 100;
    @media (min-width: 400px) {
        width: 250px;
        transform: translateX(-250px);
    }
    @media (min-width: 720px) {
        width: 250px;
        transform: translateX(-200px);
    }
    @media (min-width: 1920px){
        width: vw(250);
        transform: translateX(vw(-200));
        padding: vw(12) 0;
    }

	&.isOpen {
		transform: translateX(0);
		transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
	}

    .sidebarToggle {
        @media (max-width: 720px) {
            display: none;
        }
    }
}

.sidebarToggle {
	position: absolute;
	right: 13px;
	width: 24px;
	height: 24px;
	.toggleText {
		transform: rotate(-90deg);
	}
    @media (min-width: 1920px){
        right: vw(13);
        width: vw(24);
        height: vw(24);
    }
}

.hamburger {
	cursor: pointer;
	transition-property: opacity, filter;
	transition-duration: 0.3s;
	transition-timing-function: linear;
	font: inherit;
	color: inherit;
	text-transform: none;
	background-color: transparent;
	border: 0;
	margin: 0;
	overflow: visible;

    &:hover {
        opacity: 0.7;
    }

    &.isActive {
        &:hover {
            opacity: 0.7;
        }

        .hamburger-inner,
        .hamburger-inner::before,
        .hamburger-inner::after {
            background-color: $sbic;
        }
    }
}


.hamburger-box {
	width: 24px;
	height: 24px;
	display: inline-block;
	position: relative;
    @media (min-width: 1920px){
        width: vw(24);
        height: vw(24);
    }
}

.hamburger-inner {
	display: block;
	top: 50%;
	margin-top: -2px;
    @media (min-width: 1920px){
        margin-top: vw(-2);
    }
}
.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
	width: 24px;
	height: 3px;
	background-color: $sbic;
	border-radius: 4px;
	position: absolute;
	transition-property: transform;
	transition-duration: 0.3s;
	transition-timing-function: ease;
    @media (min-width: 1920px){
        width: vw(24);
        height: vw(3);
    }
}
.hamburger-inner::before,
.hamburger-inner::after {
	content: '';
	display: block;
}
.hamburger-inner::before {
	top: -8px;
    @media (min-width: 1920px){
        top: vw(-8);
    }
}
.hamburger-inner::after {
	bottom: -8px;
    @media (min-width: 1920px){
        bottom: vw(-8);
    }
}

.hamburger--spin .hamburger-inner {
	transition-duration: 0.44s;
	transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--spin .hamburger-inner::before {
	transition: top 0.1s 0.1s ease-in, opacity 0.1s ease-in;
}
.hamburger--spin .hamburger-inner::after {
	transition: bottom 0.1s 0.1s ease-in,
		transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.hamburger--spin.isActive .hamburger-inner {
	transform: rotate(225deg);
	transition-delay: 0.24s;
	transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
.hamburger--spin.isActive .hamburger-inner::before {
	top: 0;
	opacity: 0;
	transition: top 0.1s ease-out, opacity 0.2s 0.24s ease-out;
}
.hamburger--spin.isActive .hamburger-inner::after {
	bottom: 0;
	transform: rotate(-90deg);
	transition: bottom 0.1s ease-out,
		transform 0.44s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.contacts {
	li:not(:last-child) {
		padding-bottom: 10px;
	}
	a {
		color: $wc;
		font-family: $opc;
		font-size: 14px;
		font-weight: 100;
		letter-spacing: 0.1em;
		text-decoration: none;
        @media (min-width: 1920px){
            font-size: vw(14);
        }
		&:hover {
			color: $acf;
		}
	}
}

.messenger {
	margin: 10% 50px;
	display: flex;
	justify-content: space-around;
	li {
		display: inline-block;
	}
	svg {
		display: block;
		height: 18px;
		width: 18px;
		fill: $wc;
        @media (min-width: 1920px){
            height: vw(18);
            width: vw(18);
        }
		&:hover {
			fill: $acf;
		}
	}
}

.copyright {
	font-size: 8px;
    @media (min-width: 1920px){
        font-size: vw(8);
    }
}
</style>

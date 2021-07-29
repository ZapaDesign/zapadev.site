<template>
	<aside>
		<transition>
			<div class="sidebar" :class="{ isOpen: isOpen }">
				<div>
					<div
						@click="toggle"
						class="sidebarToggle hamburger hamburger--spin"
						:class="{ isActive: isActive }"
						type="button"
					>
						<div class="hamburger-box">
							<div class="hamburger-inner"></div>
						</div>
						<!-- <div class="toggleText">
								{{openerText}}
							</div> -->
					</div>
					<LanguageSwitcher />
					<!-- <img alt="Vue logo" src="../assets/logo.png"> -->
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
// import MainNavigation from '@/components/MainNavigation.vue'

export default {
	name: 'Sidebar',
	data: () => ({
		openerText: 'Open',
		isOpen: false,
		isActive: false,
	}),
	methods: {
		open() {
			this.openerText = 'Close'
			this.isOpen = true
			this.isActive = true
		},
		close() {
			this.openerText = 'Open'
			this.isOpen = false
			this.isActive = false
		},
		toggle() {
			if (this.isOpen) {
				this.close()
			} else {
				this.open()
			}
		},
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
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
  padding-top: 10px;
  padding-bottom: 10px;
	width: 250px;
  top: 0;
	transform: translateX(-250px);
	transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
	text-align: center;
	z-index: 100;
  @media (min-width: 720px) {
    transform: translateX(-200px);
  }
	&.isOpen {
		transform: translateX(0);
		transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
	}
	//@media (min-width: 720px) {
	//	& {
	//		transform: translateX(0);
	//		position: sticky;
	//		height: 100vh;
	//		top: 0;
	//		width: auto;
	//	}
	//}
}

.sidebarToggle {
	position: absolute;
	right: 13px;
	width: 24px;
	height: 24px;
	.toggleText {
		transform: rotate(-90deg);
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
}
.hamburger:hover {
	opacity: 0.7;
}
.hamburger.isActive:hover {
	opacity: 0.7;
}
.hamburger.isActive .hamburger-inner,
.hamburger.isActive .hamburger-inner::before,
.hamburger.isActive .hamburger-inner::after {
	background-color: $sbic;
}

.hamburger-box {
	width: 24px;
	height: 24px;
	display: inline-block;
	position: relative;
}

.hamburger-inner {
	display: block;
	top: 50%;
	margin-top: -2px;
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
}
.hamburger-inner::before,
.hamburger-inner::after {
	content: '';
	display: block;
}
.hamburger-inner::before {
	top: -8px;
}
.hamburger-inner::after {
	bottom: -8px;
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
		font-size: 0.875rem;
		font-weight: 100;
		letter-spacing: 0.1em;
		text-decoration: none;
		&:hover {
			color: $acf;
		}
	}
}

.messenger {
	margin: 10%;
	display: flex;
	justify-content: space-around;
	li {
		display: inline-block;
	}
	svg {
		display: block;
		height: 24px;
		width: 24px;
		fill: $wc;
		&:hover {
			fill: $acf;
		}
	}
}

.copyright {
	font-size: 0.65rem;
}
</style>

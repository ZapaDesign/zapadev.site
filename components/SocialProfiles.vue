<template>
	<ul>
		<li>
			<a href="https://github.com/ZapaDesign" target="blank">
				<svg>
					<use xlink:href="../assets/icons.svg#icon_github"></use>
				</svg>
			</a>
		</li>
		<li>
			<a href="https://www.facebook.com/zapa.designe" target="blank">
				<svg>
					<use xlink:href="../assets/icons.svg#icon_facebook"></use>
				</svg>
			</a>
		</li>
		<li>
			<a href="https://www.instagram.com/zapa.design/" target="blank">
				<svg>
					<use xlink:href="../assets/icons.svg#icon_instagram"></use>
				</svg>
			</a>
		</li>
		<li>
			<a href="https://www.behance.net/ZAPA" target="blank">
				<svg>
					<use xlink:href="../assets/icons.svg#icon_behance"></use>
				</svg>
			</a>
		</li>
		<li>
			<a href="https://www.linkedin.com/in/serhii-zaparenko-122b7460" target="blank">
				<svg>
					<use xlink:href="../assets/icons.svg#icon_linkedin"></use>
				</svg>
			</a>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'SocialProfiles'
}
</script>

<style lang="scss" scoped>
	li {
	padding: 1rem;
	padding-left: 0;
	display: inline-block;
	a {
		display: flex;
	}
	}
	li:first-child {
		padding-left: 0;
	}
	svg {
		fill: $wc;
		width: 1.85rem;
		height: 1.85rem;
		&:hover {
			fill: $acf;
		}
	}
</style>
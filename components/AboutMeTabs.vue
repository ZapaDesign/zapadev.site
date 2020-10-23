<template>
	<div class="aboutme__tabs">
		<ul class="tabs__nav">
			<li class="tabs__nav__item" v-for="(aboutMeItem, $index) in aboutMeItems" :key="$index">
				<a v-on:click="activetab=1+$index" v-bind:class="[ activetab === 1+$index ? 'active' : '' ]">{{ aboutMeItem.title }}</a>
			</li>
		</ul>
		<div class="tabs__content__item" v-for="(aboutMeItem, $index) in aboutMeItems" :key="$index">
			<nuxt-content v-if="activetab === 1+$index" :document="aboutMeItem " />
		</div>

	</div>
</template>

<script>
export default {
	name: 'AboutMeTabs',
	data() { 
		return {
			activetab: 1 
		}
	},
	props: {
		aboutMeItems: {
			type: [Array],
			required: true,
		},
	}
}
</script>

<style lang="scss" scoped>
p {
	// padding: 0 15%;
	line-height: 1.5;
	max-width: 500px;
}

.tabs__nav {
	text-align: right;
	padding-bottom: 1rem;
}

.tabs__nav__item {
	display: inline-block;
	padding-left: 1rem;
	a {
		cursor: pointer;
	}
	a.active {
		color: $acf;
		cursor: default;
	}
}

</style>
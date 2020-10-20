<template>
	<header>
		<h1 class="slideLeft">
			{{ title }}
			<span>
				{{ description }}
			</span>
		</h1>
	</header>
</template>

<script>
export default {
	name: 'PageHeader',
	props:{
		title: [String],
		description: [String]
	}
}
</script>
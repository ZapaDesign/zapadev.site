<template>
    <div class="social_profiles">
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
                <a
                    href="https://www.linkedin.com/in/serhii-zaparenko-122b7460"
                    target="blank"
                >
                    <svg>
                        <use xlink:href="../assets/icons.svg#icon_linkedin"></use>
                    </svg>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
	name: 'AboutMeSocialProfiles',
}
</script>

<style lang="scss" scoped>

.social_profiles {
    position: relative;
    display: inline-block;
    &:before {
        content: '';
        background-color: var(--sub-text-color);
        position: absolute;
        height: 100%;
        width: 100%;
        left: -100%;
    }
}

li {
	padding: 16px;
	margin: 0;
	padding-left: 0;
	display: table-cell;
	background-color: var(--sub-text-color);
    @media (min-width: 1920px){
        padding: vw(16);
    }

	a {
		display: flex;
	}
}

li:first-child {
	padding-left: 0;
}

svg {
	fill: var(--white);
	width: 28px;
	height: 28px;
    @media (min-width: 1920px){
        width: vw(28);
        height: vw(28);
    }

	&:hover {
		fill: var(--main-color);
	}
}
</style>

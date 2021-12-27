<template>

    <div class="top-bar"
         :class="{ 'top-bar--hidden': !showTopBar }">

        <ul>
            <span>LOGO</span>
            <ColorModePicker/>

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
        </ul>
    </div>

</template>

<script>

import {mapGetters, mapMutations} from 'vuex';

export default {

    name: 'TopBar',
    data: () => ({
        drawer: '',
        showTopBar: true,
        lastScrollPosition: 0,
        scrollValue: 0
    }),
    mounted() {
        this.lastScrollPosition = window.pageYOffset
        window.addEventListener('scroll', this.onScroll)
        const viewportMeta = document.createElement('meta')
        viewportMeta.name = 'viewport'
        viewportMeta.content = 'width=device-width, initial-scale=1'
        document.head.appendChild(viewportMeta)
    },

    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll)
    },

    methods: {
        ...mapMutations({toggle: "drawer/toggle"}),
        onScroll() {
            if (window.pageYOffset < 0) {
                return
            }
            if (Math.abs(window.pageYOffset - this.lastScrollPosition) < 60) {
                return
            }
            this.showTopBar = window.pageYOffset < this.lastScrollPosition
            this.lastScrollPosition = window.pageYOffset
        }
    }
}

</script>

<style lang="scss" scope>

.top-bar {
    align-items: center;
    background-color: var(--aside-color);
    display: flex;
    height: 50px;
    left: 0;
    padding: 0 25px;
    position: fixed;
    top: 0;
    width: calc(100% - 50px);
    z-index: 100;
    transform: translate3d(0, 0, 0);
    transition: 0.3s all ease-out;
    @media (min-width: 720px) {
        display: none;
    }

    &--hidden {
        box-shadow: none;
        transform: translate3d(0, -100%, 0);
    }


    ul {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
}

.hamburger {
    position: static;
    @media (min-width: 720px) {
        position: absolute;
    }
}
</style>

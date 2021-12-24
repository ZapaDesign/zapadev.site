<template>

    <div class="top-bar">
        <!--        :class="{ 'is-hidden': !showHeader }"-->

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
        showHeader: true,
        limitPosition: 500,

        lastPosition: 0
    }),

    methods: {
        ...mapMutations({toggle: "drawer/toggle"}),


        // Toggle if navigation is shown or hidden
        // onScroll() {
        //     if (window.pageYOffset < 0) {
        //         return
        //     }
        //     if (Math.abs(window.pageYOffset - this.lastScrollPosition) < this.scrollOffset) {
        //         return
        //     }
        //     this.showHeader = window.pageYOffset < this.lastScrollPosition
        //     this.lastScrollPosition = window.pageYOffset
        // }
    },

    // beforeMount () {
    //     window.addEventListener('scroll', this.handleScroll);
    // },
    // beforeDestroy() {
    //     window.removeEventListener('scroll', this.handleScroll);
    // }
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
    @media (min-width: 720px) {
        display: none;
    }


    transform: translateY(0);
    transition: transform 300ms linear;


    &.is-hidden {
        transform: translateY(-100%);
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

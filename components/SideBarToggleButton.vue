<template>

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

</template>

<script>

import {mapMutations} from "vuex";

export default {
    name: 'SideBarToggleButton',
    methods: {
        ...mapMutations({ toggle:  "drawer/toggle" })
    }
}

</script>

<style lang="scss">

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

</style>

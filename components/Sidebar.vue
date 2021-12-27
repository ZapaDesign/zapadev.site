<template>
    <aside :class="{isOpen: drawer}">
        <transition>
            <div class="sidebar" :class="{ isOpen: drawer }">
                <div>
                    <SideBarToggleButton/>
                    <ColorModePicker/>
                    <SideBarLanguageSwitcher/>
                    <SideBarNavigationMain/>
                </div>
                <div>
                    <SideBarContacts/>
                    <SideBarMessenger/>
                    <div class="copyright">Created by ZapaDesign © 2013-2019</div>
                </div>
            </div>
        </transition>
    </aside>
</template>

<script>

import {mapGetters, mapMutations} from 'vuex';
import SideBarToggleButton from "../components/SideBarToggleButton";
import SideBarLanguageSwitcher from "../components/SideBarLanguageSwitcher";
import SideBarNavigationMain from "../components/SideBarNavigationMain";
import SideBarContacts from "../components/SideBarContacts";
import SideBarMessenger from "../components/SideBarMessenger";
import ColorModePicker from "../components/ColorModePicker";

export default {
    components: {
        ColorModePicker,
        SideBarToggleButton,
        SideBarLanguageSwitcher,
        SideBarNavigationMain,
        SideBarContacts,
        SideBarMessenger
    },
    name: 'Sidebar',
    computed: {
        ...mapGetters({drawer: "drawer/getDrawerState"})
    },

    head() {
        return {
            bodyAttrs: {
                class: this.drawer ? 'is-lock' : 'is-unlock'
            }
        }
    },
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
    @media (min-width: 1920px) {
        width: vw(50);
    }

    &.isOpen {
        width: 100%;
        @media (min-width: 400px) {
            width: 250px;
        }
        @media (min-width: 1920px) {
            width: vw(250);
        }
    }
}

.sidebar {
    background-repeat: repeat-y;
    background-position: 50% 0;
    background-size: 20%;
    background-color: var(--aside-color);
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
    z-index: 100;
    @media (min-width: 400px) {
        width: 250px;
        transform: translateX(-250px);
    }
    @media (min-width: 720px) {
        width: 250px;
        transform: translateX(-200px);
    }
    @media (min-width: 1920px) {
        width: vw(250);
        transform: translateX(vw(-200));
        padding: vw(12) 0;
    }

    &.isOpen {
        transform: translateX(0);
        transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
        padding: 12px;
        @media (min-width: 1920px){
            padding: vw(12);
        }

        .messenger {
            &--mobile {
                display: none;
            }
        }
    }

    &:not(.isOpen) {
        text-align: end;
        .messenger,
        .copyright {
            display: none;
        }

        .messenger {
            &--mobile {
                display: block;
            }
        }
    }

    .sidebarToggle {
        @media (max-width: 720px) {
            display: none;
        }
    }

    .color-mode {
        display: none;
        @media (min-width: 720px){
            display: inline-block;
        }
    }
}

.copyright {
    font-size: 10px;
    text-align: center;
    @media (min-width: 1920px) {
        font-size: vw(10);
    }
}
</style>

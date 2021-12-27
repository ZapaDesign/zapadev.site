<template>
	<div id="app">
		<Sidebar />
		<div class="main">
            <TopBar />
            <Nuxt />
		</div>
		<a href="#upToHeader" class="ScrollToUpBtn">▲</a>
        <ChatModal v-show="showChatModal" />
	</div>
</template>


<script>

    import Sidebar from "../components/Sidebar";
    import TopBar from "../components/TopBar";
    import BottomBar from "../components/BottomBar";
    import ChatModal from "../components/ChatModal";
    import {mapGetters} from "vuex";

    export default {
        components: {ChatModal, Sidebar, BottomBar, TopBar},

        computed: {
            ...mapGetters({showChatModal: "chatModal/getChatModalState"})
        },

        head() {
            return {
                bodyAttrs: {
                    class: this.chatModal ? 'is-lock' : 'is-unlock'
                }
            }
        },

    }

</script>




<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap');

@import '~/assets/css/vars.scss';
@import '~/assets/css/typography.scss';

* {
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
}

body {
    background-color: var(--body-color);
    transition: all 0.2s ease-in-out;
    &.is-lock {
        @media (max-width: 720px){
            overflow: hidden;
        }
    }
}

#app {
    display: flex;
    min-height: 100vh;
    font: var(--main-font);
    font-size: 16px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--main-text-color);
    position: relative;
    // overflow: hidden;
    // height: 100vh;
    @media (min-width: 1920px){
    font-size: vw(16px);
    }
}

.main {
	scroll-behavior: smooth;
	flex: 1;
	// overflow: hidden;
	min-height: 100vh;
	// overflow-y: auto;
    padding: 50px 0;
    min-width: 100vw;

    @media (min-width: 720px) {
        padding: 0;
        min-width: unset;
    }
}

.page {
    background-size: 100%;
    background-position: 10vw center;
    background-attachment: fixed;
	display: flex;
	flex-direction: column;
	min-height: inherit;
	padding: 0 15px;

    @media (min-width: 1200px) {
        padding-right: 15px;
        padding-left: 3vw;
    }

    @media (min-width: 1920px){
        padding-right: vw(15);
    }
}

.main-header {
	padding: 30px 0;
	overflow: hidden;
	font-size: 0.75rem;

	@media (min-width: 720px) {
	    font-size: 0.875rem;
	}

	@media (min-width: 1200px) {
        font-size: 1rem;
        padding: 50px 0;
	}

    @media (min-width: 1920px) {
        padding: vw(50) 0 vw(40);
        font-size: vw(16);
    }

    &__title {
        font-family: $opc;
        font-weight: 700;
        letter-spacing: 0.1em;
        display: inline-block;
        position: relative;
        padding: 10px 0;

        &:after,
        &:before {
            content: '';
            display: block;
            position: relative;
            height: 1px;
            width: auto;
            background: rgb(16,23,42);
            background: linear-gradient(90deg, rgba(16,23,42,0) 0%, var(--accent-color) 50%, rgba(9,9,121,0) 100%);
        }
        &:after {
            top: 15px;
        }
        &:before {
            bottom: 15px;
        }
        span {
            font-family: $opxc;
            font-weight: 100;
            color: var(--main-color);
        }
    }
}

.content {
	flex: 1;
	display: flex;
	flex-direction: column;
    align-items: flex-start;
	padding-top: 30px;
    @media (min-width: 720px) {
        flex-direction: row;
        &__text {
            flex: 8;
        }
        &__img {
            flex: 4;
        }
    }

    @media (min-width: 1200px){
        padding-top: 20px;
    }

    @media (min-width: 1920px){
        padding-top: vw(20);
    }

}

::-webkit-scrollbar {
    width: 4px;

    &-button {
        background-repeat: no-repeat;
        width: 0;
        height: 0;
    }

    &-track {
        background-color: var(--black-blue-gray);
    }

    &-thumb {
        -webkit-border-radius: 2px;
        border-radius: 2px;
        background-color: var(--dark-blue-gray);
        // box-shadow:0px 1px 1px #fff inset;
    }

    &-resizer {
        background-repeat: no-repeat;
        width: 1px;
        height: 0;
    }

    &-corner {
        color: transparent;
    }
}

.ScrollToUpBtn {
	position: fixed;
	bottom: 1rem;
	right: 1rem;
	height: 1.5rem;
	width: 1.5rem;
	font-size: 1.25rem;
	text-align: center;
	background-color: var(--black);
	opacity: 0.2;
	padding: 1rem;
	border-radius: 50%;
}
</style>

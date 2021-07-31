<template>
	<div id="app">
		<Sidebar />
		<div class="main">
      <TopBar />
			<Nuxt />
      <BottomBar />
		</div>
		<a href="#upToHeader" class="ScrollToUpBtn">▲</a>
	</div>
</template>

<script>
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";
export default {
  components: {BottomBar, TopBar}
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap');

html, body {
  background-color: var(--body-color);
}


* {
	margin: 0;
	padding: 0;
}

strong {
  color: var(--accent-color);
}

em {
  color: var(--main-color);
}


#app {
	display: flex;
	background-color: var(--body-color);
	min-height: 100vh;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	font-size: 16px;
	line-height: 1.5;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #fff;
	position: relative;
	overflow: hidden;
	height: 100vh;
}

aside {
	@media (min-width: 720px) {
    width: 50px;
  }
}

.main {
	scroll-behavior: smooth;
	flex: 1;
	overflow: hidden;
	min-height: 100vh;
	overflow-y: auto;
  padding: 50px 0;
  @media (min-width: 720px) {
    padding: 0;
  }

	// background: linear-gradient(-45deg,
	// 													rgb(32, 15, 10),
	// 													rgb(31, 7, 17),
	// 													rgb(5, 23, 29),
	// 													rgb(4, 24, 19));
	// background-size: 400% 400%;
	// -webkit-animation: Gradient 15s ease infinite;
	// -moz-animation: Gradient 15s ease infinite;
	// animation: Gradient 15s ease infinite;

	// @-webkit-keyframes Gradient {
	// 	0% {background-position: 0% 50%}
	// 	50% {background-position: 100% 50%}
	// 	100% {background-position: 0% 50%}
	// }

	// @-moz-keyframes Gradient {
	// 	0% {background-position: 0% 50%}
	// 	50% {background-position: 100% 50%}
	// 	100% {background-position: 0% 50%}
	// }

	// @keyframes Gradient {
	// 	0% {background-position: 0% 50%}
	// 	50% {background-position: 100% 50%}
	// 	100% {background-position: 0% 50%}
	// }

	//@media (min-width: 720px) {
	//	& {
	//		flex: 3;
	//	}
	//}
	//@media (min-width: 1200px) {
	//	& {
	//		flex: 4;
	//	}
	//}
	//@media (min-width: 1440px) {
	//	& {
	//		flex: 5;
	//	}
	//}
}

.page {
	display: flex;
	flex-direction: column;
	min-height: inherit;
	padding: 0 25px;
  @media (min-width: 1200px) {
    padding-left: 3vw;
  }
}

.page {
	background-size: 100%;
	background-position: 10vw center;
	background-attachment: fixed;
}

header {
	padding: 30px 0;
	overflow: hidden;
	font-size: 0.75rem;
	@media (min-width: 720px) {
		& {
			font-size: 0.875rem;
		}
	}
	@media (min-width: 1200px) {
		& {
			font-size: 1rem;
			padding: 50px 0;
		}
	}
}

.content {
	flex: 1;
	display: flex;
	flex-direction: column;
	padding-top: 2vw;
	font-family: $mainFont;
	font-weight: 300;
	font-size: 1rem;
}

@media (min-width: 720px) {
	.content {
		flex-direction: row;
	}
	.content__text {
		flex: 8;
	}
	.content__img {
		flex: 4;
	}
}

h1 {
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

ul {
	list-style: none;
}

a,
a:active,
a:visited {
	color: $wc;
	text-decoration: none;
}

img {
	max-width: 100%;
}

pre,
code {
	white-space: break-spaces;
}

::-webkit-scrollbar-button {
	background-repeat: no-repeat;
	width: 6px;
	height: 0px;
}

::-webkit-scrollbar-track {
	background-color: $sbbgc;
	// box-shadow:0px 0px 3px #000 inset;
}

::-webkit-scrollbar-thumb {
	-webkit-border-radius: 2px;
	border-radius: 2px;
	background-color: $acf;
	// box-shadow:0px 1px 1px #fff inset;
}

::-webkit-resizer {
	background-repeat: no-repeat;
	width: 4px;
	height: 0px;
}

::-webkit-scrollbar {
	width: 4px;
}

.nuxt-content {
	h1,
	h2,
	h3,
	h4 {
		padding-top: 1rem;
		position: relative;
		font-weight: 700;
		margin-bottom: 2rem;
		color: $wc;
		padding-top: 2rem;
	}

	h1 {
		font-size: 2rem;
	}

	h2 {
		font-size: 1.75rem;
	}

	h3 {
		font-size: 1.5rem;
	}

	h4 {
		font-size: 1.25rem;
	}

	ul {
		list-style: disc;
	}

	ul,
	ol {
		margin: 1rem 0;
		padding-left: 40px;
	}

	ul,
	ol > li:last-child {
		margin-bottom: 10px;
	}

	table {
		margin-bottom: 10px;
		border-collapse: collapse;
	}

	th,
	td {
		padding: 0.5rem;
	}

	p {
		margin-bottom: 1rem;

		img {
			display: block;
		}

		img + em {
			display: block;
			margin-top: 0.5rem;
			font-size: 12px;
		}
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
	background-color: $bc;
	opacity: 0.2;
	padding: 1rem;
	border-radius: 50%;
}
</style>

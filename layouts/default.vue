<template>
  <div id="app">
    <Sidebar />
    <div class="main">
      <Nuxt />
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap');
#app {
  display: flex;
  background-image: url(../assets/img-noise.png);
  min-height: 100vh;

	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  position: relative;
  overflow: hidden;
  height: 100vh;
}

aside {
  width: 50px;

  @media (min-width: 720px) {
    & {
      flex: 1;
      width: auto;
    }
  }
}

.main {
  flex: 12;
  overflow: hidden;
  min-height: 100vh;
  overflow-y: auto;

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

  @media (min-width: 720px) {
    & {
      flex: 3;
    }
  }
  @media (min-width: 1200px) {
    & {
      flex: 4;
    }
  }
  @media (min-width: 1440px) {
    & {
      flex: 5;
    }
  }
}
</style>

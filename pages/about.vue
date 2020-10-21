<template>
  <div class="page about">
		<PageHeader :title="$t('about.title')"	:description="$t('about.description')"/>
    <div class="content">
      <div class="content__text">
        <p>Hello world!</p>
        <p>
          Меня зовут Запаренко Сергей, я дизайнер цифровой графики, веб-сайтов и
          пользовательских интерфейсов, фронт-енд / бек-енд /
          WordPress-разработчик.
        </p>
        <p>Занимаюсь дизайном с 2007-го года.</p>
        <p>
          Проектирую дизайн полиграфии и любой другой графической продукции.
        </p>
        <p>
          Разрабатываю кроссбраузерные адаптивные сайты. Самостоятельно создаю
          дизайн, как с использованием Вашей корпоративной айдентики, так и с
          ноля.
        </p>
        <p>
          Моя цель - предоставлять на региональном уровне продут международного
          качества. Для этого я отслеживаю общемировые тренды в дизайне графики
          и веб-сайтов, верстке, программировании и других смежных сферах.
        </p>
      </div>
      <div class="content__img">
        <transition name="an1" appear>
          <img src="~/assets/zapa.png" alt="" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
// import PageHeader from '@/components/PageHeader.vue'

export default {
  name: 'about',
}
</script>

<style lang="scss">
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.content__text {
  flex: 5;
  p {
    // padding: 0 15%;
    line-height: 1.5;
  }
}
.content__img {
  flex: 6;
  overflow: hidden;
  img {
    // position: absolute;
    bottom: 0;
    max-height: 100vh;
    max-width: 100%;
  }
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

@media (min-width: 960px) {
  .content__text {
    flex: 6;
  }
  .content__img {
    flex: 6;
  }
}

@media (min-width: 1200px) {
  .content__text {
    flex: 5;
  }
  .content__img {
    flex: 6;
  }
}
</style>


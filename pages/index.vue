<template>
  <div class="page">
		<PageHeader :title="$t('home.title')"	:description="$t('home.description')"/>
    <div>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea laudantium, enim repudiandae similique id animi dolores sunt. Recusandae iste veniam ipsa alias eaque nisi adipisci quibusdam odio, est ducimus aperiam dignissimos repudiandae. Tenetur eveniet saepe animi accusamus beatae dignissimos ratione ut fugiat facere unde, cum tempora, ipsam eaque quasi exercitationem dolor quo eum praesentium magnam quam pariatur. Labore est eum voluptatibus, quod recusandae nisi. Amet omnis iure placeat id nostrum sequi sunt, odit hic sit repellendus veritatis ipsum fuga consequuntur non ex veniam atque consectetur quasi at. Error expedita aut iste commodi magni delectus, ipsam eligendi cum doloribus natus id.
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

<template>
    <div class="page home">
<!--        <PageHeader :title="$t('home.title')" :description="$t('home.description')"/>-->
        <div class="content">
            <div v-if='cover_letter'>
                <nuxt-content :document="cover_letter"/>
                <section class="home__section home__section--hero">
                    <div class="logo--hero">
                        <Logo/>
                    </div>
                </section>
                <section class="home__section home__section--first zdgrid zdgrid--x">
                    <div class="zdcell lg-6">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos est ullam accusamus harum aspernatur a fuga mollitia voluptate nobis quasi provident deleniti pariatur laborum dolores aut, aliquam, quod qui veritatis dolor neque ipsum sed sint! Quae nemo est odit in, dicta, voluptates eligendi, nostrum tempora fuga consequuntur earum quas? Necessitatibus hic officia veniam neque molestias quos saepe quae nobis, labore, eligendi explicabo autem quasi pariatur expedita recusandae temporibus sint a molestiae qui laborum? Delectus maiores iure nulla quas alias at mollitia consectetur? Numquam, ullam voluptatum sapiente dolorem quos omnis modi, laboriosam ea vero ex facere sunt illum tempora perferendis. Adipisci ea cum eaque consectetur recusandae, id amet odit temporibus illum ratione molestias eligendi consequuntur distinctio nemo, eum molestiae reprehenderit est, velit perferendis. Velit, mollitia repellendus sapiente beatae et dolore explicabo. Reiciendis iusto atque itaque, unde repellendus architecto consequatur recusandae odit tempore laboriosam repellat est, iure placeat consequuntur laudantium optio nisi sunt eaque? Eveniet excepturi aperiam voluptatibus ipsam iure odit dolorum, ad ducimus laborum consequuntur reprehenderit impedit cupiditate esse nostrum nobis quos minus nesciunt ipsa voluptate nihil ut praesentium! Ratione facere officiis esse aliquid corrupti ipsam laborum doloremque necessitatibus hic aliquam exercitationem, nesciunt, expedita, voluptatem vero neque voluptas consequatur. Ratione ab similique error quam. Laudantium, consequatur. Modi atque labore odio, impedit officia delectus consectetur quis vero itaque, sunt, explicabo eos? Nisi, sint voluptates? Minus soluta voluptate sunt quo natus? Nemo inventore adipisci aliquam magni animi nulla, exercitationem unde eum architecto quidem culpa necessitatibus consequatur sequi laboriosam quisquam doloribus iure aspernatur tempore accusamus repellat. Cumque accusamus neque nisi incidunt deleniti accusantium mollitia dolore harum possimus fugiat explicabo voluptatibus, amet minus facilis maxime laboriosam a dignissimos distinctio unde. Facilis totam temporibus voluptates quod dolore ab! Commodi minima nam magnam est quasi accusamus expedita non assumenda, veniam cum corrupti aspernatur aut dolorem at adipisci?                    </div>
                    <div class="zdcell lg-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum necessitatibus, nobis, repellat deleniti magnam at eligendi sed nihil harum illum dolorum quisquam nesciunt quae quia doloribus aliquam in! Odio doloribus sit, cumque et voluptas qui culpa saepe voluptatum aut sed amet natus assumenda vero dolorem corrupti! Eaque beatae, maiores harum accusamus minus quod magni quisquam velit sequi esse explicabo doloribus dicta, alias necessitatibus debitis nisi veritatis vitae inventore nobis quia cumque quo facere. Soluta dolores eum aliquam ipsum saepe esse adipisci quibusdam? Nihil atque eius maiores aliquam, porro minus mollitia blanditiis iure molestias repudiandae perspiciatis illum possimus iusto inventore explicabo, accusantium animi delectus tempore ipsa voluptatum nobis? Quos iure quidem obcaecati! Placeat totam harum unde dolore dolor aperiam dolorem quae blanditiis quis repudiandae. Optio incidunt est adipisci, molestiae magnam corrupti omnis! Dignissimos porro illum dolores nam sapiente. Officia, corporis! Itaque, facere modi id repudiandae sapiente quos? Ea accusantium, sit, laboriosam quia officiis nobis maiores velit suscipit iure corporis qui maxime eligendi necessitatibus consequuntur soluta esse asperiores repellendus ab quasi aliquam blanditiis id sapiente voluptatum culpa! Quae neque nulla ad, non nam nesciunt tenetur commodi nostrum velit ipsum impedit saepe beatae atque deleniti enim quaerat quas unde necessitatibus a dolor dicta mollitia sunt! Libero quibusdam non, voluptatibus debitis reiciendis ipsum ducimus nobis. Veniam iusto dolorem numquam aut facere provident debitis architecto reiciendis molestiae blanditiis saepe animi maxime harum placeat in libero iste cupiditate voluptatem explicabo repellat ex, non consectetur ab officiis. Nam fugit facere libero, et corrupti ullam. Autem esse ipsam quod quos tempora totam minima sit corrupti ullam iusto, porro unde modi minus, cum dolore alias sapiente error quidem tempore rem culpa repudiandae. Cum quod reprehenderit perspiciatis laudantium eum voluptatem corporis beatae ad iste sint ullam vero rem culpa voluptates repellat ipsum quo aut nobis sed, quibusdam ea quis perferendis!
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'home',

    async asyncData(context) {
        const {$content, app} = context
        const defaultLocale = app.i18n.locale
        const cover_letter = await $content(`${defaultLocale}/home/cover_letter`,).fetch()

        return {
            cover_letter,
        }
    },

    mounted: function() {
        this.scrollAnimation();
    },

    methods: {
        scrollAnimation() {

            gsap.timeline({
                scrollTrigger: {
                    trigger: ".home__section--hero",
                    start: "center center",
                    end: "bottom top",
                    markers: true,
                    scrub: true,
                    pin: true,
                }
            })
            .to(".logo--hero", { 
                css:{
                    scaleX:5, 
                    scaleY:5, 
                    opacity:0
                }, 
            })

        // gsap.timeline({
        //   scrollTrigger: {
        //     trigger: ".box2",
        //     start: "center center",
        //     end: "bottom top",
        //     markers: true,
        //     scrub: true,
        //     pin: true,
        //   }
        // })
        // .from(".text4", { x : innerWidth * 1, opacity: 0 })
        // .from(".text5", { x : innerWidth * 1, opacity: 0 })

        },
    }
}
</script>

<style lang="scss" scoped>

.home {
    &__section {
        &--hero {
            min-height: 100vh;
            margin-top: -20px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: url(../assets/img/logo-bg--home.svg);
            background-size: contain;
            position: center;
        }
    }
}

.content {
    justify-content: center;
    align-items: flex-start;

    ::v-deep .nuxt-content {
        max-width: 800px;
    }
}

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

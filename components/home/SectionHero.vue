<template>
    <section class="home-section home-hero">
        <div class="logo--hero">
            <Logo/>
        </div>
    </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
    name: "SectionHero",

    mounted: function() {
        this.scrollAnimation();
    },

    methods: {
        scrollAnimation() {
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".home-hero",
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

        }
    }
}
</script>

<style lang="scss">
.home-section {
    min-height: 100vh;
    padding: 5vh 0;
}

.home-hero {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(/assets/img/logo-bg--home.svg);
    background-size: contain;
    position: center;
    margin-top: -20px;
}
</style>

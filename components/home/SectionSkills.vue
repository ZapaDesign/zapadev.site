<template>
    <section class="home-section home-skills">
        <div class="zdgrid">
            <div class="zdcell lg-4">
                <ul refs="homeSkillsNav" class="home-skills__nav">
                    <li><h3>Back-end skills</h3></li>
                    <li><h3>Front-end skills</h3></li>
                    <li><h3>Wordpress skills</h3></li>
                    <li><h3>Soft skills</h3></li>
                    <li></li>
                </ul>
            </div>
            <div class="zdcell lg-8">
                <ul class="zdgrid home-skills__list">
                    <li class="zdcell lg-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi harum expedita exercitationem libero, quos impedit ratione, voluptas quis optio deleniti maxime eos ea repudiandae?</li>
                    <li class="zdcell lg-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi harum expedita exercitationem libero, quos impedit ratione, voluptas quis optio deleniti maxime eos ea repudiandae?</li>
                    <li class="zdcell lg-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi harum expedita exercitationem libero, quos impedit ratione, voluptas quis optio deleniti maxime eos ea repudiandae?</li>
                    <li class="zdcell lg-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi harum expedita exercitationem libero, quos impedit ratione, voluptas quis optio deleniti maxime eos ea repudiandae?</li>
                    <li class="zdcell lg-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi harum expedita exercitationem libero, quos impedit ratione, voluptas quis optio deleniti maxime eos ea repudiandae?</li>
                    <li class="zdcell lg-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi harum expedita exercitationem libero, quos impedit ratione, voluptas quis optio deleniti maxime eos ea repudiandae?</li>
                    <li class="zdcell lg-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi harum expedita exercitationem libero, quos impedit ratione, voluptas quis optio deleniti maxime eos ea repudiandae?</li>
                    <li class="zdcell lg-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi harum expedita exercitationem libero, quos impedit ratione, voluptas quis optio deleniti maxime eos ea repudiandae?</li>
                    <li class="zdcell lg-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi harum expedita exercitationem libero, quos impedit ratione, voluptas quis optio deleniti maxime eos ea repudiandae?</li>
                    <li class="zdcell lg-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi harum expedita exercitationem libero, quos impedit ratione, voluptas quis optio deleniti maxime eos ea repudiandae?</li>
                    <li class="zdcell lg-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi harum expedita exercitationem libero, quos impedit ratione, voluptas quis optio deleniti maxime eos ea repudiandae?</li>
                    <li class="zdcell lg-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi harum expedita exercitationem libero, quos impedit ratione, voluptas quis optio deleniti maxime eos ea repudiandae?</li>
                    <li class="zdcell lg-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi harum expedita exercitationem libero, quos impedit ratione, voluptas quis optio deleniti maxime eos ea repudiandae?</li>
                    <li class="zdcell lg-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi harum expedita exercitationem libero, quos impedit ratione, voluptas quis optio deleniti maxime eos ea repudiandae?</li>
                    <li class="zdcell lg-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi harum expedita exercitationem libero, quos impedit ratione, voluptas quis optio deleniti maxime eos ea repudiandae?</li>
                    <li class="zdcell lg-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi harum expedita exercitationem libero, quos impedit ratione, voluptas quis optio deleniti maxime eos ea repudiandae?</li>
                    <li class="zdcell lg-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi harum expedita exercitationem libero, quos impedit ratione, voluptas quis optio deleniti maxime eos ea repudiandae?</li>
                    <li class="zdcell lg-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi harum expedita exercitationem libero, quos impedit ratione, voluptas quis optio deleniti maxime eos ea repudiandae?</li>
                    <li class="zdcell lg-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi harum expedita exercitationem libero, quos impedit ratione, voluptas quis optio deleniti maxime eos ea repudiandae?</li>
                    <li class="zdcell lg-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi harum expedita exercitationem libero, quos impedit ratione, voluptas quis optio deleniti maxime eos ea repudiandae?</li>
                    <li class="zdcell lg-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi harum expedita exercitationem libero, quos impedit ratione, voluptas quis optio deleniti maxime eos ea repudiandae?</li>
                    <li class="zdcell lg-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi harum expedita exercitationem libero, quos impedit ratione, voluptas quis optio deleniti maxime eos ea repudiandae?</li>
                    <li class="zdcell lg-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi harum expedita exercitationem libero, quos impedit ratione, voluptas quis optio deleniti maxime eos ea repudiandae?</li>
                    <li class="zdcell lg-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi harum expedita exercitationem libero, quos impedit ratione, voluptas quis optio deleniti maxime eos ea repudiandae?</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
    name: "SectionSkills",

    mounted: function() {
        this.scrollAnimation();
    },

    methods: {
        scrollAnimation() {
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".home-skills",
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
.home-skills {

    &__nav {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    &__list {
         text-align: center;
    li {
        margin-bottom: 20px;
        }
    }
}
</style>

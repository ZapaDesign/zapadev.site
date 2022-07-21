<template>
    <canvas id="scene"></canvas>
</template>

<script>
import { gsap } from "gsap"
import * as Three from 'three'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

export default {
    name: "SectionHero3D"
}
</script>

<style scoped>

</style>

<template>
    <div class="filter">

        <p>
            <label>Target color</label>
            <input type="text" placeholder="target hex" v-bind:value="color">
        </p>
        <button class="execute">Compute Filters</button>

        <br>
        <br>

        <div class="zdgrid zdgrid--x">
            <div class="zdcell lg-6">
                <p>Real pixel, color applied through CSS background-color:</p>
                <div class="filter__pixel"></div>
            </div>
            <div class="zdcell lg-6">
                <p>Filtered pixel, color applied through CSS filter:</p>
                <div class="filter__pixel"></div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'CssFilterGenerator',
    data: () => ({
        color: '#ffffff'
    }),
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.filter {
    &__pixel {
        height: 200px;
        background-color: #2d5b6c;
        @media (min-width: 1920px){
            height: vw(200);
        }
    }
}
</style>

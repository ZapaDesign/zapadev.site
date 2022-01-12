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
            <div class="zdcell md-6 lg-4">
                <p>Real pixel, color applied through CSS background-color:</p>
                <div class="filter__pixel"></div>
            </div>
            <div class="zdcell md-6 lg-4">
                <p>Filtered pixel, color applied through CSS filter:</p>
                <div class="filter__pixel"></div>
            </div>
        </div>
        <br>
        <p>
            <strong>
                filter: invert(65%) sepia(67%) saturate(5412%) hue-rotate(161deg) brightness(94%) contrast(101%);
            </strong>
        </p>
        <p>*For this code to work well the starting color needs to be black. If your icon set isn't black you can prepend "brightness(0) saturate(100%)" to your filter property which will first turn the icon set to black.</p>

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

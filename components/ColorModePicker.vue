<template>
    <div class="color-mode">
        <ul class="color-mode__list">
            <li
                class="color-mode__item"
                v-for="color of colors"
                :key="color"
                @click="$colorMode.preference = color"
            >
                {{color}}
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'ColorModePicker',
    data() {
        return {
            colors: ['light', 'dark']
        }
    }
}

</script>

<style lang="scss">

.color-mode {
    color: var(--aside-text-color);
    &__item {
        display: inline-block;
        margin: 0 5px;
        cursor: pointer;
    }
}

</style>

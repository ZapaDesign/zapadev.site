<template>
    <div class="zdcontainer">
        <div class="zdgrid">
            <div class="zdcell lg-3">lg-3</div>
            <div class="zdcell lg-3">lg-3</div>
            <div class="zdcell lg-3">lg-3</div>
            <div class="zdcell lg-3">lg-3</div>
        </div>
        <br>

        <p>zdgrid--x-y</p>
        <div class="zdgrid zdgrid--x-y">
            <div class="zdcell lg-1">lg-1</div>
            <div class="zdcell lg-1">lg-1</div>
            <div class="zdcell lg-1">lg-1</div>
            <div class="zdcell lg-6">lg-6</div>
            <div class="zdcell lg-1">lg-1</div>
            <div class="zdcell lg-1">lg-1</div>
            <div class="zdcell lg-1">lg-1</div>
        </div>
        <br>
        <div class="zdgrid zdgrid--x-y">
            <div class="zdcell lg-1">lg-1</div>
            <div class="zdcell lg-1">lg-1</div>
            <div class="zdcell lg-1">lg-1</div>
            <div class="zdcell lg-1">lg-1</div>
            <div class="zdcell lg-1">lg-1</div>
            <div class="zdcell lg-1">lg-1</div>
            <div class="zdcell lg-1">lg-1</div>
            <div class="zdcell lg-1">lg-1</div>
            <div class="zdcell lg-1">lg-1</div>
            <div class="zdcell lg-1">lg-1</div>
            <div class="zdcell lg-1">lg-1</div>
            <div class="zdcell lg-1">lg-1</div>
        </div>
        <br>
        <div class="zdgrid zdgrid--x-y">
            <div class="zdcell lg-2">lg-2</div>
            <div class="zdcell lg-2">lg-2</div>
            <div class="zdcell lg-2">lg-2</div>
            <div class="zdcell lg-2">lg-2</div>
            <div class="zdcell lg-2">lg-2</div>
            <div class="zdcell lg-2">lg-2</div>
        </div>
        <br>
        <div class="zdgrid zdgrid--x-y">
            <div class="zdcell lg-3">lg-3</div>
            <div class="zdcell lg-3">lg-3</div>
            <div class="zdcell lg-3">lg-3</div>
            <div class="zdcell lg-3">lg-3</div>
        </div>
        <br>
        <div class="zdgrid zdgrid--x-y">
            <div class="zdcell lg-4">lg-4</div>
            <div class="zdcell lg-4">lg-4</div>
            <div class="zdcell lg-4">lg-4</div>
        </div>
        <br>
        <div class="zdgrid zdgrid--x-y">
            <div class="zdcell lg-6">lg-6</div>
            <div class="zdcell lg-6">lg-6</div>
        </div>
        <br>
        <div class="zdgrid zdgrid--x-y">
            <div class="zdcell lg-12">lg-12</div>
        </div>

    </div>
</template>

<script>
export default {
    name: "ZapadevZdGrid"
}
</script>

<style lang="scss" scoped>

.zdgrid {
    &--x-y {
        .zdcell {
            border-radius: 5px;
        }
    }
}


.zdcell {
    background-color: var(--main-color);
    padding: 20px;

    &:nth-child(even) {
        background-color: var(--accent-color);
    }
}
</style>

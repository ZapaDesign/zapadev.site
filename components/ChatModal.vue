<template>
    <div class="modal__overlay">
        <div class="modal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet cupiditate et excepturi explicabo iste, libero magni nulla, officiis omnis quas qui quidem rem ut veniam voluptas voluptatem voluptatum. At.
            <button
                @click = "closeChatModal"
                class="modal__close-btn">
                X
            </button>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {

    methods: {
        ...mapMutations({closeChatModal: "chatModal/toggle"})
    }
}
</script>

<style lang="scss">
    .modal {
        width: 600px;
        height: 400px;
        background-color: var(--body-color);
        padding: 50px;
        border-radius: 10px;
        position: relative;


        &__overlay {
            display: flex;
            align-items: center;
            justify-content: center;
            position: fixed;
            width: 100%;
            height: 100%;
            left: 0;
            right: 0;
            background-color: rgba(#000, 0.7);
            z-index: 100;
        }

        &__close-btn {
            position: absolute;
            right: 0;
            top: 0;
            background-color: var(--main-color);
            color: var(--withe);
        }
    }
</style>

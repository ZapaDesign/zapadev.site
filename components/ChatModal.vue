<template>
    <div class="modal__overlay">
        <div class="modal">

            <form class="modal__form" action="">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, sint.</p>
                <p>
                    <label for="name">Name</label>
                    <input type="text" id="name" placeholder="Name">
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Email">
                </p>
                <p>
                    <label for="message">Message</label>
                    <textarea name="message" id="message" placeholder="Message"></textarea>
                </p>
                <p>
                    <input type="submit">
                </p>
            </form>
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
    background-color: var(--body-color);
    padding: 80px 30px;
    margin: 30px;
    border-radius: 10px;
    position: relative;
    @media (min-width: 720px){
        padding: 50px;
        margin: 50px;
    }


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

    &__form {
        p {
            margin-bottom: 20px;
        }


        label {
            display: block;
        }
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

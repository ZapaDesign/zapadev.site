<template>
    <ul class="contacts">
        <li><a href="tel:+380509778230">+38 (050) 977 82 30</a></li>
        <li>
            <a href="mailto:inbox.zds@gmail.com">zapa.dev@gmail.com</a>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'SideBarContacts'
}
</script>

<style lang="scss">

.contacts {
    text-align: center;

    li:not(:last-child) {
        padding-bottom: 1vh;
    }

    a {
        color: var(--main-text-color);
        font-family: $opc;
        font-size: 16px;
        font-weight: 100;
        letter-spacing: 0.1em;
        text-decoration: none;
        transition: color .2s ease-in-out;
        @media (min-width: 1920px) {
            font-size: vw(16);
        }

        &:hover {
            color: var(--main-color);
        }
    }
}

</style>

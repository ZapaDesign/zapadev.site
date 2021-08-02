<template>
    <ul class="contacts">
        <li><a href="tel:+380509778230">+38 (050) 977 82 30</a></li>
        <li>
            <a href="mailto:inbox.zds@gmail.com">inbox.zds@gmail.com</a>
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
    li:not(:last-child) {
        padding-bottom: 1vh;
    }
    a {
        color: $wc;
        font-family: $opc;
        font-size: 14px;
        font-weight: 100;
        letter-spacing: 0.1em;
        text-decoration: none;
        @media (min-width: 1920px){
            font-size: vw(14);
        }
        &:hover {
            color: $acf;
        }
    }
}

</style>

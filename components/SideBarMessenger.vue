<template>
    <ul class="messenger">
        <li>
            <a href="#">
                <svg>
                    <use xlink:href="../assets/icons.svg#icon-emailpopap"></use>
                </svg>
            </a>
        </li>
        <li>
            <a href="skype:zapa_perec?chat">
                <svg>
                    <use xlink:href="../assets/icons.svg#icon-skype"></use>
                </svg>
            </a>
        </li>
        <li>
            <a href="viber://chat?number=+380661212649">
                <svg>
                    <use xlink:href="../assets/icons.svg#icon-viber"></use>
                </svg>
            </a>
        </li>
        <li>
            <a href="tg://resolve?domain=zapadesign">
                <svg>
                    <use xlink:href="../assets/icons.svg#icon-telegram"></use>
                </svg>
            </a>
        </li>
        <li>
            <a href="#">
                <svg>
                    <use xlink:href="../assets/icons.svg#icon-fmessenger"></use>
                </svg>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'SideBarMessenger',
}
</script>

<style lang="scss">

.messenger {
    margin: 1vh 50px;
    display: flex;
    justify-content: space-around;
    @media (min-width: 1920px) {
        margin: 1vh vw(50);
    }

    li {
        display: inline-block;
    }

    svg {
        display: block;
        height: 18px;
        width: 18px;
        fill: var(--white);
        @media (min-width: 1920px) {
            height: vw(18);
            width: vw(18);
        }

        &:hover {
            fill: var(--main-color);
        }
    }
}

</style>

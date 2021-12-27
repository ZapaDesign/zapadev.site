<template>
    <div>
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


        <div class="messenger messenger--mobile">
            <a href="#">
                <svg>
                    <use xlink:href="../assets/icons.svg#icon-emailpopap"></use>
                </svg>
            </a>
        </div>
    </div>
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

    &--mobile {
        position: absolute;
        margin: 0;
        right: 8px;
        bottom: 12px;
        svg {
            margin: 0;
        }
    }

    li {
        display: inline-block;
    }

    svg {
        display: block;
        height: 22px;
        width: 22px;
        fill: var(--main-text-color);
        transition: fill .2s ease-in-out;
        margin-left: 5px;
        margin-right: 5px;
        @media (min-width: 1920px) {
            height: vw(22);
            width: vw(22);
            margin-left: vw(5);
            margin-right: vw(5);
        }

        &:hover {
            fill: var(--main-color);
        }
    }
}

</style>

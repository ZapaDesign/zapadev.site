<template>

    <div class="paper_cv_link">
        <span> Скачать CV ⟶ </span>
        <a
            target="_blank"
            href="https://drive.google.com/file/d/1uhmjHE_djrIMs39lc4F-Uto5WOQPF7SW/view?usp=sharing"
        >
            <svg><use xlink:href="@/assets/icons.svg#icon_pdf"></use></svg>
        </a>
    </div>

</template>



<script>

export default {
    name: 'AboutMeDownloadCv',
}

</script>

<style lang="scss">

.paper_cv_link {
    color: var(--sub-text-color);
    font-family: $accFont;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.125em;
    display: flex;
    align-items: center;
    @media (min-width: 1920px){
        font-size: vw(12);
    }

    svg {
        fill: var(--sub-text-color);
        width: 32px;
        height: 32px;
        padding-left: 16px;
        @media (min-width: 1920px){
            width: vw(32);
            height: vw(32);
            padding-left: vw(16);
        }
        &:hover {
             fill: var(--main-color);
        }
    }
}

</style>

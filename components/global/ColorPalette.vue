<template>
    <div class="color-palette">
        <ul class="color-palette__list">
            <li
                class="color-palette__item"
                v-for="item in items"
                :key="item.title"
                :style="{ 'background-color' : item.color }"
                @click="copyColor"
            >
                {{item.title}}
                {{item.color}}
            </li>

        </ul>
    </div>
</template>

<script>

    export default {
        name: 'ColorPalette',
        data() {
            return {
                items: [
                    { title: 'Facebook', color: '#1877F2' },
                    { title: 'Messenger', color: '#0099FF' },
                    { title: 'Twitter', color: '#1DA1F2' },
                    { title: 'LinkedIn', color: '#0A66C2' },
                    { title: 'Dropbox', color: '#0061FF' },
                    { title: 'Wordpress', color: '#21759B' },
                    { title: 'Vimeo', color: '#1AB7EA' },
                    { title: 'SlideShare', color: '#0077B5' },
                    { title: 'VK', color: '#4C75A3' },
                    { title: 'Tumblr', color: '#34465D' },
                    { title: 'Yahoo', color: '#410093' },
                    { title: 'Pinterest', color: '#BD081C' },
                    { title: 'Youtube', color: '#CD201F' },
                    { title: 'Reddit', color: '#FF5700' },
                    { title: 'Quora', color: '#B92B27' },
                    { title: 'Yelp', color: '#AF0606' },
                    { title: 'Weibo', color: '#DF2029' },
                    { title: 'ProductHunt', color: '#DA552F' },
                    { title: 'HackerNews', color: '#FF6600' },
                    { title: 'Soundcloud', color: '#FF3300' },
                    { title: 'Blogger', color: '#F57D00' },
                    { title: 'SnapChat', color: '#FFFC00' },
                    { title: 'WhatsApp', color: '#25D366' },
                    { title: 'WeChat', color: '#09B83E' },
                    { title: 'Line', color: '#00C300' },
                    { title: 'Medium', color: '#02B875' },
                    { title: 'Vine', color: '#00B489' },
                    { title: 'Slack', color: '#3AAF85' },
                    { title: 'Instagram', color: '#E4405F' },
                    { title: 'Dribbble', color: '#EA4C89' },
                    { title: 'Flickr', color: '#FF0084' },
                    { title: 'FourSquare', color: '#F94877' },
                    { title: 'TikTok', color: '#EE1D51' },
                    { title: 'Behance', color: '#131418' },
                ]
            }
        },
        methods: {
            copyColor() {

            }
        }
    }

</script>

<style lang="scss">

    .color-palette {

        &__list {
            list-style: none!important;
            padding-left: 0!important;
            display: flex;
            flex-wrap: wrap;
        }

        &__item {
            padding: 10px;
            margin: 5px;
            border-radius: 5px;
            flex: 1;
            flex-basis: 200px;
            height: 80px;
            font-weight: 700;
        }
    }

</style>

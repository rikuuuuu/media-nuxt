<template>
    <div class="ArticleWrapper">
        <div v-if="article" class="ContentWrapper">
            <div class="TitleWrapper">
                <div class="TitleText">
                    {{ article.title }}
                </div>
            </div>
            <div class="ImgWrapper">
                <img class="Img" src="/fog.jpg" alt="">
            </div>
            <div class="DescriptionWrapper">
                {{ article.description }}
                <!-- <div class="marked" v-html="text">{{ article.description }}</div> -->
            </div>
            <nuxt-link :to="{ name: 'article-update-id', params: { id: article.id }}" >
                <div class="BtnWrapper">
                    <BtnDefault :btnText="'編集'" />
                </div>
            </nuxt-link>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
// declare module 'vue/types/vue' {
//   interface Vue {
//     $marked: any
//   }
// }

export default Vue.extend({
    data() {
        return {

        }
    },
    props: [
        "article"
    ],
    mounted() {
    },
    computed: {
        markedContent() {
            // @ts-ignore
            // return this.$marked(this.article.description)
        },
        text() {
            // @ts-ignore
            // return this.$marked(this.article.description);
        }
    }
})
</script>

<style scoped>

/* .ArticleWrapper {
} */

.ContentWrapper {
    background-color: #FFF;
    height: fit-content;
    border-radius: 5px;
    min-height: 440px;
    padding: 30px 40px;
}

.TitleWrapper {
    margin-bottom: 30px;
}

.TitleText {
    letter-spacing : 0.1em;
    text-decoration: none;
    border: none;
    color: #444;
    line-height: 1.6;
    font-style: bold;
    font-size: 1.5em;
    font-weight: bold;
}

.ImgWrapper {
    margin-bottom: 30px;
}

.Img {
    width: 100%;
    max-height: 450px;
    border-radius: 5px;
    overflow: hidden;
    object-fit: cover;
}

.DescriptionWrapper {
    margin-bottom: 30px;
}

.BtnWrapper {
    margin-bottom: 30px;
}

@media (min-width: 768px) {
    /* .ArticleWrapper {
    } */
}
</style>
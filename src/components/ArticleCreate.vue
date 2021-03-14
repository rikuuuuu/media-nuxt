<template>
    <div class="MainWrapper">
        <div class="CreateFormWrapper">
            <form>
                <div class="ImageWrapper">
                    <div class="ImageTitle">
                        サムネイル画像
                    </div>
                    <img class="Img" src="/fog.jpg" alt="">
                    <input type="file">
                </div>
                <div class="TitleWrapper">
                    <input class="InputDefault" v-model="title" type="text" placeholder="タイトル">
                </div>
                <div class="Editor">
                    <client-only>
                        <mavon-editor v-model="description" language="ja" />
                    </client-only>
                </div>
                <div class="CreateBtnWrapper" @click="create">
                    <BtnDefault :btnText="'投稿する'" />
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { TCreateArticleParams, TUpdateArticleParams } from '../domain/repository/article_repository'

export default Vue.extend({
    data() {
        return {
            title: "",
            description: "",
        }
    },
    created() {
        
    },
    mounted() {

    },
    methods: {
        create() {
            const req: TCreateArticleParams = {
                "title": this.title,
                "description": this.description,
                "userID": "1",
            }
            this.$store.dispatch('article/create', req)
        },
    }
})
</script>

<style scoped>

.MainWrapper {
    height: fit-content;
    background-color: #F8F8F8;
    padding: 50px 0;
}

.CreateFormWrapper {
    width: 70%;
    max-width: 960px;
    margin: 0 auto;
}

.ImageWrapper {
    margin-bottom: 30px;
}

.ImageTitle {
    margin-bottom: 30px;
}

.TitleWrapper {
    margin-bottom: 30px;
}

.CreateBtnWrapper {
    margin-bottom: 30px;
}

.Img {
    width: 100%;
    height: 450px;
    object-fit: cover;
    margin-bottom: 30px;
}

.Editor {
    margin-bottom: 30px;
}

@media (min-width: 768px) {
}
</style>
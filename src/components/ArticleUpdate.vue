<template>
    <div class="MainWrapper">
        <div class="CreateFormWrapper">
            <form>
                <div class="ImageWrapper">
                    <div class="ImageTitle">
                        サムネイル画像
                    </div>
                    <img v-if="!thumbnailURL" class="Img" src="/fog.jpg" alt="">
                    <img v-if="thumbnailURL" class="Img" :src="thumbnailURL" alt="">
                    <input @change="changeFile" type="file">
                </div>
                <div class="TitleWrapper">
                    <input class="InputDefault" v-model="article.title" type="text" placeholder="タイトル">
                </div>
                <div class="Editor">
                    <client-only>
                        <mavon-editor v-model="article.description" language="ja" />
                    </client-only>
                </div>
                <div class="CreateBtnWrapper" @click="update">
                    <BtnDefault :btnText="'更新する'" />
                </div>
                <div class="CreateBtnWrapper" @click="deleteArticle">
                    <BtnDefault class="BtnSecond" :btnText="'削除する'" />
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
            uploadfile: {},
            thumbnailURL: this.article.thumbnailURL,
        }
    },
    created() {
        
    },
    mounted() {
    },
    props: [
        'article',
    ],
    methods: {
        async changeFile(e: any) {
            const files = e.target.files || e.dataTransfer.files;
            this.uploadfile = files[0];

            try {
                const url = await this.$store.dispatch('article/imgUpload', this.uploadfile)
                this.thumbnailURL = url
                this.$toast.success("画像をアップロードしました")
            } catch (e) {
                this.$toast.error("画像をアップロードできませんでした")
            }
        },
        async update() {
            if (this.article.title === "" || this.article.description === "") {
                this.$toast.error("入力されていません")
                return
            }
            const req: TUpdateArticleParams = {
                "token": "",
                "id": this.article.id,
                "title": this.article.title,
                "description": this.article.description,
                "thumbnailURL": this.thumbnailURL,
            }
            try {
                await this.$store.dispatch('article/update', req)
                this.$toast.success("更新しました")
            } catch (e) {
                this.$toast.error("更新できませんでした")
            }
        },
        async deleteArticle() {
            if (!window.confirm('投稿を削除しますか？')) {
                return
            }
            try {
                await this.$store.dispatch('article/delete', this.article.id)
                this.$toast.success("削除しました")
            } catch (e) {
                this.$toast.error("削除できませんでした")
            }
        }
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
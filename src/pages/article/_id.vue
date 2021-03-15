<template>
    <div>
        <Header />
        <div class="MainWrapper">
            <div class="ArticleContentWrapper">
                <div class="LeftWrapper">
                    <Article v-if="article.id !== undefined" :article=article :user=user />
                </div>
                <MainRight :user=user />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
        }
    },
    created() {

    },
    mounted() {
        const articleID = this.$route.params.id
        this.$store.dispatch('article/get', { articleID })
        this.$store.dispatch('admin/getMe')
    },
    computed: {
        article() {
            const item = this.$store.getters['article/article']
            const article = {
                id: item.id,
                title: item.title,
                description: item.description,
                userID: item.userID,
            }
            return article
        },
        user() {
            return this.$store.getters['admin/user']
        }
    },
})
</script>

<style scoped>

.MainWrapper {
    height: fit-content;
    background-color: #F8F8F8;
    padding: 50px 0;
}

.ArticleContentWrapper {
    margin: auto;
    width: 70%;
    height: -webkit-fill-available;
    display: block;
}

.LeftWrapper {
    width: 100%;
    margin-bottom: 30px;
}

@media (min-width: 768px) {
    .ArticleContentWrapper {
        display: flex;
    }

    .LeftWrapper {
        width:70%;
        padding-right: 30px;
        margin-bottom: 0px;
    }
}

</style>
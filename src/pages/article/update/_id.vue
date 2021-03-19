<template>
    <div>
        <Header />
        <ArticleUpdate v-if="article.id !== undefined" :article=article />
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
    },
    computed: {
        article() {
            const item = this.$store.getters['article/article']
            const article = {
                id: item.id,
                title: item.title,
                description: item.description,
                userID: item.userID,
                thumbnailURL: item.thumbnailURL,
            }
            return article
        }
    },
})
</script>

<style scoped>

</style>
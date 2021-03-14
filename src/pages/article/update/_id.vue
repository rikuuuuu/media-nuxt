<template>
    <div>
        <Header />
        <ArticleUpdate :v-if="article" :article=article />
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
            return this.$store.getters['article/article']
        }
    },
})
</script>

<style scoped>

</style>
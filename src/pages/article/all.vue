<template>
    <div>
        <Header />
        <div class="MainWrapper">
            <div class="ArticleContentWrapper">
                <div class="LeftWrapper">
                    <div class="LeftContentsWrapper">
                        <div class="ArticleCardsWrapper">
                            <div class="ArticleCardWrapper" v-for="(article, index) in articles" :key="index">
                                <ArticleCard :article=article />
                            </div>
                        </div>
                    </div>
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
    data(){
        return {
        }
    },
    components: {
    },
    created() {

    },
    mounted() {
        this.$store.dispatch('article/getAll')
        this.$store.dispatch('admin/getMe')
    },
    methods: {

    },
    computed: {
        articles() {
            return this.$store.getters['article/articles']
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
    width: 80%;
    height: -webkit-fill-available;
    display: block;
}

.LeftWrapper {
    width: 100%;
    margin-bottom: 30px;
}

.LeftContentsWrapper {
    width: 100%;
    min-height: 1000px;
    height: fit-content;
}

.ArticleCardsWrapper {
    display: block;
}

.ArticleCardWrapper {
    background-color: #FFF;
    border-radius: 5px;
    overflow: hidden;
    width: 100%;
    box-shadow: 0 0 4px 0 #E0E0E0;
    margin-bottom: 30px;
}

@media (min-width: 768px) {
    .ArticleContentWrapper {
        display: flex;
        width: 70%;
    }

    .LeftWrapper {
        width:70%;
        padding-right: 30px;
        margin-bottom: 0px;
    }

    .LeftContentsWrapper {
        width: 95%;
        margin-right: 5%;
    }

    .ArticleCardsWrapper {
        display: flex;
        flex-wrap: wrap;
    }

    .ArticleCardWrapper {
        width: 45%;
        margin: 0 5% 30px 0;
    }
}

</style>
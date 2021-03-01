<template>
    <div>
        <Header />
        <div class="MainWrapper">
            <div class="ArticleContentWrapper">
                <div class="LeftWrapper"></div>
                <MainRight />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
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
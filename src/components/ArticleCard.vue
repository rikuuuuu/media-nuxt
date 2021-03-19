<template>
    <nuxt-link :to="{ name: 'article-id', params: { id: article.id }}">
        <div class="">
            <div class="ImgWrapper">
                <img v-if="!article.thumbnailURL" class="Img" src="/fog.jpg" alt="">
                <img v-if="article.thumbnailURL" class="Img" :src="article.thumbnailURL" alt="">
            </div>
            <div class="ContentWrapper">
                <div class="TitleWrapper">
                    <div class="Title">
                        {{ article.title }}
                    </div>
                </div>
                <div class="CreatedWrapper">
                    <div class="Created">
                        {{ article.createdAt }}
                    </div>
                </div>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props: [
        'article',
    ]
}
</script>

<style scoped>

.ContentWrapper {
    padding: 10px;
}

.TitleWrapper {
    margin-bottom: 10px;
}

.Title {
    font-size: 14px;
    letter-spacing: 0.1em;
    /* color:  */
}

.CreatedWrapper {
    margin-bottom: 10px;
}

.Created {
    font-size: 10px;
    color: #AAA;
    letter-spacing: 0.1em;
}

.Img {
    height: 14em;
}

@media (min-width: 768px) {
}
</style>
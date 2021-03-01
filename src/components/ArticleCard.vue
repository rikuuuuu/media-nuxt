<template>
    <a href="">
        <div class="ArticleCardWrapper">
            <div class="ImgWrapper">
                <img src="/fog.jpg" alt="">
            </div>
            <div class="ContentWrapper">
                <div class="TitleWrapper">
                    <div class="Title">
                        {{"title"}}
                    </div>
                </div>
                <div class="CreatedWrapper">
                    <div class="Created">
                        {{"createdat"}}
                    </div>
                </div>
            </div>
        </div>
    </a>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.ArticleCardWrapper {
    background-color: #FFF;
    border-radius: 5px;
    overflow: hidden;
    width: 100%;
    box-shadow: 0 0 4px 0 #E0E0E0;
}

.ContentWrapper {
    padding: 10px;
}

.TitleWrapper {
    margin-bottom: 10px;
}

.Title {
    font-size: 14px;
    letter-spacing: 0.1em;
}

.CreatedWrapper {
    margin-bottom: 10px;
}

.Created {
    font-size: 14px;
    color: "AAA";
    letter-spacing: 0.1em;
}

</style>
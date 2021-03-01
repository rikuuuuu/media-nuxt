<template>
    <div class="HeaderWrapper">
        <div class="TitleWrapper">
            <a class="TitleText" href="/article" >Python and Vue Blog</a>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
        }
    },
    components: {
    },
    head: {
        link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:300' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Economica:700' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Quicksand' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Oswald:700' },
        ],
    },
})
</script>

<style scoped>

.HeaderWrapper {
    height: 80px;
    background-color: #5da67f;
}

.TitleWrapper {
    margin: auto;
    width: fit-content;
    height: -webkit-fill-available;
    padding: 25px 0;
}

.TitleText {
    font-size: 24px;
    text-decoration: none;
    color: #FFF;
    font-family: "'Quicksand', 'Alegreya Sans SC', 'Economica', 'Oswald', 'Roboto Condensed', sans-serif";
}

@media (min-width: 768px) {
    .HeaderWrapper {
        height: 120px;
    }

    .TitleWrapper {
        padding: 40px 0;
    }

    .TitleText {
        font-size: 32px;
    }
}

</style>
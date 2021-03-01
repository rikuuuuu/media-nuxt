<template>
    <div class="FooterWrapper">
        <div class="TitleWrapper">
            <div class="TitleText">- Python and Vue Blog -</div>
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

.FooterWrapper {
    height: 100px;
}

.TitleWrapper {
    margin: auto;
    width: fit-content;
    height: -webkit-fill-available;
    padding: 35px 0;
}

.TitleText {
    font-size: 24px;
    text-decoration: none;
    color: #5da67f;
    font-family: "'Quicksand', 'Alegreya Sans SC', 'Economica', 'Oswald', 'Roboto Condensed', sans-serif";
}

@media (min-width: 768px) {
    .FooterWrapper {
        height: 200px;
    }

    .TitleWrapper {
        padding: 80px 0;
    }

    .TitleText {
        font-size: 32px;
    }
}

</style>
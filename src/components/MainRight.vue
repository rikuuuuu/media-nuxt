<template>
    <div class="RightWrapper">
        <div class="RightContentsWrapper">
            <div class="IconWrapper">
                <img class="Icon" src="/pennguin.png" />
            </div>
            <div class="ContentWrapper">
                <div class="InfoText">
                    ポートフォリオ用Webサイトです。
                </div>
                <div class="InfoText">
                    ログインすれば投稿が可能です。
                </div>
            </div>
            <div class="LoginLinkWrapper">
                <a href="/admin/login">
                    <BtnDefault :btnText="'ログイン'" />
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import Assets from '../assets/assets';
export default Vue.extend({
    data() {
        return {

        }
    },
    props: [
    ],
    methods: {
    }
})
</script>

<style scoped>

.RightWrapper {
    width: 100%;
}

.RightContentsWrapper {
    background-color: #FFF;
    height: fit-content;
    border-radius: 5px;
    text-align: center;
    padding: 40px 20px;
    margin-bottom: 50px;
}

.IconWrapper {
    text-align: center;
}

.Icon {
    width: 70%;
    height: auto;
    border-radius: 50%;
    margin-bottom: 20px;
}

.LoginLinkWrapper {
    text-align: center;
}

.ContentWrapper {
     margin-bottom: 30px;
}

.InfoText {
    font-size: 14px;
}

@media (min-width: 768px) {
    .RightWrapper {
        width: 30%;
    }
}
</style>
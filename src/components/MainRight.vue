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
                <nuxt-link v-if="!Object.keys(user).length" to="/admin/login">
                    <BtnDefault :btnText="'ログイン'" />
                </nuxt-link>
                <nuxt-link class="MypageBtn" v-if="Object.keys(user).length" :to="{ name: 'admin-update-id', params: { id: user.id }}">
                    <BtnDefault :btnText="'マイページ'" />
                </nuxt-link>
                <nuxt-link v-if="Object.keys(user).length" to="/article/create">
                    <BtnDefault :btnText="'投稿する'" />
                </nuxt-link>
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
        'user'
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

.MypageBtn {
    margin-bottom: 30px;
}

@media (min-width: 768px) {
    .RightWrapper {
        width: 30%;
    }
}
</style>
<template>
    <div class="LoginWrapper">
        <div class="LoginCardWrapper">
            <div class="LoginFormWrapper">
                <form>
                    <div class="LoginLabelWrapeer">
                        <p class="LoginLabel">編集</p>
                    </div>
                    <div class="LoginNameWrapper">
                        <input class="InputDefault" v-model="user.name" type="text" placeholder="ユーザーネーム" />
                    </div>
                    <div class="LoginBtnWrapper" @click="update">
                        <BtnDefault :btnText="'更新する'" />
                    </div>
                    <div class="LoginBtnWrapper" @click="logout">
                        <BtnDefault :btnText="'ログアウト'" />
                    </div>
                    <div class="LoginBtnWrapper" @click="deleteAccount">
                        <BtnDefault :btnText="'アカウント削除'" />
                    </div>
                </form>
            </div>
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
  props: [
    'user'  
  ],
  created() { 
  },
  mounted() {
  },
  methods: {
    async update() {
        if (this.user.name == "") {
            this.$toast.error("入力されていません")
            return
        }
        try {
            await this.$store.dispatch('admin/update', this.user.name)
            this.$toast.success("更新しました")
        } catch (e) {
            this.$toast.error("更新できませんでした")
        }
    },
    async logout() {
        try {
            await this.$store.dispatch('admin/logout')
            this.$toast.success("ログアウトしました")
        } catch (e) {
            this.$toast.error("ログアウトできませんでした")
        }
    },
    async deleteAccount() {
        try {
            await this.$store.dispatch('admin/delete')
            this.$toast.success("削除しました")
        } catch (e) {
            this.$toast.error("削除できませんでした")
        }
    }
  },
  computed: {
  }
})
</script>

<style scoped>

.LoginWrapper {
    height: fit-content;
    background-color: #F8F8F8;
    padding: 40px;
}

.LoginCardWrapper {
    background-color: #FFF;
    border-radius: 10px;
    margin: auto;
    justify-content: center;
    align-items: center;
    display: flex;
    box-shadow: 0 0 10px #CCC;
    padding: 50px;
}

.LoginNameWrapper {
    margin: 0 auto 50px;
    width: fit-content;
}

.LoginBtnWrapper {
    margin: 0 auto 50px;
    width: 100%;
}

.FormBtn {
    width: 100%;
}

.LoginLabelWrapeer {
    margin: 0 auto 30px;
    width: fit-content;
}

.LoginLabel {
     margin-bottom: 20px;
}

@media (min-width: 768px) {
    .LoginWrapper {
        padding: 80px;
    }

    .LoginCardWrapper {
        width: 600px;
        height: 700px;
        padding: 0px;
    }
}

</style>
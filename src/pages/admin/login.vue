<template>
    <div>
        <Header />
        <div class="LoginWrapper">
            <div class="LoginCardWrapper">
                <div class="LoginFormWrapper">
                    <form>
                        <div class="LoginEmailWrapper">
                            <input class="InputDefault" v-model="email" type="email" placeholder="Email" />
                        </div>
                        <div class="LoginPassWrapper">
                            <input class="InputDefault" v-model="password" type="password" placeholder="Password" />
                        </div>
                        <div class="LoginBtnWrapper" @click="login">
                            <BtnDefault :btnText="'ログイン'" />
                        </div>
                        <div class="LoginBtnWrapper" @click="signup">
                            <BtnDefault :btnText="'新規登録'" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import $toast from '@nuxtjs/toast'

export default Vue.extend({
  data() {
    return {
        email: '',
        password: ''
    }
  },
  props: [
  ],
  methods: {
    async login() {
        const req = {
            email: this.email,
            password: this.password
        }
        if (req.email === "" || req.password === "") {
            this.$toast.error("項目を入力してください")
            return
        }
        if (req.password.length < 8) {
            this.$toast.error("パスワードを８文字以上で入力してください")
            return
        }

        try {
            await this.$store.dispatch('admin/login', req)
            this.$toast.success("ログインしました")
        } catch (e) {
            console.log("catch", e)
            this.$toast.error("ログインに失敗しました")
        }

    },
    async signup() {
        const req = {
            email: this.email,
            password: this.password
        }
        if (req.email === "" || req.password === "") {
            this.$toast.error("項目を入力してください")
            return
        }
        if (req.password.length < 8) {
            this.$toast.error("パスワードを８文字以上で入力してください")
            return
        }
        try {
            await this.$store.dispatch('admin/create', req)
            this.$toast.success("新規登録しました")
        } catch (e) {
            console.log("catch", e)
            this.$toast.error("新規登録に失敗しました")
        }
    }
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

/* .LoginFormWrapper {

} */

.LoginEmailWrapper {
    margin: 0 auto 50px;
    width: fit-content;
}

.LoginPassWrapper {
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

</style>>
<template>
    <div>
        <Header />
        <div class="LoginWrapper">
            <div class="LoginCardWrapper">
                <div class="LoginFormWrapper">
                    <form>
                        <div class="LoginEmailWrapper">
                            <input class="InputDefault" type="email" placeholder="Email" />
                        </div>
                        <div class="LoginPassWrapper">
                            <input class="InputDefault" type="password" placeholder="Password" />
                        </div>
                        <div class="LoginBtnWrapper">
                            <BtnDefault :btnText="'ログイン'" v-on:click="login" />
                        </div>
                        <div class="LoginBtnWrapper">
                            <BtnDefault :btnText="'新規登録'" v-on:click="signup" />
                        </div>
                    </form>
                </div>
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
  ],
  methods: {
    login() {
        console.log('login')
    },
    signup() {
        console.log('signup')
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

.LoginFormWrapper {

}

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
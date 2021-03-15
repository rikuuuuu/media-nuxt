<template>
    <div>
        <Header />
        <AdminUpdate v-if="user" :user=user />
        <Footer />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
        }
    },
    created() {

    },
    mounted() {
        this.$store.dispatch('admin/getMe')
    },
    computed: {
        user() {
            // stateを変更するとエラーになるので
            const item = this.$store.getters['admin/user']
            const user = {
                email: item.email,
                name: item.name,
            }
            return user
        }
    }
})
</script>

<style scoped>

</style>
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
            return this.$store.getters['admin/user']
        }
    }
})
</script>

<style scoped>

</style>
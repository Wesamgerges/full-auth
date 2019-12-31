<template>
<div>
    <div v-if="!loading">
        <login :register="register" :errorMessage="errorMessage" @dismissed="errorMessage=''" @login="login"></login>
        <div class="row">
            <div style="max-width: 400px;" class="col d-flex justify-content-end mt-2 mx-auto">
                <a href="/login" @click.prevent="register=!register"> {{ messge }} </a>
            </div>
        </div>
    </div>
   <div v-else> 
        <loading ></loading>
    </div>
</div>
</template>

<script>
import authService from '~/services/Authentication.js'
import login from '~/components/Login.vue'
import loading from '~/components/Loading.vue'

import { mapMutations, mapGetters, mapState } from 'vuex'
export default {
    layout: 'plain',
    middleware: ['authenticated'],
    components: {
        login,
        loading
    },
    data() {
        return {
            register: false,
            messge: "Not registered yet?",
            errorMessage: "",
            loading: false,
        }
    },
    mounted(){
        this.errorMessage = localStorage.getItem("errorMessage")
        localStorage.removeItem("errorMessage")
    },
    watch: {
        register(v) {
            this.setIsRegister(v)
            this.messge = v ? "Already registered?" : "Not registered yet?"
        }
    },
    methods: {
        async login( { provider, user } ) {
            if(this.register && provider == 'local'){
                try {
                    await authService.register( user )
                } catch(e) {
                    this.errorMessage = e
                    return;
                }
            }
            await authService.loginWith(provider, user)
            .catch( error => {
                this.errorMessage = error
            })
            this.loading = false
            this.$router.push('/')
        },
        ...mapMutations('user', ['setIsRegister', 'reset']),
    }
}
</script>
function initialUser() {
    return {
        first_name:     "",
        last_name:      "",
        email:          "",
        password:       "",
        accessToken:    "",
        provider:   "local"
    }
}
export default {
    namespaced: true,
    state: {
        data: initialUser(),
    },
    mutations: {
        setIsRegister(state, payload) {
            if(payload) {
                localStorage.isRegister = payload
            } else {
                localStorage.removeItem("isRegister")
            }
        },
        reset(state){
            Object.assign(state.data, initialUser());
            // localStorage.clear()
        }
    },
    actions: {

    },
    getters: {
        getIsRegister(state) {
            return localStorage.getItem("isRegister")
        }
    },
}

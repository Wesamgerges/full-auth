class Authentication {
    constructor(auth = null){
        this.auth = auth;
        this.readableMessages = {
            E_PASSWORD_MISMATCH: "Invalid email or password.",
            E_USER_NOT_FOUND: "It seems you didn't register yet.",
            ER_NO_DEFAULT_FOR_FIELD: "You already registered. Please login",
            ER_DUP_ENTRY: "You already registered. Please login.",
            ER_BAD_NULL_ERROR: "Email and Password are required."
        };
    }
    async setContext({$auth, $axios}) {
        this.auth = $auth;
        this.axios = $axios
    }

    async loginWith( provider, user ) {
        await this.auth.loginWith(provider, { data: { provider: user.provider, user } })
            .catch(async (error) => {
                await this.auth.logout()
                throw this.getErrorMesssage(error)
            });
    }

    async register( user  ) {
        console.log("calling register!!")
        localStorage.removeItem("isRegister")
        try {
            await this.axios.post('/register', user)
        } catch(e){
            throw this.getErrorMesssage(e)
        }
    }

    async setUserDataFromAuth( store, provider ) {
        let user = {
            email:      this.auth.user.email,
            first_name: this.auth.user.given_name,
            last_name:  this.auth.user.family_name,
            accessToken:this.auth.getToken(provider),
            password:   this.auth.getToken(provider).substr(7, 40),
            provider: provider
        }
        store.state.user.data = user
        return user
    }

    getErrorMesssage(error) {
        return this.readableMessages[error.response.data.message] 
            ? this.readableMessages[error.response.data.message]  
            : error.response.data.message
    }
}

export default new Authentication();
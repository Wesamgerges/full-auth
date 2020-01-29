class Authentication {
    constructor(auth = null){
        if(auth) this.auth = auth;
        else {
            // this.auth = 
        }
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
        localStorage.removeItem("isRegister")
        try {
            await this.axios.post('/register', user)
        } catch(e){
            throw this.getErrorMesssage(e)
        }
    }

    async getUser( strategy ) {
        return {
            email:      this.auth.user.email,
            first_name: this.auth.user.given_name,
            last_name:  this.auth.user.family_name,
            token:      this.auth.getToken(strategy).substr(7)
        }
      
    }

    async setUserDataFromAuth( strategy ) {
        let user = {
            email:      this.auth.user.email,
            first_name: this.auth.user.given_name,
            last_name:  this.auth.user.family_name,
            token:      this.auth.getToken(strategy).substr(7),
          //  password:   this.auth.getToken(provider).substr(7),
           // provider: provider
        }
        // store.state.user.data = user
        return user
    }

    getErrorMesssage(error) {
        return this.readableMessages[error.response.data.message] 
            ? this.readableMessages[error.response.data.message]  
            : error.response.data.message
    }
}

export default new Authentication();
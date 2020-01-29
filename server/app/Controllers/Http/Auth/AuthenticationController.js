'use strict'

const User = use('App/Models/User')

class AuthenticationController {
  
    async register({ request, auth, response }) {
        const userData = request.only(['first_name', 'last_name', 'email', 'password'])

        try {
            const user = await User.create(userData)

            // const token = await auth.generate(user)

            return response.json({
                status: 'success',
                data: user
            })
        } catch (error) {
            return response.status(400).json({
                status: 'error',
                message: error.code || error
            })
        }
    }

    async signin({ request, ally, auth, response, params }) {
        let { user, token } = request.only(['user', 'token'])
        try {
            user    = await this.verifyToken({ user, token, strategy: params.strategy, ally })
            token   = await auth.generate( user )
        } catch (error) {
            response.status(401).json({
                status: 'error',
                message: error
            })
        }
        return response.json({
            status: 'success',
            data: token
        })
    }

    async login({ request, ally, auth, response }) {
        let { provider, user } = request.only(['provider', 'user'])
        let accessToken =  "";

        try {
            // If logged in via social login
            if (provider == 'local') {
                accessToken = await auth.attempt(user.email, user.password)
            } else {
                user = await this.verifyToken({ user, provider, ally })
                accessToken = await auth.generate( user )
            }           

            return response.json({
                status: 'success',
                data: accessToken
            })
        } catch (error) {
            response.status(401).json({
                status: 'error',
                message: error.code || error
            })
        }
    }

    async verifyToken({ user, token, strategy, ally } ){
        
        const userData = await ally.driver(strategy).getUserByToken(token)
        try {
            if( userData.getEmail() !== user.email ) {
                throw "E_USER_NOT_FOUND"
            }
            return await User.findByOrFail('email', userData.getEmail())
        } catch(e) {
            throw e
        }
    }

    async user({ auth, response }) {
        // Convert the `role` property to array for `hasScope` function
        if (!Array.isArray(auth.user.role)) {
            auth.user.role = [auth.user.role];
        }
        return response.json({
            status: 'success',
            data: auth.user
        })
    }
}

module.exports = AuthenticationController
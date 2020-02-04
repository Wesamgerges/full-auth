const User = use('App/Models/User')

class LoginController {
  async redirect ({ ally }) {
    await ally.driver('google').redirect()
  }

  async callback ({ ally, auth, response }) {
    try {
      const user = await ally.driver('google').getUser()

      // user details to be saved
      const userDetails = {
        email: user.getEmail(),
        token: user.getAccessToken(),
        login_source: 'google'
      }

    //   // search for existing user
    //   const whereClause = {
    //     email: user.getEmail()
    //   }

    //   const user = await User.findOrCreate(whereClause, userDetails)
    //   await auth.login(user)
    response.redirect('http://localhost:3000')
      return 'Logged in'

    } catch (error) {
      return 'Unable to authenticate. Try again later'
    }
  }
}

module.exports = LoginController
export default async function ({ app }) {
    if (!app.$auth.loggedIn) {
        return
    }
    const auth = app.$auth;
    const authStrategy = auth.strategy.name;
        if(authStrategy === 'facebook' || authStrategy === 'google'){
        const token = auth.getToken(authStrategy).substr(7)       
        const url = `/user/signin/${authStrategy}`;
        const user =  {
            email:      auth.user.email,
            first_name: auth.user.given_name,
            last_name:  auth.user.family_name,           
        }
        try {
            const {data} = await app.$axios.$post(url, { user, token });
            auth.setToken(authStrategy, "");
            auth.setToken('local', "Bearer "+ data.token);
            auth.setStrategy('local');
            await auth.fetchUser();           
        } catch (e) {
            console.log(e);
        }
    }
}


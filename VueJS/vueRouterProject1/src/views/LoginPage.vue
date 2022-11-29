<template>
    <div class="login">
        <!--The below use of .prevent prevents @submit login doing default behaviour, instead calling our custom method-->
        <form class="form" @submit.prevent="login">
        <h1>Login</h1>
        <label for="username">Username</label>
        <input v-model="username" name="username" type="text" class="input">
        <label for="password">Password</label>
        <input v-model="password" name="password" type="text" class="input">
        <button class="btn">Login</button>
    </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            username: '',
            password: ''
        }
    },
    methods: {
        login(){
            //of course usually we'd authenticate our users agains a real API
            //instead here we're just setting the window to the data objects usernam
            window.user = this.username
            //here we define (lesson 22) the redirect path, or the protected page as a default if there is none.
            const redirectPath = this.$route.query.redirect || '/protected'
            //then pushing them to the correct page
            this.$router.push(redirectPath)
        }
    }
}
</script>

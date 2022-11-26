Vue.createApp({
    data(){
        return {
            usernames: ['jameskuht', 'hootlex']
        }
    }
})
    .component('github-user-card', {
        // not sure why but the hashtag selector is crucial here
        template: '#github-user-card-template',
        props:{
            username: {type: String, required: true}
        },
        data(){
            return {
                user: {}
            }
        },
        // use 'async' so we can await the response from github
        async created(){
            // something horrendous below - you must use `backticks`, not 'single quotes' for this, else it doesn't work!
            const response = await axios.get(`https://api.github.com/users/${this.username}`)
            this.user = response.data 
        }
    })
    .mount('#app')
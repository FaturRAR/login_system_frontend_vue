<template>
    <div class="container-md">
        <form style="max-width: 400px" class="border px-5 py-4 mx-auto mt-5 rounded">
            <h3 class="my-3">Login</h3>
            <div v-if="error" class="alert alert-danger" role="alert">
                {{errorMessage}}
            </div>
            <div class="my-3">
                <label for="email" class="form-label">Email address</label>
                <input v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="example@mail.com">
            </div>
            <div class="my-3">
                <label for="password" class="form-label">Password</label>
                <input v-model="password" type="password" class="form-control" id="password">
            </div>
            <button @click="login()" type="button" class="btn btn-primary">Login</button>
            <div class="my-3">
                <p>forgot password? change password <a href="/#/c/email">here</a></p>
                <span>Don't have account? Register <a href="/#/register">here</a></span>
            </div>
        </form>
    </div>
</template>
<script>
import Service from '../services/user.services'

export default {
    name: 'login',
    data () {
        return {
            email: '',
            password: '',
            errorMessage: '',
            error: false
        }
    },
    methods: {
        login() {
            const data = {
                email: this.email,
                password: this.password
            }
            Service.login(data)
                .then(user => {
                    if(user.data.auth == false){
                        this.errorMessage = user.data.message;
                        this.error = true
                    } else {
                        this.error = false
                        this.$store.token = user.data.token;
                        this.$router.push({path: '/home'});
                    }
                })
                .catch(err => {
                    console.log('error', err)
                }) 
        }
    }
}
</script>
<template>
    <div class="container-md">
        <form action="" style="max-width: 400px;" class="border px-5 py-4 mx-auto my-5 rounded">
            <h2>Register</h2>
            <div v-if="error" class="alert alert-danger" role="alert">
                {{errorMessage}}
            </div>
            <div class="my-3">
                <label for="name" class="form-label">Name</label>
                <input v-model="name" type="text" class="form-control" id="name" placeholder="your name">
            </div>
            <div class="my-3">
                <label for="email" class="form-label">Email address</label>
                <input v-model="email" type="email" class="form-control" id="email" placeholder="name@example.com">
            </div>
            <div class="my-3">
                <label for="password" class="form-label">Password</label>
                <input v-model="password" type="password" class="form-control" id="password" placeholder="password">
            </div>
            <button type="button" @click="register()" class="btn btn-primary">Register</button>
            <div class="my-3">
                <span>Have an account? Login <a href="/#/login">here</a></span>
            </div>
            
        </form>
    </div>
</template>
<script>
import Service from '../services/user.services'

export default {
    name: 'register',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            errorMessage: '',
            error: false
        }
    },
    methods: {
        register() {
            const data = {
                name: this.name,
                email: this.email,
                password: this.password
            }

            if(this.name == ''){
                this.errorMessage = 'Name must be filled out'
                this.error = true;
            } else if(this.email == ''){
                this.errorMessage = 'Email must be filled out'
                this.error = true;
            } else if(this.password == '') {
                this.errorMessage = 'Password must be filled out'
                this.error = true;
            } else {
                Service.register(data)
                    .then((res) => {
                        console.log(res)
                        if(res.data.message){
                            this.errorMessage = res.data.message
                            this.error = true
                        } else {
                            this.$router.push({name: 'login'})
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        }
    }
}
</script>
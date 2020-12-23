<template>
    <div>
        <form action="" style="width: 500px;" class="border px-5 py-4 mx-auto mt-5 rounded">
            <div class="my-3">
                <h3>Your Email</h3>
            </div>
            <div v-if="error" class="alert alert-danger" role="alert">
                {{errorMessage}}
            </div>
            <div class="my-3">
                <label for="email" class="form-label">Email</label>
                <input v-model="email" type="email" class="form-control" id="email" placeholder="your email">
            </div>
            <button @click="checkMail()" type="button" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>
<script>
import Services from '../../services/user.services'

export default {
    name: 'confirmEmail',
    data() {
        return {
            email: '',
            error: false,
            errorMessage: ''
        }
    },
    methods: {
        checkMail() {
            Services.getOne(this.email)
                .then(user => {
                    if(user.data){
                        this.$store.userId = user.data._id;
                        this.$router.push({path: '/c/password'})
                    } else {
                        this.error = true;
                        this.errorMessage = "no user with that email"
                    }
                }) 
                .catch(err => {
                    console.log(err)
                })
        }
    }
}
</script>
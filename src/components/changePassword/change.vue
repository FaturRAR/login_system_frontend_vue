<template>
    <div>
        <form action="" style="width: 500px;" class="border px-5 py-4 mx-auto mt-5 rounded">
            <div class="my-3">
                <h3>Change Password</h3>
            </div>
            <div v-if="error" class="alert alert-danger" role="alert">
                {{errorMessage}}
            </div>
            <div class="my-3">
                <label for="password" class="form-label">Password</label>
                <input v-model="password" type="password" class="form-control" id="password" placeholder="new password">
            </div>
            <button @click="changePassword()" type="button" class="btn btn-primary">Change</button>
        </form>
    </div>
</template>
<script>
import Services from '../../services/user.services'
export default {
    name: 'ChangePassword',
    data(){
        return {
            password: '',
            error: false,
            errorMessage: ''
        }
    },
    methods: {
        changePassword() {
            Services.changePassword(this.$store.userId ,{password: this.password})
                .then(() => {
                    alert('Password has been changes!');
                    this.$router.push({path: '/login'})
                })
                .catch(() => {
                    this.error = true;
                    this.errorMessage = "error when change password";
                })
        }
    }
}
</script>
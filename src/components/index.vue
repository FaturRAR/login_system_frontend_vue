<template>
    <div style="max-width: 400px; margin-top: 100px;" class="container-fluid">
        <table class="table table-bordered mx-auto">
            <thead>
                <tr>
                    <th class="text-center" scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th class="text-center" scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="index">
                    <th class="text-center" scope="row">{{index+1}}</th>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td class="text-center"><button @click="deleteUser(user._id)" class="btn badge bg-danger">Delete</button></td>
                </tr>
            </tbody>
        </table>
            <button class="btn btn-primary mt-5" @click="logout()">Log Out</button>
    </div>
</template>
<script>
import Services from '../services/user.services'

export default {
    name: 'home',
    data(){
        return {
            users: []
        }
    }, 
    methods: {
        getUser(){
            Services.getUser(this.$store.token)
                .then(user => {
                        this.users = user.data;
                    })
                .catch(() => {
                    this.$router.push({name: 'login'})
                })
        },
        deleteUser(id) {
            Services.deleteUser(id, this.$store.token)
                .then(() => {
                    this.getUser();
                })
                .catch(err => {
                    console.error(err)
                })
        },
        logout() {
            this.$router.push({name: 'login'})
            this.$store.token = '';
        }
    },
    mounted() {
        this.getUser()
    }
}
</script>
<template>
    <div class="vue-signup">
        <div>
            <h3>Sign Up</h3>
            <div class="form-group">
                <label>Full Name</label>
                <input type="text"  class="form-control form-control-lg"/>
            </div>
            <div class="form-group">
                <label>Email address</label>
                <input type="email" v-model="email" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="password" class="form-control form-control-lg" />
            </div>
            <button v-on:click="submit()" class="btn btn-dark btn-lg btn-block">Sign Up</button>
            <p class="forgot-password text-right">
                Already registered 
                <router-link to="/login">sign in?</router-link>
            </p>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    data()
    {
        return {
            email:'',
            password:''
        }
    },

    components:{
    },

    computed:{
    },

    methods:{
        submit(){
            console.log("working")
            firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .then(data => {
                console.log(data.user)
            })
            .catch(err => {
                console.log(err)
            });
        }
    }
}
</script>

<style scoped>
    .vue-signup {
        width: 450px;
        background: #ffffff;
        box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
        padding: 40px 55px 45px 55px;
        border-radius: 15px;
        transition: all .3s;
        margin: 0 auto;
    }
</style>

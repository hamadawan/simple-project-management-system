<template>
    <div class="vue-signup">
        <form>
            <h3>Sign Up</h3>
            <div class="form-group">
                <label>Full Name</label>
                <input type="text" class="form-control form-control-lg"/>
            </div>
            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>
            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>
            <p class="forgot-password text-right">
                Already registered 
                <router-link to="/login">sign in?</router-link>
            </p>
        </form>
    </div>
</template>

<script>

export default {
    components:{
    },
    computed:{
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

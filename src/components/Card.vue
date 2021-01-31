<template>
    <div class="card">
        <div class="container">
            <h4><b>{{project.title}}</b></h4> 
            <p>{{project.description}}</p> 
        </div>
    </div>
</template>

<script>

export default {
    props:['project'],
    computed:{

    }
}
</script>

<style scoped>
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        width: 100%;
        max-width: 250px;
        border-radius: 5px;
    }
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    .container {
        padding: 2px 16px;
    }
    .container h4 {
        font-size: 1.5rem;
    }

</style>
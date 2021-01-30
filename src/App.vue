<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Главная</router-link>
        </div>

        <router-view/>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    methods: mapActions(['fetchHotels']),

    async mounted() {
        this.fetchHotels();
    }
}
</script>

<style>
* {
    line-height: .9;
}

#app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 0 auto 32px;
    width: 678px;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

.card {
    border: solid #ddd 1px;
    border-radius: 16px;
    margin-bottom: 16px;
    padding: 16px;
}

.btn {
    box-sizing: border-box;
    padding: 12px 16px;
    text-transform: uppercase;
    border: none;
}
</style>

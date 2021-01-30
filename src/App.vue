<template>
    <div id="app">
        <div id="header">
            <div id="logo">
                bookMe
            </div>

            <div id="nav">
                <router-link to="/">Выбор отеля</router-link>
                <router-link to="/bookings">Текущие брони</router-link>
            </div>
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

a {
    color: #439be8;
}

#app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 0 auto 32px;
    width: 678px;
    padding-top: 56px;
}

#header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 56px;
    background-color: #fff;
    box-shadow: 0 0 4px 4px rgba(0, 0, 0, .05);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#logo {
    font-size: 20px;
    font-weight: bold;
    position: relative;
    left: 16px;
}

#nav {
    position: relative;
    right: 16px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
    padding: 12px;
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

.card-header {
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: solid #ddd 1px;
}

.card-body *:last-child {
    margin-bottom: 0;
}

.form-group {
    margin-bottom: 16px;
}

.form-group label {
    font-size: 12px;
    font-weight: bold;
    display: block;
    margin-bottom: 6px;
}

.form-control {
    box-sizing: border-box;
    border: solid #ddd 1px;
    padding: 6px;
    display: block;
    width: 100%;
}

.form-control-text {
    font-size: 10px;
    color: #939393;
    margin-top: 4px;
}

.form-control-text-error {
    color: red;
}

.btn {
    box-sizing: border-box;
    padding: 12px 16px;
    text-transform: uppercase;
    border: none;
    border-radius: 4px;
}

.btn-wrapper {
    display: flex;
    justify-content: flex-end;
}

.btn-wrapper .btn {
    margin-left: 16px;
}
</style>

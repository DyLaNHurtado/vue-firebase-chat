
<template>
  <NavBarComponent/>
  <router-view />

  <h1>App</h1>
  <h2>app</h2>
</template>

<script>
import NavBarComponent from './components/NavBarComponent.vue';
import Home from './pages/Home.vue';

export default {
    name: "App",
    components: { Home, NavBarComponent }
}
</script>

<style scoped>

</style>

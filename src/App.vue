
<template>
  <NavBarComponent/>
  <AuthPage/>
  <router-view />

  <h1>App</h1>
  <h2>app</h2>
</template>

<script>
import NavBarComponent from './components/NavBarComponent.vue';
import AuthPage from './pages/AuthPage.vue';
import HomePage from './pages/HomePage.vue';

export default {
    name: "App",
    components: { HomePage, NavBarComponent, AuthPage }
}
</script>

<style scoped>

</style>

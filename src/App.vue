
<template>
  <NavBarComponent/>
  <router-view />
</template>

<script>
import NavBarComponent from './components/NavBarComponent.vue';

export default {
    name: "App",
    components: {  NavBarComponent,  }
}
</script>

<style scoped>

</style>

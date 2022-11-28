<template> 
<nav class="fixed bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full z-20 border-b border-gray-200 dark:border-gray-600">   
    <div class="flex flex-wrap items-center justify-between mx-auto">
        <div class="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo">
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">VueFirebaseChat</span>
        </div>
    <div class="self-center items-center justify-center hidden w-full md:flex md:w-auto" id="navbar-sticky">
        <ul class="flex rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <button>
                <span class="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700">Home</span>
            </button>
            <button>
                <span class="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700">Create Room</span>
            </button>
        </ul>
    </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto" v-if="user">
    <button type="button" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Profile</button>
    <button type="button" @click="doLogout" class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Logout</button>
  </div>
  <div  class="flex md:hidden" >
    <button @click="actionMenu" data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
</div>
<div class="w-full h-screen-full pt-5 md:hidden transition-all" :class=" isMenuActive ? 'hidden':''">
    <ul class="flex flex-col">
        <button class="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700">
            <span>Home</span>
        </button>
        <button class="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700">
            <span>Create Room</span>
        </button>
        <div class="flex flex-row items-center justify-around w-full pt-5" v-if="user">
            <button type="button" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Profile</button>
            <button type="button" @click="doLogout" class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Logout</button>
        </div>
    </ul>
</div>
</nav>

</template>
<script>
import {mapState} from "vuex";
    export default{
        name:'NavBarComponent',
        data(){
            return{
                isMenuActive:false,
            }
        },
        methods:{
            actionMenu(){
                this.isMenuActive = !this.isMenuActive;
            },
            async doLogout(){
                try {
                    await this.$store.dispatch("user/doLogout");
                    this.$router.push({path:"/auth"});
                    this.$toast.success("Logged out!");
                } catch (error) {
                    this.$toast.error(error.message);
                }
            }
        },
        computed:{
            ...mapState("user",["user"])
        }
    }
</script>
<style scoped></style>
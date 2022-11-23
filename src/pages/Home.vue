
<template>
    <div class="w-full h-full flex justify-center items-center">
        <button v-if="!user" @click="login" class="px-5 py-3 bg-gray-300">Log in with google</button>
        <template v-else>
            <h1 class="text-lg text-gray-800">{{user.profile}}</h1>
            <button @click="logOut" class="px-5 py-3 bg-gray-300">Log out</button>
        </template>
    </div>
</template>
<script>
import { fb , auth } from "../firebase";
export default{
    name:'Home',
    data(){
        return{
            user:null
        }
    },
    methods:{
        async login(){
            try{
                const provider = new fb.auth.GoogleAuthProvider();
                this.user =  await auth.signInWithPopup(provider)
                console.log(this.user);
            }catch(error){
                console.error(error.message)
            }
        },
        logOut(){
            try{
                
                this.user = null
            }catch(error){
                console.error(error.message)
            }
        }
    }
    
}
</script>
<style scoped>

</style>

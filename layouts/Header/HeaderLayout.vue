<script setup lang="ts">
import HeaderLogo from './components/HeaderLogo.vue'
import HeaderLink from './components/HeaderLink.vue'
import ButtonBrand from '~/components/ButtonBrand.vue';
</script>
<template>
    <header class="  bg-black py-3">
        <div class="container flex items-center justify-between flex-wrap">

            <div class="left flex gap-[30px]">
                <HeaderLogo/>
                <HeaderLink/>
    
            </div>
            <div class="right flex flex-wrap text-white  text-lg items-center gap-[30px] ">
                <p class="font-bold"> +7 495 118-44-22</p>
                <p class="hover:text-[#0584FE] duration-150 cursor-pointer">Войти</p>
    <ButtonBrand class="w-[117px]">Регистрация</ButtonBrand>
            </div>
        </div>
    </header>
</template>

<style scoped>
header{
    background: linear-gradient(90deg, #000000 30%, #1C2734 73%);

}
</style>
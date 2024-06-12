<script lang="ts" setup>
import { CARD_DATA } from '../components/card.data'

</script>
<template>
    <section class="service">
        <div class="container">
            <h2 class="text-[34px] font-bold leading-10 text-center">Плюсы использования сервиса «Компас» для анализа
                штрафов</h2>
            <div class="cards flex flex-wrap gap-[35px] justify-between mt-[57px]">
                <div class="card gap-[35px] items-center w-[362px] bg-[#EEEFF1] rounded-[10px] flex  p-[20px]" v-for="card in CARD_DATA">
                    <div class="left w-[60px]">
                        <img :src="card.icon" alt="">
                    </div>
                    <div class="right w-[247px]">
                        <p class="title text-[18px] text-[#1253A2] font-bold">{{ card.name }}</p>
                        <p class="sub text-[15px] text-[#000000] mt-[10px]">{{ card.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
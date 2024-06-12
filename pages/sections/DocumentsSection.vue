<script lang="ts" setup>
import { DOCUMENTS_DATA } from '../components/documents.data'

</script>
<template>
    <section class="service">
        <div class="container ">
            <h2 class="text-[34px] font-bold leading-10 text-center">Документы</h2>
            <div class="documents flex flex-wrap gap-[35px] justify-around mt-[57px]">
                <div class="document h-[450px] w-[340px] border bg-[#EEEFF1] rounded-[10px] flex flex-col justify-between p-[25px] shadowing"
                    v-for="document in DOCUMENTS_DATA">
                    <div>
                        <p class="title text-[31px] leading-10 text-[#1253A2] font-bold">{{ document.name }}</p>
                        <p class="sub text-[18px] text-[#000000] mt-[15px]">{{ document.desc }}</p>
                    </div>
                    <ButtonBrand class="w-full text-center">Перейти</ButtonBrand>
                </div>
            </div>
            <div class="arrows">
                <div class="left">
                    <img src="../../assets/icons/left-arrow.svg" alt="">
                </div>
                <div class="right">
                    <img src="../../assets/icons/right-arrow.svg" alt="">
                </div>
            </div>
        </div>

    </section>
</template>
<style scoped>
.shadowing {
    box-shadow: 0px 0px 20px 0px #0000001F;

}

.container {
    position: relative;
}

.arrows {
    position: absolute;
    top: 30%;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
    pointer-events: none;
}

.arrows .left,
.arrows .right {
    pointer-events: all;
    cursor: pointer;
}


.arrows .left {
    margin-left: 160px;
}

.arrows .right {
    margin-right: 160px;
}
</style>
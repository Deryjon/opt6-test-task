<script setup lang="ts">
const isOpen = ref(false)

</script>
<template>
    <section class="ticket mt-[80px]">
        <div class="container flex flex-wrap justify-between">
            <div class="left w-1/2">
                <h1 class="text-[41px] font-bold text-black">Проверьте штрафы и зарегестрируйтесь в 1 клик</h1>
                <form class="mt-[15px] flex flex-wrap gap-x-[30px]">
                    <div class="flex flex-col gap-[5px]">

                        <label for="car-number" class="text-[12px] leading-12 font-normal">Номер автомобиля</label>
                        <input type="text" id="car-number" name="car-number"
                            class="w-[320px] border-button rounded-[5px] p-2 bg-transparent">
                    </div>
                    <div class="flex flex-col gap-[5px] ">

                        <label for="car-number" class="text-[12px] leading-12 font-normal">Регион</label>
                        <input type="text" id="car-number" name="car-number"
                            class="w-[213px] border-button rounded-[5px] p-2 bg-transparent">
                    </div>
                    <div class="flex flex-col gap-[5px] mt-[10px]">

                        <label for="car-number" class="text-[12px] leading-12 font-normal">Свидетельство о регистрации
                            ТС</label>
                        <input type="text" id="car-number" name="car-number"
                            class="w-[563px] border-button rounded-[5px] p-2 bg-transparent">
                    </div>
                </form>
                <div class="buttons flex mt-[15px] gap-[21px]">
                        <ButtonBrand class='flex items-center gap-[4px] px-[20px]'>
                            <p>Проверить штрафы</p>
                            <Icon name="mdi:arrow-right" size="20"/>
                        </ButtonBrand>
                        <button class="btn text-lg flex gap-[4px] items-center border-blue px-[20px] rounded-md hover:bg-[#d1d2d8] duration-150" @click="isOpen = true">
                            <img src="../../assets/icons/youtube.svg" alt="">
                            О сервисе
                            <span class="text-[#1253A2] text-[15px]">(1 мин. 20 сек)</span>
                        </button>
                        <UModal v-model="isOpen" class="h-[400px] w-[800px] relative">
                          <div class="flex justify-end absolute">
                            <Icon name="mdi:close" @click="isOpen = false"/>
                          </div>
      <div class=" h-[400px] w-[800px]">
        <div class="video-container ">
  <iframe  src="https://www.youtube.com/embed/52oBdIWiDZo?rel=0" frameborder="0" allowfullscreen></iframe>
</div>

        </div>
    </UModal>
                </div>
                <p class="text-[#8F8F8F] text-[13px] mt-[16px]">Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки персональных данных и принимаете оферту</p>
            </div>
            <div class="right w-1/2">
                <img src="../../assets/icons/image 2.jpg" alt="" class="mx-auto mt-[10px]">
            </div>
        </div>
    </section>
</template>
<style scoped>
.border-button {
    border: 1px solid #BCBCBC;
}
.border-blue {
    border: 1px solid #0584FE;
}

.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
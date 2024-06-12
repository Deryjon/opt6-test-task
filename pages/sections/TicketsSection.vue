<template>
    <section class="ticket mt-[80px]">
        <div class="container flex flex-wrap justify-between">
            <div class="left w-1/2">
                <h1 class="text-[41px] font-bold text-black">Проверьте штрафы и зарегестрируйтесь в 1 клик</h1>
                <form class="mt-[25px] flex flex-wrap gap-x-[30px]">
                    <div class="flex flex-col gap-[5px]">

                        <label for="car-number" class="text-[12px] leading-12 font-normal">Номер автомобиля</label>
                        <input type="text" id="car-number" name="car-number"
                            class="w-[320px] border-button rounded-[5px] p-2">
                    </div>
                    <div class="flex flex-col gap-[5px] ">

                        <label for="car-number" class="text-[12px] leading-12 font-normal">Регион</label>
                        <input type="text" id="car-number" name="car-number"
                            class="w-[213px] border-button rounded-[5px] p-2">
                    </div>
                    <div class="flex flex-col gap-[5px] mt-[16px]">

                        <label for="car-number" class="text-[12px] leading-12 font-normal">Свидетельство о регистрации
                            ТС</label>
                        <input type="text" id="car-number" name="car-number"
                            class="w-[563px] border-button rounded-[5px] p-2">
                    </div>
                </form>
                <div class="buttons">
                        <ButtonBrand>
                            <p>Проверить штрафы</p>
                            
                        </ButtonBrand>
                </div>
            </div>
            <div class="right w-1/2">
                <img src="../../assets/icons/image 2.jpg" alt="" class="mx-auto">
            </div>
        </div>
    </section>
</template>
<style scoped>
.border-button {
    border: 1px solid #BCBCBC;
}
</style>
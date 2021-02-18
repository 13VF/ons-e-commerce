<template>
  <div class="header">
    <NuxtLink to="/">
      <img class="logo" src="/svg/ozon23.svg" alt="">
    </NuxtLink>
    <NuxtLink class="cartButton" to="/cart">
      Корзина <div class="counter">13</div>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Header',
})
</script>

<style scoped>
.header {
  height: 56px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  width: 128px;
  height: 40px;
}

.cartButton {
  display: flex;
  text-decoration: none;
  color: #000;
}

.counter {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 6px;
  background-color: lightgray;
  border-radius: 50%;
  font-size: 12px;
  font-weight: bold;
}
</style>
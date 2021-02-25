<template>
  <div class="cartList">
    <div v-if="!cartItems.length">
      В корзине нет товаров.
    </div>
    <div v-else>
      <div
        v-for="item of cartItems"
        :key="item.id"
        class="listItem"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'CartMain',

  computed: {
    ...mapState('cart', {
      items: state => (state as any).items
    }),

    cartItems() {
      return Object.values(this.items);
    }
  }
})
</script>

<style scoped>
.cartList {
  display: flex;
  flex-direction: column;
  min-width: 500px;
}
</style>
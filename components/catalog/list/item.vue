<template>
  <div class="item">
    <div class="imageWrapper">
      <img :src="image" alt="" class="image">
    </div>
    <div class="price">{{ price }}</div>
    <h4 class="title">{{ title }}</h4>
    <button>Добавить в корзину</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CatalogListItem',

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  computed: {
    image(): string {
      return this.item.image;
    },
    price(): number {
      return this.item.price;
    },
    title(): string {
      return this.item.title;
    },
    description(): string {
      return this.item.description;
    }
  }
})
</script>

<style scoped>
.item {
  max-width: 300px;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 8px;
}

.imageWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  margin-bottom: 8px;
}

.image {
  max-width: 250px;
  max-height: 250px;
}

.title {
  font-weight: normal;
}
</style>
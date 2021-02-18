<template>
  <div class="wrapper">
    <h1 class="title">Категория товаров 1:</h1>
    <div class="list">
      <CatalogListItem
        v-for="item of items"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CatalogList',

  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
})
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}

.title {
  text-align: initial;
}

.list {
  display: flex;
  flex-wrap: wrap;
  padding-top: 16px;
}
</style>
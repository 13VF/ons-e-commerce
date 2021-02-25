<template>
  <div class="wrapper">
    <h1 class="title">{{ title + ':' }}</h1>
    <div class="list">
      <CatalogListItemWrapper
        v-for="item of items"
        :key="item.id"
      >
        <CatalogListItem
          :item="item"
        />
      </CatalogListItemWrapper>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CatalogList',

  props: {
    activeCategory: {
      type: Object,
      required: true
    }
  },

  computed: {
    title() {
      return this.activeCategory.title;
    },

    items() {
      return this.activeCategory.products;
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
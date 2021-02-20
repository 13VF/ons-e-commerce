<template>
  <div class="categories">
    <h3>Выберите категорию:</h3>
    <div
      v-for="category in categories"
      :key="category.key"
      class="category"

      @click="onClick(category.key)"
    >
      {{ category.title }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CatalogCategories',

  props: {
    categories: {
      type: Array,
      required: true
    }
  },

  methods: {
    onClick(categoryKey: string) {
      this.$emit('change', categoryKey);
    }
  }
})
</script>

<style scoped>
.categories {
  display: flex;
  flex-direction: column;
}

.category {
  cursor: pointer;
}

.category:hover {
  color: lightblue;
}
</style>
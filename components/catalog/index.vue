<template>
  <div class="catalog">
    <div class="column modFirst">
      <CatalogCategories
        :categories="categoriesToSwitch"

        @change="onCategoryChange"
      />
    </div>
    <div class="column modSecond">
      <CatalogList
        :activeCategory="activeCategoryData"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import booksMock from '../../assets/json/books.json';
import gpusMock from '../../assets/json/gpus.json';

export default Vue.extend({
  name: 'CatalogMain',

  data() {
    return {
      categories: [
        booksMock,
        gpusMock
      ],
      activeCategory: undefined
    };
  },

  methods: {
    onCategoryChange(categoryKey: string) {
      this.activeCategory = categoryKey;
    }
  },

  computed: {
    categoriesToSwitch() {
      return this.categories.map( ({key, title}) => ({
        key,
        title
      }));
    },

    activeCategoryData() {
      if (!this.activeCategory) {
        return this.categories[0];
      }

      return this.categories.find(category => category.key === this.activeCategory);
    }
  }
})
</script>

<style scoped>
.catalog {
  display: flex;
  width: 100%;
}

.column {
  width: 100%;
}

.column.modFirst {
  max-width: 250px;
  padding-right: 25px;
}
</style>
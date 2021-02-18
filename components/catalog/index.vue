<template>
  <div class="catalog">
    <div class="column modFirst">
      <CatalogCategories />
    </div>
    <div class="column modSecond">
      <CatalogList
        :items="booksMock.products"
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
      booksMock,
      gpusMock
    };
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
  max-width: 200px;
}
</style>
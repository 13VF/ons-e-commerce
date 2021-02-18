<template>
  <div class="footer">
    © 1998 – 2021 ООО «ONS 3 группа». Все права защищены.
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Footer',
})
</script>

<style scoped>
.footer {
  width: 100%;
  height: 100px;
  background-color: lightgray;
  display: flex;
  align-items: center;
  padding: 16px;
}
</style>
<template>
  <div class="itemWrapper">
    <slot />
  </div>
</template>

<style scoped>
.itemWrapper {
  display: flex;
  max-width: 300px;
  width: 100%;
  margin: 0 8px 8px 0;
  border: 1px solid black;
}
</style>
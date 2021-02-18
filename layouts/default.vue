<template>
  <div class="layoutWrapper">
    <div class="upper">
      <Header />
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
<style scoped>
.layoutWrapper {
  min-height: 100vh;
  min-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.upper {
  width: 100%;
  max-width: 1448px;
}
</style>
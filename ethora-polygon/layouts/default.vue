<template>
  <div class="flex flex-col min-h-screen">
    <Header></Header>
    <div class="grow">
      <slot />
    </div>
    <Footer></Footer>
  </div>
</template>
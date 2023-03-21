<template>
  <div class="flex flex-col min-h-screen">
    <notifications />
    <Header></Header>
    <div class="grow flex flex-col">
      <slot />
    </div>
    <Footer></Footer>
  </div>
</template>
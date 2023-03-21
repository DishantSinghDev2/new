<template>
  <div class="grow flex justify-center items-center">
    <button>Metamask Signin</button>
    <HeadlessDialog :open="true" @close="setIsOpen" class="relative z-50">
    <div class="fixed inset-0 flex items-center justify-center p-4">
      <HeadlessDialogPanel class="w-full max-w-sm rounded bg-white">
        <HeadlessDialogTitle>Complete your order</HeadlessDialogTitle>

        <!-- ... -->
      </HeadlessDialogPanel>
    </div>
  </HeadlessDialog>
  </div>
</template>

<script setup>


</script>
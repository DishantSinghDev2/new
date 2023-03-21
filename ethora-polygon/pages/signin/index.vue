<template>
  <div class="grow flex justify-center items-center">
    <button @click="connectToMetamask">Metamask Signin</button>
    <HeadlessDialog :open="false" @close="setIsOpen" class="relative z-50">
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
import { notify } from "@kyvg/vue3-notification"

function connectToMetamask() {
  if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
  } else {
    notify({
        title: 'MetaMask is not installed!',
        text: 'If you want to use this app Install MetaMask first!',
        type: 'error',
    })
  }
}

</script>
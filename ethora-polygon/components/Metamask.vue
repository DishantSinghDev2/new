<template>
  <div>
    metamask
  </div>
</template>

<script setup>
  onMounted(() => {
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
    }
  })
</script>
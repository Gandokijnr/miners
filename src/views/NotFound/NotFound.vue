<template>
    <div class="flex h-screen bg-black justify-center items-center">
      <div class="text-center">
        <div class="text-purple-500 text-8xl font-bold">404</div>
        <div class="text-pink-500 text-2xl mt-4 mb-20">This page doesn't exist.</div>
        <RouterLink to="/" class="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 mt-8 rounded-md">
          Go back home
        </RouterLink>
      </div>
    </div>
  </template>
  
  <script setup>
  // No script needed for this simple component
  </script>
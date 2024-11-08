<template>
  <div class="flex flex-col items-center text-center p-6 space-y-6">
    <h1 class="text-2xl font-bold">Get in Touch</h1>
    <p class="text-gray-500">Urgent? Call now.</p>
    
    <button class="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg flex items-center space-x-2">
      <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.62 10.79a15.3 15.3 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.09-.23c1.12.45 2.33.7 3.6.7a1 1 0 011 1V20a1 1 0 01-1 1c-9.39 0-17-7.61-17-17a1 1 0 011-1h3.01a1 1 0 011 1c0 1.27.25 2.48.7 3.6a1 1 0 01-.23 1.09l-2.2 2.2z" />
      </svg>
      <span>(234) 123-4567-901</span>
    </button>
    
    <p class="text-gray-500">Or fill out the form below.</p>
    
    <form @submit.prevent="handleSubmit" class="w-full max-w-md space-y-4">
      <div class="flex space-x-2">
        <input
          type="text"
          v-model="name"
          placeholder="Name"
          class="w-1/2 p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <input
          type="email"
          v-model="email"
          placeholder="Email"
          class="w-1/2 p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
      </div>
      
      <textarea
        v-model="message"
        placeholder="Message"
        class="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none h-32"
      ></textarea>
      
      <button type="submit" class="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg">
        Send
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

    const name = ref('');
    const email = ref('');
    const message = ref('');

    const handleSubmit = () => {
      alert('Form submitted');
  }
</script>

<style scoped>
/* Additional custom styles if needed */
</style>

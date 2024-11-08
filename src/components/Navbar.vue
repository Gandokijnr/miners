<template>
  <nav class="bg-white sticky top-0 p-4 z-10">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Logo Section -->
      <div class="flex items-center space-x-2">
        <img src="https://www.zarla.com/website-builder/api/logo/67628acac20ee744d391d1bb039cf2a69a7074d8908eca086d4acc3220fd4eb7"
             class="w-10 sm:w-12 h-12 sm:h-16"
             alt="Logo"
        />
        <span class="text-xl font-semibold text-gray-800">MINER</span>
      </div>

      <!-- Hamburger Icon (for mobile) -->
      <button @click="toggleMobileMenu" class="md:hidden text-gray-800 focus:outline-none">
        <template v-if="mobileMenuOpen">
          <!-- Close Icon (X) -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </template>
        <template v-else>
          <!-- Hamburger Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/>
          </svg>
        </template>
      </button>

      <!-- Desktop Navigation Links -->
      <div class="hidden md:flex space-x-4">
        <button v-for="link in navLinks" :key="link.name" :class="buttonClass(link)">
          {{ link.name }}
        </button>
      </div>

      <!-- Contact Information (visible on larger screens) -->
      <div class="hidden md:flex items-center space-x-1 text-gray-600">
        <i class="fas fa-phone-alt"></i>
        <span>(234) 123-4567-901</span>
      </div>
    </div>

    <!-- Sliding Sidebar Menu -->
    <div v-if="mobileMenuOpen" class="fixed inset-0 bg-black bg-opacity-50 z-20" @click="closeMobileMenu">
      <div
        class="absolute top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out"
        :class="{ 'translate-x-0': mobileMenuOpen, '-translate-x-full': !mobileMenuOpen }"
        @click.stop
      >
        <div class="flex flex-col items-center space-y-2 py-4">
          <button v-for="link in navLinks" :key="link.name" :class="buttonClass(link)">
            {{ link.name }}
          </button>
          <!-- Contact Information for mobile -->
          <div class="flex items-center space-x-1 text-gray-600 pt-2">
            <i class="fas fa-phone-alt"></i>
            <span>(234) 123-4567-901</span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

// Define navigation links and styles
const navLinks = ref([
  { name: 'Home', active: false },
  { name: 'About Us', active: false },
  { name: 'Services', active: false },
  { name: 'How It Works', active: false },
  { name: 'Contact Us', active: false },
]);

// State for mobile menu toggle
const mobileMenuOpen = ref(false);

// Toggle mobile menu function
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

// Close menu function
const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

// Define button style based on active state
const buttonClass = (link) =>
  `px-4 py-2 rounded-full transition-colors ${link.active ? 'text-blue-500 bg-gray-100 font-semibold' : 'text-gray-700 hover:bg-gray-200'}`;

</script>

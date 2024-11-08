<template>
    <div class="flex h-screen items-center justify-center bg-gray-50 fade-in-top">
      <div class="flex max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <!-- Left Side: Form -->
        <div class="w-full md:w-1/2 p-8 md:p-12">
          <h2 class="text-2xl font-semibold mb-4">Hi there!</h2>
          <p class="text-gray-600 mb-6">Welcome back, kindly login to your.<br />No credit card required.</p>
  
          <form @submit.prevent="handleSignin" class="space-y-4">
            <div>
              <label for="email" class="sr-only">Email</label>
              <input
                id="email"
                type="email"
                v-model="email"
                placeholder="name@email.com"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input
                id="password"
                type="password"
                v-model="password"
                placeholder="Password"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div class="flex items-center">
              <input
                id="updates"
                type="checkbox"
                v-model="updates"
                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label for="updates" class="ml-2 text-gray-600">Keep me sign in</label>
            </div>
            <button
              type="submit"
              class="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
            >
              Sign in your account
            </button>
          </form>
  
          <div class="mt-6 flex items-center justify-center">
            <button
              class="w-full py-2 px-4 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-100"
            >
              <svg class="w-5 h-5 mr-2 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path
                  d="M44.5 20H24v8.5h12.1c-1.6 4.6-5.9 7.5-12.1 7.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.2 0 6.2 1.2 8.5 3.2l6-6c-4.3-3.9-9.9-6.2-14.5-6.2C11 1 1 11 1 24s10 23 23 23c11.8 0 22-9 22-22 0-1.4-.2-2.6-.5-4z"
                  fill="#FFC107"
                />
                <path
                  d="M6.3 14.8l6.6 4.8C14.3 15.8 18.8 13 24 13c3.2 0 6.2 1.2 8.5 3.2l6-6C33.2 5.3 28.7 3 24 3 15.8 3 8.6 7.7 6.3 14.8z"
                  fill="#FF3D00"
                />
                <path
                  d="M24 47c4.7 0 9.2-1.8 12.5-5.1l-6-6c-2.3 2-5.3 3.2-8.5 3.2-6.2 0-10.5-3.9-12.1-7.5l-6.6 5c2.4 6.9 9.6 11.4 17.2 11.4z"
                  fill="#4CAF50"
                />
                <path
                  d="M44.5 20H24v8.5h12.1c-.5 1.5-1.2 2.8-2.1 4l6 6c2.5-2.6 4.5-6.2 4.5-10.5 0-1.4-.2-2.6-.5-4z"
                  fill="#1976D2"
                />
              </svg>
              Sign in with Google
            </button>
          </div>
  
          <div class="mt-4 text-center">
            <p class="text-sm text-gray-600">
              You're yet to have an account?
              <RouterLink :to="{name: 'signup'}" href="#" class="text-blue-700  hover:underline">Sign up</RouterLink>
            </p>
          </div>
        </div>
  
        <!-- Right Side: Illustration and Companies -->
        <div class="hidden md:flex md:w-1/2 bg-white items-center justify-center">
          <div class="p-8">
            <img src="https://img.freepik.com/premium-photo/fun-orangutan-animation_183364-11962.jpg?uid=R100075549&ga=GA1.1.940948083.1726918770&semt=ais_hybrid" alt="Illustration" class="w-full h-auto mb-6" />
            <p class="text-gray-600 text-center font-semibold">We're welcoming you onboard</p>
            <div class="flex flex-wrap justify-center mt-4 space-x-4">
              <img src="https://img.freepik.com/free-photo/macro-miner-figures-working-bitcoin-virtual-cryptocurrency-mining-concept_268835-3190.jpg?uid=R100075549&ga=GA1.1.940948083.1726918770&semt=ais_hybrid" alt="Company 1" class="h-6" />
              <img src="https://img.freepik.com/free-photo/golden-bitcoins-stacked-white-background_23-2147893773.jpg?uid=R100075549&ga=GA1.1.940948083.1726918770&semt=ais_hybrid" alt="Company 2" class="h-6" />
              <img src="https://img.freepik.com/free-photo/3d-cryptocurrency-rendering-design_23-2149074557.jpg?uid=R100075549&ga=GA1.1.940948083.1726918770&semt=ais_hybrid" alt="Company 3" class="h-6" />
              <!-- Add more logos as needed -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const email = ref('');
  const password = ref('');
  const updates = ref(false);
  
  function handleSignup() {
    // Handle signup logic here
    console.log('Signing up with', email.value, password.value, updates.value);
  }
  </script>
  
  <style scoped>
  /* Add any additional custom styles here */
  </style>
  
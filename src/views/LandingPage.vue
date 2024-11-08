<template>
    <div class="my-12 fade-in-top">
      <div class="flex flex-col items-center justify-center text-center">
        <h1 class="text-4xl md:text-8xl font-bold text-gray-800">Welcome to Miner</h1>
        <p class="mt-4 text-gray-800 text-3xl font-bold md:text-7xl">Your Gateway to</p>
        <p class="mt-4 text-gray-800 text-2xl font-bold md:text-4xl">Cryptocurrency Mining</p>
        <RouterLink :to="{name: 'signup'}" class="bg-gray-700 text-white text-xl md:text-3xl font-bold rounded-full px-8 md:px-12 py-2 md:py-4 my-12">
          Get Started Now
        </RouterLink>
      </div>
  
      <div class="flex flex-col items-center justify-center">
        <picture>
          <img class="rounded-lg" src="../assets/images/bitcoins.jpeg" alt="Bitcoin Icon" />
        </picture>
      </div>
  
      <div class="description container mx-auto my-12 mb-12 md:mb-40 px-4 md:px-0 md:w-2/3 ">
        <p class="text-base md:text-lg text-center">
            Welcome to Miner, your one-stop platform for easy and efficient cryptocurrency mining. Our user-friendly interface allows you to start mining Bitcoin and other cryptocurrencies hassle-free.
            With Miner, you can join the world of cryptocurrency mining without the need for expensive equipment or technical expertise. Our platform is designed to make mining accessible to everyone, whether you're a beginner or an experienced miner.
            Take advantage of our cutting-edge technology and start generating passive income through cryptocurrency mining today. Join Miner and unlock the potential of digital currency mining in a simple and efficient way.
        </p>
      </div>

      <div class="mission-statement bg-gray-200 p-12 py-32">
        <div class="w-auto md:2/3 container mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800">Learn About Miner's Mission in the</h2>
            <h3 class="text-3xl md:text-4xl font-bold text-gray-800"> Cryptocurrency Industry</h3>
            <p class="text-base md:text-lg my-12">
                Miner is dedicated to providing a user-friendly platform for individuals to easily mine cryptocurrencies like Bitcoin and Ethereum. Our team of experts is constantly innovating to ensure a seamless mining experience for our users.
                With a focus on transparency and security, Miner prioritizes the safety of our users' investments and data. We believe in empowering individuals to participate in the growing world of cryptocurrency mining.
                Join us on our mission to democratize cryptocurrency mining and make it accessible to everyone. Start mining with Miner today and be a part of the future of finance.        
            </p>
        </div>
      </div>

    <Services />

    <div class="picture-frame">
  <picture>
    <img
      class="rounded-lg w-full h-96 object-cover"
      src="https://cdn.zarlasites.com/image/574aa32ed172378cadb82ffc0cdf9428f72607213a30832c3fc758408c6d9c16/desktop-920"
      alt="Mining Machine Icon"
    />
  </picture>

  <div>
      <h3 class="text-3xl md:text-4xl font-bold text-gray-800 text-center my-12">
        Start Mining Cryptocurrency Today
      </h3>
      <div class="description container mx-auto my-12 mb-12 md:mb-40 px-4 md:px-0 md:w-2/3 text-center">
        <p>Our platform offers a simple and user-friendly interface that allows you to easily start mining cryptocurrency like Bitcoin.</p>
        <p>By utilizing the power of your computer or smartphone, you can mine cryptocurrency and potentially earn profits in the rapidly growing digital currency market.</p>
        <p>With Miner, you can take advantage of the booming cryptocurrency industry and start building your own digital wealth. Sign up now and start mining today.</p>
        <button class="bg-gray-700 text-white text-xl md:text-3xl font-bold rounded-full px-8 md:px-12 py-2 md:py-4 my-12">
          Get Started Now
        </button>
      </div>
      </div>

      <div class="plans bg-gray-200 p-12 py-32 text-center">
        <div class="container mx-auto text-center md:w-1/3 w-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800">Choose the Perfect Plan for Your</h2>
            <h3 class="text-3xl md:text-4xl font-bold text-gray-800">Cryptocurrency Mining Needs</h3>
              <p class="text-base md:text-lg my-12 ">At Miner, we offer a range of pricing plans to suit your cryptocurrency mining needs. Whether you're a beginner or an experienced miner, we have a plan that's right for you.</p>
              <p class="text-base md:text-lg">Our pricing plans are designed to be affordable and flexible, allowing you to start mining cryptocurrency with ease. With our user-friendly platform, you can start earning coins like Bitcoin in no time.</p>
              <p class="text-base md:text-lg">Sign up for a plan today and take the first step towards becoming a successful cryptocurrency miner. Join the Miner community and start profiting from the world of digital currency.</p>
        </div>
      </div>
    </div>
    <Contact /> 
    <Footer />
</div>
</template>

<script setup>
import Services from '@/components/Services.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'
import { RouterLink } from 'vue-router';

</script>

<style scoped>
.fade-in-top{-webkit-animation:fade-in-top 1s cubic-bezier(.39,.575,.565,1.000) both;animation:fade-in-top 1s cubic-bezier(.39,.575,.565,1.000) both}

@-webkit-keyframes fade-in-top{0%{-webkit-transform:translateY(-50px);transform:translateY(-50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes fade-in-top{0%{-webkit-transform:translateY(-50px);transform:translateY(-50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}
</style>
<template>
  <div>
    <nav class="bg-[#1a1a1a] h-16 flex items-center justify-between px-6 shadow-lg text-white">
      
      <h2 class="text-lg font-semibold">
        Meu Sistema
      </h2>

      <!-- user actions component handles icon and menu -->
      <UserMenu />

    </nav>

    <div class="h-1 w-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"></div>
  </div>
</template>

<script setup>
import UserMenu from './UserMenu.vue'
</script>

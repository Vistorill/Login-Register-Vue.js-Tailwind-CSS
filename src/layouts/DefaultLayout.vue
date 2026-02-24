<template>
  <div class="flex">

    <SidebarMenu />

    <div class="flex-1 flex flex-col">

      <Navbar />

      <main class="p-6 bg-[#1a1a1a] min-h-screen">
        <router-view />
      </main>

    </div>

  </div>
</template>

<script setup>
import SidebarMenu from '@/components/SidebarMenu.vue'
import Navbar from '@/components/Navbar.vue'
</script>

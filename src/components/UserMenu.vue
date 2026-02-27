<template>
  <div class="relative" ref="menuRef">
    <button
      @click="toggleMenu"
      class="flex items-center gap-2 text-white hover:text-gray-300 transition"
    >
      <UserIcon class="w-6 h-6" />
      <span v-if="open && userName" class="text-sm">{{ userName }}</span>
      <ChevronDownIcon
        :class="['w-4 h-4 transition-transform', { 'rotate-360': open }]"
      />
    </button>

    <div
      v-if="open"
      class="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-10"
    >
      <ul>
        <!-- future actions could be added here -->
        <li
          class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          @click="logout"
        >
          Sair
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { UserIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'

const router = useRouter()
const open = ref(false)
const userName = ref('Usuário') // could be passed as prop or fetched
const menuRef = ref(null)

function toggleMenu() {
  open.value = !open.value
}

function closeMenu() {
  open.value = false
}

function handleClickOutside(event) {
  if (menuRef.value && !menuRef.value.contains(event.target)) {
    closeMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

function logout() {
  localStorage.removeItem('token')
  sessionStorage.clear()
  router.push('/login')
}
</script>

<style scoped>
/* optional additional styling */
</style>

<template>
  <div>
    <nav class="bg-[#1a1a1a] h-16 flex items-center justify-between px-6 shadow-lg text-white">
      
      <h2 class="text-lg font-semibold">
        Meu Sistema
      </h2>

      <div class="flex items-center gap-6">
        <span>Olá, usuário</span>
        <a
          href="#"
          @click.prevent="logout"
          class="text-red-400 hover:text-red-300 font-medium transition"
        >
          Sair
        </a>
      </div>

    </nav>

    <div class="h-1 w-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"></div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function logout() {
  // exemplo de limpeza de sessão
  localStorage.removeItem('token')
  sessionStorage.clear()

  // redireciona para login
  router.push('/login')
}
</script>

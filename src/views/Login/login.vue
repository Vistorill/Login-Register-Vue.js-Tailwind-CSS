<template>
  <div class="min-h-screen flex items-center justify-center bg-[#1a2847]">

    <div class="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

      <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">
        Entrar na conta
      </h2>

      <div class="space-y-4">

        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          v-model="password"
          type="password"
          placeholder="Senha"
          class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          @click="loginUser"
          class="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Entrar
        </button>

        <p v-if="error" class="text-red-500 text-sm text-center">
          Email ou senha inválidos
        </p>

      </div>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const error = ref(false)

function loginUser() {
  // simulação
  if (email.value === 'admin@email.com' && password.value === '123456') {
    alert('Login OK')
  } else {
    error.value = true
  }
}
</script>

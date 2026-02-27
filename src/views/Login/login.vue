<template>
  <div class="min-h-screen flex items-center justify-center bg-[#0b1427]">

    <div class="bg-[#1a1a1a] shadow-2xl rounded-2xl p-8 w-full max-w-md text-white">

      <h2 class="text-2xl font-bold mb-6 text-center text-green-400">
        Entrar na conta
      </h2>

      <div class="space-y-4">

        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <input
          v-model="password"
          type="password"
          placeholder="Senha"
          class="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <button
          @click="loginUser"
          class="w-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white py-3 rounded-lg hover:opacity-90 transition"
        >
          Entrar
        </button>

        <p v-if="error" class="text-red-500 text-sm text-center">
          Email ou senha inválidos
        </p>

        <a href="/register" class="text-green-400 hover:underline text-sm block text-center">
          Não tem uma conta? Cadastre-se  
        </a>

      </div>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { handleLogin } from '@/service/service'

const router = useRouter()
const email = ref('')
const password = ref('')
const error = ref(false)

async function loginUser() {
  try {
    // Validar credenciais (simulação)
    if (email.value === 'admin@findflow.com' && password.value === '123456') {
      // Chamar a função handleLogin para redirecionar
      await handleLogin({
        email: email.value,
        password: password.value
      }, router)
    } else {
      error.value = true
    }
  } catch (err) {
    error.value = true
    console.error('Erro no login:', err)
  }
}
</script>

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

        <a href="/register" class="text-indigo-600 hover:underline text-sm block text-center">
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

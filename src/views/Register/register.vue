<template>
  <div class="min-h-screen flex items-center justify-center bg-[#1a2847]">

    <div class="bg-[#1a1a1a] shadow-2xl rounded-2xl p-8 w-full max-w-md text-white">

      <h2 class="text-2xl font-bold mb-6 text-center text-green-400">
        Criar conta
      </h2>

      <div class="space-y-4">

        <input
          v-model="name"
          type="text"
          placeholder="Nome"
          class="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />
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
        <input
          v-model="confirmPassword"
          type="password"
          placeholder="Confirmar senha"
          class="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          @click="registerUser"
          class="w-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white py-3 rounded-lg hover:opacity-90 transition"
        >
          Registrar
        </button>

        <p v-if="error" class="text-red-500 text-sm text-center">
          Senhas não coincidem ou campos inválidos
        </p>

        <p v-if="success" class="text-green-600 text-sm text-center">
          Conta criada com sucesso!
        </p>

        <a href="/login" class="text-green-400 hover:underline text-sm block text-center">
          Já tem uma conta? Entrar
        </a>

      </div>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref(false)
const success = ref(false)

function registerUser() {
  error.value = false
  success.value = false

  if (!name.value || !email.value || !password.value) {
    error.value = true
    return
  }

  if (password.value !== confirmPassword.value) {
    error.value = true
    return
  }

  // simulação de cadastro
  success.value = true

  console.log({
    name: name.value,
    email: email.value,
    password: password.value
  })
}
</script>

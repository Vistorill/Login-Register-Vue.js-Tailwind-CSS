<template>
  <div class="space-y-6">
    <!-- Título -->
    <div>
      <h1 class="text-3xl font-bold text-white">Clientes</h1>
      <p class="text-gray-400">Gerencie informações dos clientes e sua documentação</p>
    </div>

    <!-- Filtros -->
    <div class="flex flex-col md:flex-row gap-4">
      <input 
        type="text" 
        placeholder="Pesquisar por nome ou CPF..." 
        class="flex-1 bg-[#1a1a2e] text-white px-4 py-2 rounded border border-gray-700 focus:border-blue-500 focus:outline-none"
      />
      <select class="bg-[#1a1a2e] text-white px-4 py-2 rounded border border-gray-700 focus:border-blue-500 focus:outline-none">
        <option>Todos</option>
        <option>Pessoa Física</option>
        <option>Pessoa Jurídica</option>
      </select>
      <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium">
        Novo Cliente
      </button>
    </div>

    <!-- Grid de Clientes -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(client, index) in clients" :key="index" class="bg-[#1a1a2e] rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h3 class="text-lg font-semibold text-white">{{ client.name }}</h3>
            <p class="text-sm text-gray-400">{{ client.type }}</p>
          </div>
          <span :class="[
            'px-3 py-1 rounded-full text-xs font-medium',
            client.status === 'Ativo' ? 'bg-green-900 text-green-200' : 'bg-red-900 text-red-200'
          ]">
            {{ client.status }}
          </span>
        </div>

        <div class="space-y-2 mb-4">
          <p class="text-sm text-gray-400">
            <span class="text-gray-500">CPF/CNPJ:</span>
            <span class="text-white">{{ client.cpf }}</span>
          </p>
          <p class="text-sm text-gray-400">
            <span class="text-gray-500">Email:</span>
            <span class="text-white">{{ client.email }}</span>
          </p>
          <p class="text-sm text-gray-400">
            <span class="text-gray-500">Telefone:</span>
            <span class="text-white">{{ client.phone }}</span>
          </p>
          <p class="text-sm text-gray-400">
            <span class="text-gray-500">Empréstimos:</span>
            <span class="text-white">{{ client.loans }}</span>
          </p>
        </div>

        <div class="flex gap-2 pt-4 border-t border-gray-700">
          <button class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm font-medium">
            Editar
          </button>
          <button class="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded text-sm font-medium">
            Detalhes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const clients = ref([
  { name: 'João Silva', type: 'Pessoa Física', cpf: '123.456.789-00', email: 'joao@email.com', phone: '(11) 98765-4321', loans: 2, status: 'Ativo' },
  { name: 'Tech Solutions Ltda', type: 'Pessoa Jurídica', cpf: '12.345.678/0001-90', email: 'contato@techsolutions.com', phone: '(11) 3333-4444', loans: 1, status: 'Ativo' },
  { name: 'Maria Santos', type: 'Pessoa Física', cpf: '987.654.321-11', email: 'maria@email.com', phone: '(21) 99999-8888', loans: 0, status: 'Ativo' },
  { name: 'Carlos Oliveira', type: 'Pessoa Física', cpf: '456.789.123-22', email: 'carlos@email.com', phone: '(31) 98888-7777', loans: 3, status: 'Inativo' },
  { name: 'Comércio ABC S.A.', type: 'Pessoa Jurídica', cpf: '98.765.432/0001-11', email: 'vendas@abc.com', phone: '(41) 3232-3232', loans: 2, status: 'Ativo' },
  { name: 'Ana Costa', type: 'Pessoa Física', cpf: '789.456.123-33', email: 'ana@email.com', phone: '(51) 97777-6666', loans: 1, status: 'Ativo' },
])
</script>

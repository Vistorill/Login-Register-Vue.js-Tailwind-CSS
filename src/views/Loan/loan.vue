<template>
  <div class="space-y-6">
    <!-- Título -->
    <div>
      <h1 class="text-3xl font-bold text-white">Empréstimos</h1>
      <p class="text-gray-400">Gerencie e acompanhe todos os empréstimos ativos</p>
    </div>

    <!-- Filtros -->
    <div class="flex flex-col md:flex-row gap-4">
      <input 
        type="text" 
        placeholder="Pesquisar por cliente..." 
        class="flex-1 bg-[#1a1a2e] text-white px-4 py-2 rounded border border-gray-700 focus:border-blue-500 focus:outline-none"
      />
      <select class="bg-[#1a1a2e] text-white px-4 py-2 rounded border border-gray-700 focus:border-blue-500 focus:outline-none">
        <option>Todos os Status</option>
        <option>Ativo</option>
        <option>Pago</option>
        <option>Vencido</option>
      </select>
      <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium">
        Novo Empréstimo
      </button>
    </div>

    <!-- Tabela de Empréstimos -->
    <div class="bg-[#1a1a2e] rounded-lg border border-gray-700 overflow-hidden">
      <table class="w-full">
        <thead>
          <tr class="border-b border-gray-700 bg-[#0f172a]">
            <th class="px-6 py-4 text-left text-sm font-semibold text-gray-300">Cliente</th>
            <th class="px-6 py-4 text-left text-sm font-semibold text-gray-300">Valor</th>
            <th class="px-6 py-4 text-left text-sm font-semibold text-gray-300">Juros</th>
            <th class="px-6 py-4 text-left text-sm font-semibold text-gray-300">Parcelas</th>
            <th class="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>
            <th class="px-6 py-4 text-left text-sm font-semibold text-gray-300">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(loan, index) in loans" :key="index" class="border-b border-gray-700 hover:bg-[#252540] transition">
            <td class="px-6 py-4 text-sm text-white">{{ loan.client }}</td>
            <td class="px-6 py-4 text-sm text-white">R$ {{ loan.amount }}</td>
            <td class="px-6 py-4 text-sm text-white">{{ loan.interest }}%</td>
            <td class="px-6 py-4 text-sm text-white">{{ loan.installments }}</td>
            <td class="px-6 py-4 text-sm">
              <span :class="[
                'px-3 py-1 rounded-full text-xs font-medium',
                loan.status === 'Ativo' ? 'bg-green-900 text-green-200' : 
                loan.status === 'Pago' ? 'bg-blue-900 text-blue-200' :
                'bg-red-900 text-red-200'
              ]">
                {{ loan.status }}
              </span>
            </td>
            <td class="px-6 py-4 text-sm">
              <button class="text-blue-400 hover:text-blue-300">Ver</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const loans = ref([
  { client: 'João Silva', amount: '5.000,00', interest: 12, installments: 12, status: 'Ativo' },
  { client: 'Maria Santos', amount: '10.000,00', interest: 10, installments: 24, status: 'Ativo' },
  { client: 'Carlos Oliveira', amount: '3.500,00', interest: 15, installments: 6, status: 'Pago' },
  { client: 'Ana Costa', amount: '7.200,00', interest: 11, installments: 18, status: 'Ativo' },
  { client: 'Pedro Alves', amount: '2.800,00', interest: 18, installments: 12, status: 'Vencido' },
])
</script>

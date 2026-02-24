<template>
  <div class="space-y-6">
    <!-- Título -->
    <div>
      <h1 class="text-3xl font-bold text-white">Pagamentos</h1>
      <p class="text-gray-400">Acompanhe e registre os pagamentos de empréstimos</p>
    </div>

    <!-- Cards de Resumo -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div class="bg-[#1a1a2e] rounded-lg p-6 border border-gray-700">
        <p class="text-gray-400 text-sm">Pagamentos Hoje</p>
        <p class="text-3xl font-bold text-white mt-2">R$ 12.450</p>
        <p class="text-gray-500 text-xs mt-2">5 pagamentos</p>
      </div>

      <div class="bg-[#1a1a2e] rounded-lg p-6 border border-gray-700">
        <p class="text-gray-400 text-sm">Esta Semana</p>
        <p class="text-3xl font-bold text-white mt-2">R$ 82.500</p>
        <p class="text-gray-500 text-xs mt-2">28 pagamentos</p>
      </div>

      <div class="bg-[#1a1a2e] rounded-lg p-6 border border-gray-700">
        <p class="text-gray-400 text-sm">Este Mês</p>
        <p class="text-3xl font-bold text-white mt-2">R$ 245.890</p>
        <p class="text-gray-500 text-xs mt-2">112 pagamentos</p>
      </div>

      <div class="bg-[#1a1a2e] rounded-lg p-6 border border-gray-700">
        <p class="text-gray-400 text-sm">Pendentes</p>
        <p class="text-3xl font-bold text-red-400 mt-2">R$ 18.750</p>
        <p class="text-gray-500 text-xs mt-2">8 pagamentos</p>
      </div>
    </div>

    <!-- Filtros e Ações -->
    <div class="flex flex-col md:flex-row gap-4">
      <input 
        type="text" 
        placeholder="Pesquisar por cliente..." 
        class="flex-1 bg-[#1a1a2e] text-white px-4 py-2 rounded border border-gray-700 focus:border-blue-500 focus:outline-none"
      />
      <select class="bg-[#1a1a2e] text-white px-4 py-2 rounded border border-gray-700 focus:border-blue-500 focus:outline-none">
        <option>Todos os Status</option>
        <option>Pendente</option>
        <option>Processando</option>
        <option>Concluído</option>
      </select>
      <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium">
        Registrar Pagamento
      </button>
    </div>

    <!-- Tabela de Pagamentos -->
    <div class="bg-[#1a1a2e] rounded-lg border border-gray-700 overflow-hidden">
      <table class="w-full">
        <thead>
          <tr class="border-b border-gray-700 bg-[#0f172a]">
            <th class="px-6 py-4 text-left text-sm font-semibold text-gray-300">Cliente</th>
            <th class="px-6 py-4 text-left text-sm font-semibold text-gray-300">Valor</th>
            <th class="px-6 py-4 text-left text-sm font-semibold text-gray-300">Data</th>
            <th class="px-6 py-4 text-left text-sm font-semibold text-gray-300">Parcela</th>
            <th class="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>
            <th class="px-6 py-4 text-left text-sm font-semibold text-gray-300">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(payment, index) in payments" :key="index" class="border-b border-gray-700 hover:bg-[#252540] transition">
            <td class="px-6 py-4 text-sm text-white">{{ payment.client }}</td>
            <td class="px-6 py-4 text-sm text-white">R$ {{ payment.amount }}</td>
            <td class="px-6 py-4 text-sm text-white">{{ payment.date }}</td>
            <td class="px-6 py-4 text-sm text-white">{{ payment.installment }}</td>
            <td class="px-6 py-4 text-sm">
              <span :class="[
                'px-3 py-1 rounded-full text-xs font-medium',
                payment.status === 'Concluído' ? 'bg-green-900 text-green-200' : 
                payment.status === 'Pendente' ? 'bg-yellow-900 text-yellow-200' :
                'bg-blue-900 text-blue-200'
              ]">
                {{ payment.status }}
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

const payments = ref([
  { client: 'João Silva', amount: '500,00', date: '24/02/2026', installment: '3/12', status: 'Concluído' },
  { client: 'Maria Santos', amount: '450,00', date: '24/02/2026', installment: '5/24', status: 'Concluído' },
  { client: 'Ana Costa', amount: '520,00', date: '23/02/2026', installment: '8/18', status: 'Concluído' },
  { client: 'Tech Solutions', amount: '1.200,00', date: '22/02/2026', installment: '2/24', status: 'Concluído' },
  { client: 'Carlos Oliveira', amount: '480,00', date: '21/02/2026', installment: '11/12', status: 'Pendente' },
  { client: 'Comércio ABC', amount: '890,00', date: '20/02/2026', installment: '4/12', status: 'Processando' },
])
</script>

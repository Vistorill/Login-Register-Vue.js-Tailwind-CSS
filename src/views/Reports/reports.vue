<template>
  <div class="space-y-6">
    <!-- Título -->
    <div>
      <h1 class="text-3xl font-bold text-white">Relatórios</h1>
      <p class="text-gray-400">Gere e visualize relatórios detalhados do sistema</p>
    </div>

    <!-- Filtros -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <select class="bg-[#1a1a2e] text-white px-4 py-2 rounded border border-gray-700 focus:border-blue-500 focus:outline-none">
        <option>Janeiro</option>
        <option>Fevereiro</option>
        <option>Março</option>
        <option>Abril</option>
        <option>Maio</option>
        <option>Junho</option>
      </select>
      <select class="bg-[#1a1a2e] text-white px-4 py-2 rounded border border-gray-700 focus:border-blue-500 focus:outline-none">
        <option>2025</option>
        <option>2026</option>
      </select>
      <select class="bg-[#1a1a2e] text-white px-4 py-2 rounded border border-gray-700 focus:border-blue-500 focus:outline-none">
        <option>Todos os Tipos</option>
        <option>Empréstimos</option>
        <option>Pagamentos</option>
        <option>Clientes</option>
      </select>
      <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium">
        Exportar PDF
      </button>
    </div>

    <!-- Relatórios Disponíveis -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Relatório de Empréstimos -->
      <div class="bg-[#1a1a2e] rounded-lg p-6 border border-gray-700">
        <h3 class="text-lg font-semibold text-white mb-4">Resumo de Empréstimos</h3>
        <div class="space-y-3">
          <div class="flex justify-between text-sm">
            <span class="text-gray-400">Total de Empréstimos</span>
            <span class="text-white font-medium">428</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-400">Valor Total Emprestado</span>
            <span class="text-white font-medium">R$ 1.245.890</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-400">Empréstimos Ativos</span>
            <span class="text-green-400 font-medium">285</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-400">Empréstimos Quitados</span>
            <span class="text-blue-400 font-medium">128</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-400">Empréstimos Vencidos</span>
            <span class="text-red-400 font-medium">15</span>
          </div>
          <button class="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm font-medium">
            Ver Detalhes
          </button>
        </div>
      </div>

      <!-- Relatório de Pagamentos -->
      <div class="bg-[#1a1a2e] rounded-lg p-6 border border-gray-700">
        <h3 class="text-lg font-semibold text-white mb-4">Resumo de Pagamentos</h3>
        <div class="space-y-3">
          <div class="flex justify-between text-sm">
            <span class="text-gray-400">Total de Pagamentos</span>
            <span class="text-white font-medium">892</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-400">Valor Total Pago</span>
            <span class="text-white font-medium">R$ 245.890</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-400">Pagamentos No Prazo</span>
            <span class="text-green-400 font-medium">845</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-400">Pagamentos Atrasados</span>
            <span class="text-red-400 font-medium">47</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-400">Taxa de Adimplência</span>
            <span class="text-green-400 font-medium">94.7%</span>
          </div>
          <button class="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm font-medium">
            Ver Detalhes
          </button>
        </div>
      </div>

      <!-- Relatório de Clientes -->
      <div class="bg-[#1a1a2e] rounded-lg p-6 border border-gray-700">
        <h3 class="text-lg font-semibold text-white mb-4">Resumo de Clientes</h3>
        <div class="space-y-3">
          <div class="flex justify-between text-sm">
            <span class="text-gray-400">Total de Clientes</span>
            <span class="text-white font-medium">2.543</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-400">Clientes Ativos</span>
            <span class="text-green-400 font-medium">2.389</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-400">Novos Clientes</span>
            <span class="text-blue-400 font-medium">145</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-400">Pessoa Física</span>
            <span class="text-white font-medium">2.145</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-400">Pessoa Jurídica</span>
            <span class="text-white font-medium">398</span>
          </div>
          <button class="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm font-medium">
            Ver Detalhes
          </button>
        </div>
      </div>

      <!-- Relatório Financeiro -->
      <div class="bg-[#1a1a2e] rounded-lg p-6 border border-gray-700">
        <h3 class="text-lg font-semibold text-white mb-4">Resumo Financeiro</h3>
        <div class="space-y-3">
          <div class="flex justify-between text-sm">
            <span class="text-gray-400">Receita Total</span>
            <span class="text-green-400 font-medium">R$ 89.450</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-400">Custos Operacionais</span>
            <span class="text-red-400 font-medium">R$ 12.340</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-400">Provisões</span>
            <span class="text-red-400 font-medium">R$ 5.200</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-400">Composição de Juros</span>
            <span class="text-white font-medium">R$ 71.910</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-400">Lucro Operacional</span>
            <span class="text-green-400 font-medium">R$ 71.910</span>
          </div>
          <button class="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm font-medium">
            Ver Detalhes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

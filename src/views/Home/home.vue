<template>
  <div class="space-y-6">
    <!-- Título -->
    <div>
      <h1 class="text-3xl font-bold text-white">
        Bem-vindo ao FindFlow 👋
      </h1>
      <p class="text-gray-400">
        Aqui está um resumo rápido do seu ambiente.
      </p>
    </div>

    <!-- Cards de Estatísticas Principais -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div class="bg-[#1a1a2e] rounded-lg p-6 border border-gray-700">
        <p class="text-gray-400 text-sm">Total de Usuários</p>
        <p class="text-3xl font-bold text-white mt-2">2.543</p>
        <p class="text-green-500 text-xs mt-2">↑ 12% esta semana</p>
      </div>

      <div class="bg-[#1a1a2e] rounded-lg p-6 border border-gray-700">
        <p class="text-gray-400 text-sm">Empréstimos Ativos</p>
        <p class="text-3xl font-bold text-white mt-2">428</p>
        <p class="text-green-500 text-xs mt-2">↑ 8% esta semana</p>
      </div>

      <div class="bg-[#1a1a2e] rounded-lg p-6 border border-gray-700">
        <p class="text-gray-400 text-sm">Pagamentos Hoje</p>
        <p class="text-3xl font-bold text-white mt-2">R$ 12.450</p>
        <p class="text-green-500 text-xs mt-2">5 transações</p>
      </div>

      <div class="bg-[#1a1a2e] rounded-lg p-6 border border-gray-700">
        <p class="text-gray-400 text-sm">Taxa de Adimplência</p>
        <p class="text-3xl font-bold text-white mt-2">94.7%</p>
        <p class="text-gray-500 text-xs mt-2">Excelente</p>
      </div>
    </div>

    <!-- Grid dois - Gráficos e Tabelas -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Gráfico de Empréstimos -->
      <div class="lg:col-span-2 bg-[#1a1a2e] rounded-lg p-6 border border-gray-700">
        <h3 class="text-lg font-semibold text-white mb-4">Empréstimos por Mês</h3>
        <div class="h-64 flex items-end justify-around gap-2">
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 bg-blue-500 rounded" style="height: 80px;"></div>
            <span class="text-xs text-gray-400">Jan</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 bg-blue-600 rounded" style="height: 120px;"></div>
            <span class="text-xs text-gray-400">Fev</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 bg-blue-500 rounded" style="height: 95px;"></div>
            <span class="text-xs text-gray-400">Mar</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 bg-blue-600 rounded" style="height: 140px;"></div>
            <span class="text-xs text-gray-400">Abr</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 bg-blue-500 rounded" style="height: 110px;"></div>
            <span class="text-xs text-gray-400">Mai</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="w-12 bg-blue-600 rounded" style="height: 155px;"></div>
            <span class="text-xs text-gray-400">Jun</span>
          </div>
        </div>
      </div>

      <!-- Resumo Rápido -->
      <div class="bg-[#1a1a2e] rounded-lg p-6 border border-gray-700">
        <h3 class="text-lg font-semibold text-white mb-4">Resumo Rápido</h3>
        <div class="space-y-3">
          <div class="flex justify-between items-center pb-3 border-b border-gray-700">
            <span class="text-gray-400">Clientes Novos</span>
            <span class="text-green-400 font-semibold">+ 145</span>
          </div>
          <div class="flex justify-between items-center pb-3 border-b border-gray-700">
            <span class="text-gray-400">Pagtas. Pendentes</span>
            <span class="text-red-400 font-semibold">R$ 18.750</span>
          </div>
          <div class="flex justify-between items-center pb-3 border-b border-gray-700">
            <span class="text-gray-400">Rec. Esta Semana</span>
            <span class="text-white font-semibold">R$ 82.500</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-gray-400">Relatórios Dev.</span>
            <span class="text-yellow-400 font-semibold">3</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Atividades Recentes -->
    <div class="bg-[#1a1a2e] rounded-lg p-6 border border-gray-700">
      <h3 class="text-lg font-semibold text-white mb-4">Atividades Recentes</h3>
      
      <div class="space-y-3">
        <div v-for="(activity, index) in activities" :key="index" class="flex items-start gap-4 pb-3 border-b border-gray-700 last:border-0 last:pb-0">
          <div :class="[
            'w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0',
            activity.type === 'payment' ? 'bg-green-900' :
            activity.type === 'loan' ? 'bg-blue-900' :
            activity.type === 'client' ? 'bg-purple-900' :
            'bg-gray-700'
          ]">
            {{ activity.icon }}
          </div>
          <div class="flex-1">
            <p class="text-white text-sm font-medium">{{ activity.title }}</p>
            <p class="text-gray-400 text-xs">{{ activity.description }}</p>
          </div>
          <span class="text-gray-500 text-xs flex-shrink-0">{{ activity.time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activities = ref([
  { 
    type: 'payment',
    icon: '✓',
    title: 'Pagamento Recebido',
    description: 'João Silva realizou pagamento de R$ 500,00',
    time: 'há 5 min'
  },
  {
    type: 'loan',
    icon: '📋',
    title: 'Empréstimo Aprovado',
    description: 'Novo empréstimo aprovado para Maria Santos - R$ 10.000,00',
    time: 'há 15 min'
  },
  {
    type: 'client',
    icon: '👤',
    title: 'Novo Cliente Registrado',
    description: 'Tech Solutions Ltda foi registrada como novo cliente',
    time: 'há 1 hora'
  },
  {
    type: 'alert',
    icon: '⚠',
    title: 'Alerta: Pagamento em Atraso',
    description: 'Carlos Oliveira com pagamento 5 dias em atraso',
    time: 'há 2 horas'
  },
  {
    type: 'payment',
    icon: '✓',
    title: 'Pagamento Processado',
    description: 'Ana Costa - Parcela 8/18 confirmada - R$ 520,00',
    time: 'há 3 horas'
  }
])
</script>

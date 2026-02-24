<template>
  <div class="space-y-6">
    <!-- Título -->
    <div>
      <h1 class="text-3xl font-bold text-white">Notificações</h1>
      <p class="text-gray-400">Acompanhe alerts e notificações do sistema</p>
    </div>

    <!-- Filtros -->
    <div class="flex gap-4">
      <select class="bg-[#1a1a2e] text-white px-4 py-2 rounded border border-gray-700 focus:border-blue-500 focus:outline-none">
        <option>Todas as Notificações</option>
        <option>Não Lidas</option>
        <option>Alertas</option>
        <option>Atualizações</option>
      </select>
      <button class="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded font-medium">
        Marcar todas como lidas
      </button>
    </div>

    <!-- Lista de Notificações -->
    <div class="space-y-3">
      <div v-for="(notification, index) in notifications" :key="index" 
        :class="[
          'bg-[#1a1a2e] rounded-lg p-4 border border-gray-700 hover:border-blue-500 transition cursor-pointer',
          !notification.read ? 'bg-[#252540]' : ''
        ]">
        <div class="flex gap-4">
          <!-- Ícone/Avatar -->
          <div :class="[
            'w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0',
            notification.type === 'alert' ? 'bg-red-900' :
            notification.type === 'success' ? 'bg-green-900' :
            notification.type === 'info' ? 'bg-blue-900' :
            'bg-yellow-900'
          ]">
            <span class="text-lg">{{ notification.icon }}</span>
          </div>

          <!-- Conteúdo -->
          <div class="flex-1">
            <div class="flex justify-between items-start mb-1">
              <h3 :class="['font-semibold', !notification.read ? 'text-white' : 'text-gray-300']">
                {{ notification.title }}
              </h3>
              <span class="text-xs text-gray-500">{{ notification.time }}</span>
            </div>
            <p class="text-sm text-gray-400 mb-2">{{ notification.message }}</p>
            <div v-if="notification.action" class="flex gap-2">
              <button class="text-blue-400 hover:text-blue-300 text-xs font-medium">
                {{ notification.action }}
              </button>
            </div>
          </div>

          <!-- Status não lido -->
          <div v-if="!notification.read" class="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></div>
        </div>
      </div>
    </div>

    <!-- Sem notificações -->
    <div v-if="notifications.length === 0" class="text-center py-12">
      <p class="text-gray-400">Nenhuma notificação</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const notifications = ref([
  { 
    id: 1,
    title: 'Pagamento Recebido', 
    message: 'João Silva realizou o pagamento de R$ 500,00 referente à parcela 3/12',
    type: 'success',
    icon: '✓',
    time: 'há 5 min',
    read: false,
    action: 'Ver Detalhes'
  },
  {
    id: 2,
    title: 'Empréstimo Aprovado',
    message: 'O empréstimo solicitado por Maria Santos foi aprovado. Valor: R$ 10.000,00',
    type: 'success',
    icon: '✓',
    time: 'há 15 min',
    read: false,
    action: 'Ver Contato'
  },
  {
    id: 3,
    title: 'Alerta: Pagamento Vencendo',
    message: 'Carlos Oliveira tem um pagamento vencendo em 2 dias. Valor: R$ 480,00',
    type: 'alert',
    icon: '⚠',
    time: 'há 1 hora',
    read: false,
    action: 'Notificar Cliente'
  },
  {
    id: 4,
    title: 'Documentação Incompleta',
    message: 'Ana Costa ainda não enviou os documentos necessários para análise de crédito',
    type: 'warning',
    icon: '!',
    time: 'há 2 horas',
    read: true,
    action: 'Enviar Lembrete'
  },
  {
    id: 5,
    title: 'Relatório Gerado',
    message: 'O relatório mensal de pagamentos foi gerado com sucesso',
    type: 'info',
    icon: 'ℹ',
    time: 'há 4 horas',
    read: true,
    action: 'Baixar'
  },
  {
    id: 6,
    title: 'Novo Cliente Registrado',
    message: 'Tech Solutions Ltda foi registrada como novo cliente',
    type: 'info',
    icon: 'ℹ',
    time: 'há 6 horas',
    read: true,
    action: 'Ver Perfil'
  },
])
</script>
